"use client";

import { motion, type Variants } from "framer-motion";
import { Globe, Layers, Database, Zap, Users } from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const LOGO_URL =
  "https://drive.usercontent.google.com/download?id=1DtUXEbu8zjp5VziwleoBJd9nBINsWB53&export=view&authuser=0";

const services = [
  {
    num: "01",
    icon: Globe,
    title: "Desarrollo Web",
    desc: "Aplicaciones modernas construidas con Next.js, React y TypeScript. Rápidas, escalables y listas para producción desde el día uno.",
    tag: "Next.js · React · TypeScript",
    span: "col-span-12 md:col-span-7",
  },
  {
    num: "02",
    icon: Layers,
    title: "Integraciones IA",
    desc: "Conectamos modelos de lenguaje a tus sistemas existentes. Automatizaciones, chatbots y asistentes que trabajan con tu data.",
    tag: "OpenAI · APIs · Agentes",
    span: "col-span-12 md:col-span-5",
  },
  {
    num: "03",
    icon: Database,
    title: "RAG & Bases de conocimiento",
    desc: "Sistemas RAG que permiten a los modelos consultar tus documentos y bases de datos internas con precisión.",
    tag: "pgvector · LlamaIndex · FastAPI",
    span: "col-span-12 md:col-span-4",
  },
  {
    num: "04",
    icon: Zap,
    title: "Automatización de procesos",
    desc: "Reducimos trabajo manual conectando herramientas, APIs y modelos de IA en flujos automatizados.",
    tag: "Workflows · APIs · Agentes",
    span: "col-span-12 md:col-span-4",
  },
  {
    num: "05",
    icon: Users,
    title: "Consultoría IA",
    desc: "Evaluamos tu negocio e identificamos dónde la IA puede generar mayor impacto en el menor tiempo posible.",
    tag: "Auditoría · Estrategia · Roadmap",
    span: "col-span-12 md:col-span-4",
  },
];

const steps = [
  {
    num: "01",
    title: "Auditoría",
    desc: "Entendemos el negocio, los sistemas existentes y dónde hay fricción. Sin supuestos.",
  },
  {
    num: "02",
    title: "Diseño de solución",
    desc: "Definimos la arquitectura técnica y el scope exacto. Lo que se entrega, cuándo y cómo.",
  },
  {
    num: "03",
    title: "Implementación",
    desc: "Desarrollo iterativo con entregas semanales. El cliente ve el progreso en todo momento.",
  },
  {
    num: "04",
    title: "Deploy & soporte",
    desc: "Lanzamos a producción y acompañamos el primer período para asegurar estabilidad.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a1a1a] bg-black/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-8 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_URL} alt="Vector" className="w-7 h-7 object-contain brightness-0 invert" />
            <span className="text-sm font-semibold tracking-tight">Vector</span>
          </Link>
          <ul className="hidden md:flex items-center gap-8 list-none">
            <li><Link href="#servicios" className="text-xs text-[#666] hover:text-white transition-colors">Servicios</Link></li>
            <li><Link href="#proceso" className="text-xs text-[#666] hover:text-white transition-colors">Proceso</Link></li>
            <li>
              <Link href="#contacto" className="text-xs font-medium bg-white text-black px-4 py-2 rounded-[4px] hover:opacity-85 transition-opacity">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-8 border-x border-[#1a1a1a] min-h-screen flex flex-col justify-center pt-28 pb-20">
        <motion.p
          className="font-mono text-[11px] text-[#444] uppercase tracking-widest mb-10"
          initial="hidden" animate="visible" variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          // vector-ia.com.ar
        </motion.p>

        <motion.h1
          className="text-[clamp(48px,8vw,100px)] font-black leading-none tracking-[-0.04em] mb-8"
          initial="hidden" animate="visible" variants={stagger}
        >
          <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="block">
            Construimos
          </motion.span>
          <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="block">
            software
          </motion.span>
          <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="block text-[#333]">
            con inteligencia
          </motion.span>
          <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="block">
            real.
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-base text-[#666] max-w-md leading-relaxed mb-12"
          initial="hidden" animate="visible" variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Desarrollo web de producto e integraciones de IA para empresas que quieren resultados, no promesas.
        </motion.p>

        <motion.div
          className="flex items-center gap-4"
          initial="hidden" animate="visible" variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-[4px] hover:opacity-85 transition-opacity"
          >
            Hablemos →
          </Link>
          <Link
            href="#servicios"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#333] text-[#666] text-sm font-medium rounded-[4px] hover:text-white hover:border-[#555] transition-colors"
          >
            Ver servicios
          </Link>
        </motion.div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-8 py-24 border-x border-[#1a1a1a]">
          <motion.p
            className="font-mono text-[11px] text-[#444] uppercase tracking-widest mb-12 flex items-center gap-3"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            Servicios
            <span className="flex-1 h-px bg-[#1a1a1a]" />
          </motion.p>

          <motion.div
            className="grid grid-cols-12 gap-px bg-[#1a1a1a] border border-[#1a1a1a] rounded-[4px] overflow-hidden"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            {services.map(({ num, icon: Icon, title, desc, tag, span }) => (
              <motion.div
                key={num}
                variants={fadeUp}
                className={`${span} bg-black p-10 hover:bg-[#050505] transition-colors`}
              >
                <p className="font-mono text-[11px] text-[#333] mb-8">{num}</p>
                <Icon className="w-8 h-8 text-[#444] mb-5" strokeWidth={1.5} />
                <h3 className="text-lg font-bold tracking-tight mb-3">{title}</h3>
                <p className="text-sm text-[#666] leading-relaxed max-w-sm">{desc}</p>
                <span className="inline-block mt-6 font-mono text-[10px] text-[#333] border border-[#1a1a1a] px-2.5 py-1 rounded-[2px]">
                  {tag}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-8 py-24 border-x border-[#1a1a1a]">
          <motion.p
            className="font-mono text-[11px] text-[#444] uppercase tracking-widest mb-12 flex items-center gap-3"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            The Blueprint
            <span className="flex-1 h-px bg-[#1a1a1a]" />
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] border border-[#1a1a1a] rounded-[4px] overflow-hidden"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            {steps.map(({ num, title, desc }) => (
              <motion.div
                key={num}
                variants={fadeUp}
                className="bg-black p-12 hover:bg-[#050505] transition-colors group cursor-default"
              >
                <p className="font-mono text-[48px] font-semibold text-[#1f1f1f] group-hover:text-[#333] transition-colors leading-none tracking-[-0.04em] mb-6">
                  {num}
                </p>
                <h3 className="text-lg font-bold tracking-tight mb-2">{title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="border-t border-[#1a1a1a]">
        <motion.div
          className="max-w-5xl mx-auto px-8 py-24 border-x border-[#1a1a1a] flex flex-col items-center text-center gap-8"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(36px,5vw,64px)] font-black tracking-[-0.04em] leading-none max-w-2xl"
          >
            ¿Tenés un proyecto en mente?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-[#666] max-w-sm leading-relaxed">
            Contanos qué necesitás y te respondemos en menos de 24 horas.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="mailto:team@vector-ia.com.ar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold rounded-[4px] hover:opacity-85 transition-opacity"
          >
            team@vector-ia.com.ar →
          </motion.a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-8 py-8 border-x border-[#1a1a1a] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_URL} alt="Vector" className="w-5 h-5 object-contain brightness-0 invert opacity-40" />
            <span className="text-sm font-semibold text-[#444]">Vector</span>
          </Link>
          <div className="flex items-center gap-6">
            <a href="mailto:team@vector-ia.com.ar" className="text-xs text-[#333] hover:text-[#666] transition-colors">
              team@vector-ia.com.ar
            </a>
            <span className="font-mono text-[11px] text-[#222]">© 2026</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
