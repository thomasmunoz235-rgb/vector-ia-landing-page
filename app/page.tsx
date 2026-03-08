"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { Globe, Layers, Database, Zap, Users, Menu, ArrowUpRight, MoveRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const LOGO_URL = "/images/Vector-Ia-trasparente.png";

const services = [
  {
    num: "01",
    icon: Globe,
    title: "Desarrollo Web",
    desc: "Aplicaciones modernas con Next.js, React y TypeScript. Rápidas, escalables y listas para producción desde el día uno.",
    tag: "Next.js · React · TypeScript",
  },
  {
    num: "02",
    icon: Layers,
    title: "Integraciones IA",
    desc: "Conectamos modelos de lenguaje a tus sistemas existentes. Chatbots, asistentes y automatizaciones que trabajan con tu data.",
    tag: "OpenAI · APIs · Agentes",
  },
  {
    num: "03",
    icon: Database,
    title: "RAG & Conocimiento",
    desc: "Sistemas que permiten a los modelos consultar documentos y bases de datos internas con precisión real.",
    tag: "pgvector · LlamaIndex · FastAPI",
  },
  {
    num: "04",
    icon: Zap,
    title: "Automatización",
    desc: "Reducimos trabajo manual conectando herramientas, APIs y modelos de IA en flujos automatizados.",
    tag: "Workflows · APIs · Agentes",
  },
  {
    num: "05",
    icon: Users,
    title: "Consultoría IA",
    desc: "Evaluamos tu negocio e identificamos dónde la IA puede generar mayor impacto en el menor tiempo posible.",
    tag: "Auditoría · Estrategia · Roadmap",
  },
];

const steps = [
  { num: "01", title: "Auditoría", desc: "Entendemos el negocio, los sistemas existentes y dónde hay fricción. Sin supuestos." },
  { num: "02", title: "Diseño", desc: "Definimos la arquitectura técnica y el scope exacto. Lo que se entrega, cuándo y cómo." },
  { num: "03", title: "Implementación", desc: "Desarrollo iterativo con entregas semanales. El cliente ve el progreso en todo momento." },
  { num: "04", title: "Deploy & soporte", desc: "Lanzamos a producción y acompañamos el primer período para asegurar estabilidad." },
];

// Light / corporate palette
const NAVY   = "#0c1a30";   // headings, primary text
const BLUE   = "#1e3a6e";   // brand accent
const BLUE_M = "#2a5cb8";   // mid blue for CTAs
const BLUE_L = "#4a7fd4";   // light blue highlights
const MUTED  = "#64748b";   // secondary text
const BORDER = "#dde3ec";   // subtle borders
const BG     = "#ffffff";   // page bg
const BG_S   = "#f5f8fc";   // subtle section bg
const BG_DARK = "#0c1a30";  // dark contrast block

export default function HomePage() {
  const [formState, setFormState] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    const form = e.currentTarget;
    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const mensaje = (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, mensaje }),
    });

    setFormState(res.ok ? "sent" : "error");
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: BG, fontFamily: "var(--font-body)", color: NAVY }}>

      {/* ─── NAV ──────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{ background: "rgba(255,255,255,0.92)", borderBottom: `1px solid ${BORDER}` }}
      >
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="flex items-center justify-center rounded overflow-hidden"
              style={{ width: 160, height: 44 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO_URL} alt="Vector" className="w-full h-full object-contain" />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {[
              { href: "#servicios", label: "Servicios" },
              { href: "#proceso", label: "Proceso" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[12px] font-medium tracking-wide transition-colors duration-200"
                style={{ color: MUTED }}
                onMouseEnter={(e) => (e.currentTarget.style.color = NAVY)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-5 py-2 rounded-[3px] text-white transition-all duration-200"
              style={{ background: BLUE }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = BLUE_M)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = BLUE)}
            >
              Contacto
            </a>
          </div>

          <Sheet>
            <SheetTrigger className="md:hidden" style={{ color: NAVY }}>
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-white" style={{ borderColor: BORDER }}>
              <div className="flex flex-col gap-6 mt-8">
                {[
                  { href: "#servicios", label: "Servicios" },
                  { href: "#proceso", label: "Proceso" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="text-sm font-medium" style={{ color: MUTED }}>
                    {l.label}
                  </Link>
                ))}
                <Separator style={{ background: BORDER }} />
                <a
                  href="#contacto"
                  className="text-sm font-semibold text-white text-center py-2.5 rounded-[3px]"
                  style={{ background: BLUE }}
                >
                  Contacto
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-14 overflow-hidden">
        {/* Very subtle geometric accent */}
        <div
          className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${BG_S} 0%, #eaf1fc 100%)`,
            clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
        {/* Dot grid on right side */}
        <div
          className="absolute top-0 right-0 w-[55%] h-full pointer-events-none opacity-30"
          style={{
            backgroundImage: `radial-gradient(${BLUE_L}35 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
            clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-8 py-32 relative w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            {/* Label */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 mb-10">
              <span className="w-5 h-px" style={{ background: BLUE_L }} />
              <span
                className="text-[10px] tracking-[0.22em] uppercase font-medium"
                style={{ color: BLUE_L, fontFamily: "var(--font-mono)" }}
              >
                Desarrollo Web & IA · Buenos Aires
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={stagger} className="mb-8">
              <motion.span
                variants={fadeUp}
                className="block"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(56px,8.5vw,124px)",
                  fontWeight: 700,
                  lineHeight: 0.9,
                  letterSpacing: "-0.025em",
                  color: NAVY,
                }}
              >
                Construimos
              </motion.span>
              <motion.span
                variants={fadeUp}
                className="block"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(56px,8.5vw,124px)",
                  fontWeight: 400,
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                  color: `${BLUE}35`,
                }}
              >
                software
              </motion.span>
              <motion.span
                variants={fadeUp}
                className="block"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(56px,8.5vw,124px)",
                  fontWeight: 700,
                  lineHeight: 0.9,
                  letterSpacing: "-0.025em",
                  color: BLUE,
                }}
              >
                inteligente.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[16px] leading-[1.75] max-w-sm mb-12"
              style={{ color: MUTED }}
            >
              Desarrollo web de producto e integraciones de IA para empresas que
              quieren resultados reales, no promesas.
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-center gap-5">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-[3px] transition-all duration-200"
                style={{ background: BLUE }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = BLUE_M)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = BLUE)}
              >
                Hablemos
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                href="#servicios"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: MUTED }}
                onMouseEnter={(e) => (e.currentTarget.style.color = NAVY)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
              >
                Ver servicios <MoveRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────── */}
      <div style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, background: BG_S }}>
        <div className="max-w-6xl mx-auto px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { val: "100%", label: "Proyectos entregados" },
            { val: "< 24h", label: "Tiempo de respuesta" },
            { val: "5+", label: "Servicios especializados" },
            { val: "2026", label: "Activos en producción" },
          ].map(({ val, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: NAVY, fontWeight: 700 }}
              >
                {val}
              </span>
              <span className="text-[12px] font-medium" style={{ color: MUTED }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── SERVICIOS ────────────────────────────────────── */}
      <section id="servicios" className="py-28" style={{ background: BG }}>
        <div className="max-w-6xl mx-auto px-8">
          {/* Header */}
          <motion.div
            className="flex items-center justify-between mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-4">
              <span className="w-5 h-px" style={{ background: BLUE_L }} />
              <span
                className="text-[10px] tracking-[0.22em] uppercase font-medium"
                style={{ color: BLUE_L, fontFamily: "var(--font-mono)" }}
              >
                Servicios
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px,3vw,40px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: NAVY,
              }}
            >
              Lo que construimos
            </h2>
          </motion.div>

          {/* Service rows */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {services.map(({ num, icon: Icon, title, desc, tag }) => (
              <motion.div
                key={num}
                variants={fadeUp}
                className="group relative grid grid-cols-12 items-start gap-6 py-8 cursor-default transition-colors duration-200"
                style={{ borderBottom: `1px solid ${BORDER}` }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = BG_S)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
              >
                {/* Left accent bar on hover */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  style={{ background: BLUE }}
                />

                {/* Number */}
                <div className="col-span-1 hidden md:flex items-start pt-1">
                  <span
                    className="text-[10px] font-medium"
                    style={{ color: `${BLUE_L}60`, fontFamily: "var(--font-mono)" }}
                  >
                    {num}
                  </span>
                </div>

                {/* Icon */}
                <div className="col-span-1 hidden md:flex items-start pt-0.5">
                  <div
                    className="w-8 h-8 rounded-[3px] flex items-center justify-center transition-colors duration-300"
                    style={{ background: `${BLUE}0d`, border: `1px solid ${BORDER}` }}
                  >
                    <Icon
                      className="w-3.5 h-3.5 transition-colors duration-300"
                      style={{ color: BLUE }}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="col-span-12 md:col-span-3">
                  <h3
                    className="text-[15px] font-semibold leading-snug group-hover:text-[#1e3a6e] transition-colors duration-200"
                    style={{ color: NAVY }}
                  >
                    {title}
                  </h3>
                </div>

                {/* Description */}
                <div className="col-span-12 md:col-span-5">
                  <p className="text-[13px] leading-relaxed" style={{ color: MUTED }}>
                    {desc}
                  </p>
                </div>

                {/* Tag + arrow */}
                <div className="col-span-12 md:col-span-2 flex items-start justify-between md:justify-end gap-3">
                  <span
                    className="text-[9px] tracking-wide uppercase font-medium px-2 py-1 rounded-[2px]"
                    style={{
                      color: BLUE,
                      background: `${BLUE}0d`,
                      border: `1px solid ${BLUE}25`,
                      fontFamily: "var(--font-mono)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tag.split(" · ")[0]}
                  </span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 shrink-0 mt-1"
                    style={{ color: BLUE }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESO ──────────────────────────────────────── */}
      <section id="proceso" className="py-28" style={{ background: BG_S, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="flex items-center gap-4 mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="w-5 h-px" style={{ background: BLUE_L }} />
            <span
              className="text-[10px] tracking-[0.22em] uppercase font-medium"
              style={{ color: BLUE_L, fontFamily: "var(--font-mono)" }}
            >
              Proceso
            </span>
            <h2
              className="ml-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px,3vw,40px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: NAVY,
              }}
            >
              The Blueprint
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-px"
            style={{ background: BORDER }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {steps.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                variants={fadeUp}
                className="group p-8 transition-all duration-200 cursor-default relative"
                style={{ background: BG_S }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = BG_S)
                }
              >
                {/* Top connector */}
                <div className="flex items-center justify-between mb-8">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-semibold"
                    style={{ background: BLUE, fontFamily: "var(--font-mono)" }}
                  >
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <MoveRight className="w-3.5 h-3.5 opacity-20" style={{ color: NAVY }} />
                  )}
                </div>
                {/* Large number watermark */}
                <div
                  className="absolute bottom-3 right-5 font-bold leading-none pointer-events-none select-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 72,
                    color: `${BLUE}07`,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  {num}
                </div>
                <h3
                  className="text-[13px] font-semibold mb-2.5 transition-colors duration-200 group-hover:text-[#1e3a6e]"
                  style={{ color: NAVY, fontFamily: "var(--font-mono)" }}
                >
                  {title}
                </h3>
                <p className="text-[13px] leading-relaxed relative" style={{ color: MUTED }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section
        id="contacto"
        className="py-32 relative overflow-hidden"
        style={{ background: BG_DARK }}
      >
        {/* Dot grid bg */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(${BLUE_L} 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(ellipse, ${BLUE}50 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />

        <motion.div
          className="max-w-6xl mx-auto px-8 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
            <span className="w-5 h-px" style={{ background: BLUE_L }} />
            <span
              className="text-[10px] tracking-[0.22em] uppercase font-medium"
              style={{ color: `${BLUE_L}80`, fontFamily: "var(--font-mono)" }}
            >
              Contacto
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mb-5 text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px,7vw,100px)",
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-0.025em",
            }}
          >
            ¿Tenés un proyecto
            <br />
            <span style={{ fontWeight: 500, color: BLUE_L }}>
              en mente?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[15px] leading-relaxed mb-12 max-w-xs"
            style={{ color: "#93b5e870" }}
          >
            Contanos qué necesitás y te respondemos en menos de 24 horas.
          </motion.p>

          {formState === "sent" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 w-full max-w-md py-10 px-8 rounded-[4px]"
              style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${BLUE_L}30` }}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: `${BLUE_L}20`, border: `1px solid ${BLUE_L}40` }}
              >
                <CheckCircle className="w-6 h-6" style={{ color: BLUE_L }} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                <p className="text-[17px] font-semibold text-white mb-1">¡Mensaje enviado!</p>
                <p className="text-[13px]" style={{ color: "#93b5e870" }}>
                  Te respondemos en menos de 24 horas.
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUp}
              className="flex flex-col gap-3 w-full max-w-md"
              onSubmit={handleContactSubmit}
            >
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="nombre"
                  required
                  placeholder="Tu nombre"
                  className="col-span-1 px-4 py-3 text-[13px] rounded-[3px] outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: `1px solid rgba(255,255,255,0.12)`,
                    color: "#fff",
                    fontFamily: "var(--font-body)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = `${BLUE_L}80`)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Tu email"
                  className="col-span-1 px-4 py-3 text-[13px] rounded-[3px] outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: `1px solid rgba(255,255,255,0.12)`,
                    color: "#fff",
                    fontFamily: "var(--font-body)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = `${BLUE_L}80`)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                />
              </div>
              <textarea
                name="mensaje"
                required
                placeholder="Contanos sobre tu proyecto..."
                rows={4}
                className="px-4 py-3 text-[13px] rounded-[3px] outline-none transition-all duration-200 resize-none"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: `1px solid rgba(255,255,255,0.12)`,
                  color: "#fff",
                  fontFamily: "var(--font-body)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = `${BLUE_L}80`)}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              />
              {formState === "error" && (
                <p className="text-[12px]" style={{ color: "#f87171" }}>
                  Hubo un error al enviar. Intentá de nuevo o escribinos a team@vector-ia.com.ar
                </p>
              )}
              <button
                type="submit"
                disabled={formState === "loading"}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[13px] font-semibold text-white rounded-[3px] transition-all duration-200 self-start disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: BLUE, border: `1px solid ${BLUE_L}40` }}
                onMouseEnter={(e) => { if (formState !== "loading") (e.currentTarget as HTMLElement).style.background = BLUE_M; }}
                onMouseLeave={(e) => { if (formState !== "loading") (e.currentTarget as HTMLElement).style.background = BLUE; }}
              >
                {formState === "loading" ? "Enviando..." : "Enviar mensaje"}
                {formState !== "loading" && (
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </button>
            </motion.form>
          )}
        </motion.div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${BORDER}`, background: BG_S }}>
        <div className="max-w-6xl mx-auto px-8 py-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="flex items-center justify-center rounded overflow-hidden opacity-70"
              style={{ width: 120, height: 36 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO_URL} alt="Vector" className="w-full h-full object-contain" />
            </div>
          </Link>
          <div className="flex items-center gap-5">
            <a
              href="mailto:team@vector-ia.com.ar"
              className="text-[11px] transition-colors duration-200"
              style={{ color: MUTED, fontFamily: "var(--font-mono)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = NAVY)}
              onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
            >
              team@vector-ia.com.ar
            </a>
            <Separator orientation="vertical" className="h-3" style={{ background: BORDER }} />
            <span
              className="text-[10px]"
              style={{ color: "#94a3b8", fontFamily: "var(--font-mono)" }}
            >
              © 2026
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
