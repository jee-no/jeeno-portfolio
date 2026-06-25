"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Terminal } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
import { projects, siteConfig } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const statusColors: Record<string, string> = {
  "In Development": "bg-blue-50 text-blue-600",
  Planning: "bg-amber-50 text-amber-600",
  Completed: "bg-green-50 text-green-600",
};

// Decorative SVG placeholder for project image
function ProjectImagePlaceholder({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    "Memory Investigation Tool": <Terminal size={32} className="text-blue-300" />,
    "AI Security Dashboard": <Code2 size={32} className="text-indigo-300" />,
    "Malware Analysis Sandbox": <Terminal size={32} className="text-red-300" />,
    "Threat Detection System": <Code2 size={32} className="text-green-300" />,
  };

  return (
    <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center border border-slate-100 relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-2">
        {icons[name] ?? <Code2 size={32} className="text-blue-300" />}
        <span className="text-xs text-slate-400 font-medium">Project Preview</span>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Reveal delay={0.08 * index}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all duration-300 flex flex-col h-full group"
      >
        <ProjectImagePlaceholder name={project.name} />

        <div className="flex-1 pt-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
              {project.name}
            </h3>
            <span
              className={`badge text-[9px] shrink-0 mt-0.5 ${
                statusColors[project.status] ?? "bg-slate-100 text-slate-600"
              }`}
            >
              {project.status}
            </span>
          </div>

          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-600"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-blue-500 hover:text-blue-700 transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <SectionHeading
            eyebrow="// projects"
            title="What I've Built"
            subtitle="A collection of security tools and research projects — from forensics to threat intelligence."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <Reveal delay={0.2}>
          <div className="bg-slate-50 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-100">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                See all repositories on GitHub
              </h3>
              <p className="text-sm text-slate-500">
                Open source tools, experiments, and CTF writeups.
              </p>
            </div>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <GithubIcon size={16} />
              @Jeeno-SK
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
