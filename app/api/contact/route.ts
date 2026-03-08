import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter: max 3 requests per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count++;
  return false;
}

export async function POST(req: Request) {
  // Content-type check
  if (!req.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  // Rate limiting by IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiados intentos. Intentá de nuevo en unos minutos." },
      { status: 429 }
    );
  }

  // Parse body safely
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  // Input validation
  const { nombre, email, mensaje } = body as Record<string, unknown>;

  if (
    typeof nombre !== "string" ||
    typeof email !== "string" ||
    typeof mensaje !== "string"
  ) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }

  const nombreClean = nombre.trim();
  const emailClean = email.trim().toLowerCase();
  const mensajeClean = mensaje.trim();

  if (nombreClean.length < 2 || nombreClean.length > 100) {
    return NextResponse.json({ error: "Nombre inválido" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailClean) || emailClean.length > 254) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  if (mensajeClean.length < 10 || mensajeClean.length > 5000) {
    return NextResponse.json({ error: "Mensaje inválido" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Vector IA <noreply@vector-ia.com.ar>",
    to: "team@vector-ia.com.ar",
    replyTo: emailClean,
    subject: `Nueva consulta de ${nombreClean} — Vector IA`,
    text: `Nuevo mensaje desde el formulario de contacto.\n\nDe: ${nombreClean}\nEmail: ${emailClean}\n\nMensaje:\n${mensajeClean}\n\n---\nRespondé directamente a este mail para contactar a ${nombreClean}.`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intentá de nuevo." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
