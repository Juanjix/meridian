"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { fadeUp, fadeIn, EASE_CINEMA, EASE_APPLE } from "@/lib/animations";

export function GiftExperienceSection() {
  const { t } = useLanguage();
  const g = t.giftExperience;

  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-8%" });

  // Per-card accent config
  const cardConfig = [
    {
      accentColor: "rgba(154,154,154,0.55)",
      borderColor: "rgba(154,154,154,0.14)",
      topLine:
        "linear-gradient(90deg, transparent, rgba(154,154,154,0.18), transparent)",
      glow: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(154,154,154,0.05) 0%, transparent 70%)",
      tagStyle: { color: "rgba(184,184,184,0.60)" },
      isFeatured: false,
    },
    {
      accentColor: "rgba(212,175,95,0.85)",
      borderColor: "rgba(212,175,95,0.30)",
      topLine:
        "linear-gradient(90deg, transparent, rgba(212,175,95,0.55), transparent)",
      glow: "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(212,175,95,0.10) 0%, transparent 70%)",
      tagStyle: { color: "rgba(212,175,95,0.88)" },
      isFeatured: true,
    },
    {
      accentColor: "rgba(240,236,230,0.60)",
      borderColor: "rgba(154,154,154,0.14)",
      topLine:
        "linear-gradient(90deg, transparent, rgba(240,236,230,0.15), transparent)",
      glow: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(240,236,230,0.04) 0%, transparent 70%)",
      tagStyle: { color: "rgba(212,175,95,0.75)" },
      isFeatured: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="gift"
      className="bg-carbon py-28 md:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* ── Header ── */}
        <div className="mb-16 md:mb-24 text-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="ea-label mb-6 flex justify-center">
            {g.label}
          </motion.div>

          <div
            style={{
              overflow: "hidden",
              paddingBottom: "0.1em",
              marginBottom: "-0.1em",
            }}>
            <motion.h2
              initial={{ y: "110%", opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.1, ease: EASE_CINEMA, delay: 0.1 }}
              className="font-light text-warm-white leading-[0.93]"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                letterSpacing: "-0.04em",
                marginBottom: "0.10em",
              }}>
              {g.headline1}{" "}
              <span
                className="italic"
                style={{ color: "rgba(212,175,95,0.82)" }}>
                {g.headline2}
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.0, ease: EASE_CINEMA, delay: 0.28 }}
            className="w-10 h-px mx-auto my-6"
            style={{ background: "rgba(212,175,95,0.35)" }}
          />

          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 0.35 }}
            className="text-sm font-light leading-relaxed max-w-md mx-auto"
            style={{ color: "#B8B8B8" }}>
            {g.sub}
          </motion.p>
        </div>

        {/* ── Gift Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-14">
          {g.cards.map((card, i) => {
            const cfg = cardConfig[i];
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1.0,
                  ease: EASE_CINEMA,
                  delay: 0.28 + i * 0.14,
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.6, ease: EASE_APPLE },
                }}
                className="group relative cursor-default">
                <div
                  className="relative flex flex-col h-full overflow-hidden"
                  style={{
                    background: cfg.isFeatured ? "#111111" : "#0C0C0C",
                    border: `1px solid ${cfg.borderColor}`,
                    minHeight: "360px",
                  }}>
                  {/* Ambient glow */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: cfg.glow }}
                  />

                  {/* Top accent line */}
                  <div
                    className="absolute top-0 inset-x-0 h-px"
                    style={{ background: cfg.topLine }}
                  />

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: cfg.topLine }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col flex-1 p-8 md:p-9">
                    {/* Tag */}
                    <div
                      className="text-[9px] tracking-[0.26em] uppercase font-light mb-10"
                      style={cfg.tagStyle}>
                      {card.tag}
                    </div>

                    {/* Price — large display */}
                    <div
                      className="font-light leading-none mb-4"
                      style={{
                        fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
                        letterSpacing: "-0.05em",
                        color: cfg.isFeatured
                          ? "#F0ECE6"
                          : "rgba(240,236,230,0.82)",
                      }}>
                      {card.price}
                    </div>

                    {/* Title */}
                    <h3
                      className="font-light mb-5 leading-snug"
                      style={{
                        fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
                        letterSpacing: "-0.018em",
                        color: cfg.isFeatured
                          ? "#F0ECE6"
                          : "rgba(240,236,230,0.75)",
                      }}>
                      {card.title}
                    </h3>

                    {/* Thin divider */}
                    <div
                      className="w-full h-px mb-6"
                      style={{
                        background: cfg.isFeatured
                          ? "rgba(212,175,95,0.14)"
                          : "rgba(154,154,154,0.10)",
                      }}
                    />

                    {/* Description */}
                    <p
                      className="text-xs font-light leading-relaxed flex-1"
                      style={{ color: "#888888" }}>
                      {card.desc}
                    </p>

                    {/* CTA */}
                    <button
                      className="w-full mt-8 py-3.5 text-[10px] tracking-[0.22em] uppercase font-light transition-all duration-400 active:opacity-70"
                      style={{
                        border: `1px solid ${cfg.borderColor}`,
                        color: cfg.isFeatured
                          ? "rgba(212,175,95,0.88)"
                          : "rgba(240,236,230,0.55)",
                        background: "transparent",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = cfg.isFeatured
                          ? "rgba(212,175,95,0.60)"
                          : "rgba(154,154,154,0.35)";
                        el.style.color = cfg.isFeatured
                          ? "rgba(212,175,95,1)"
                          : "rgba(240,236,230,0.90)";
                        el.style.background = cfg.isFeatured
                          ? "rgba(212,175,95,0.06)"
                          : "rgba(154,154,154,0.04)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = cfg.borderColor;
                        el.style.color = cfg.isFeatured
                          ? "rgba(212,175,95,0.88)"
                          : "rgba(240,236,230,0.55)";
                        el.style.background = "transparent";
                      }}>
                      {g.cta}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── For whom + note ── */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-5">
          {/* "For whom" chips */}
          <div className="flex flex-wrap justify-center gap-2">
            {g.forWhom.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.16em] uppercase font-light px-4 py-1.5"
                style={{
                  border: "1px solid rgba(154,154,154,0.14)",
                  color: "rgba(184,184,184,0.55)",
                }}>
                {tag}
              </span>
            ))}
          </div>

          <p
            className="text-2xs font-light tracking-[0.12em] text-center"
            style={{ color: "rgba(154,154,154,0.45)" }}>
            {g.ctaSub}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
