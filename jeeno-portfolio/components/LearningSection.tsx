"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, BookOpen, Target } from "lucide-react";
import { learningTopics, currentFocus, platforms } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function statusBadge(status: string) {
  const map: Record<string, string> = {
    "In Progress": "badge-progress",
    Learning: "badge-learning",
    Exploring: "badge-exploring",
  };
  return `badge ${map[status] ?? "badge-learning"}`;
}

function ProgressBar({ percent, delay }: { percent: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
        initial={{ width: 0 }}
        animate={{ width: inView ? `${percent}%` : 0 }}
        transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export default function LearningSection() {
  return (
    <section id="learning" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <SectionHeading
            eyebrow="// learning journey"
            title="Skill Progression"
            subtitle="Active roadmap across core cybersecurity domains — tracking progress one lab at a time."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Progress Bars */}
          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <BookOpen size={16} className="text-blue-500" />
                  Learning Roadmap
                </h3>
                <div className="space-y-5">
                  {learningTopics.map((topic, i) => (
                    <Reveal key={topic.name} delay={0.05 * i}>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-slate-800">
                            {topic.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className={statusBadge(topic.status)}>{topic.status}</span>
                            <span
                              className="text-xs font-bold text-blue-600"
                              style={{ fontFamily: "'JetBrains Mono', monospace" }}
                            >
                              {topic.percent}%
                            </span>
                          </div>
                        </div>
                        <ProgressBar percent={topic.percent} delay={0.05 * i} />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Focus + Platforms */}
          <div className="flex flex-col gap-6">
            {/* Current Focus */}
            <Reveal delay={0.15}>
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Target size={15} className="text-blue-500" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Current Focus</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{currentFocus}</p>
              </div>
            </Reveal>

            {/* Platform Stats */}
            {platforms.map((platform, i) => (
              <Reveal key={platform.name} delay={0.2 + i * 0.1}>
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="px-3 py-1 rounded-lg text-xs font-bold tracking-widest"
                      style={{
                        background: platform.bgColor,
                        color: platform.color,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {platform.name}
                    </div>
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-500 transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <div className="space-y-3">
                    {platform.stats.map((s) => (
                      <div key={s.label} className="flex justify-between items-center">
                        <span className="text-xs text-slate-500">{s.label}</span>
                        <span
                          className="text-xs font-bold text-slate-800"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {s.value === "—" ? (
                            <span className="text-slate-300">updating...</span>
                          ) : (
                            s.value
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    {platform.linkLabel}
                    <ExternalLink size={11} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
