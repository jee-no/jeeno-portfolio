"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Download,
  FolderGit2,
  FlaskConical,
  BookOpen,
  ChevronDown,
  Terminal,
  Shield,
  Code2,
} from "lucide-react";
import { siteConfig, stats } from "@/data/content";

// Typing animation hook
function useTyping(words: string[], speed = 70, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

const statIcons: Record<string, React.ReactNode> = {
  FolderGit2: <FolderGit2 size={20} />,
  FlaskConical: <FlaskConical size={20} />,
  BookOpen: <BookOpen size={20} />,
};

const typingWords = [
  "Ethical Hacker",
  "CTF Player",
  "Security Researcher",
  "CSE Student",
];

// Floating blobs
function FloatingBlob({ className }: { className: string }) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{ filter: "blur(60px)" }}
    />
  );
}

export default function HeroSection() {
  const typed = useTyping(typingWords);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Floating background blobs */}
      <FloatingBlob className="w-72 h-72 bg-blue-100 top-20 -left-16 animate-float opacity-60" />
      <FloatingBlob className="w-56 h-56 bg-indigo-100 bottom-32 -right-10 animate-float2 opacity-50" />
      <FloatingBlob className="w-44 h-44 bg-sky-100 top-1/3 right-1/4 animate-float opacity-40" />

      {/* Decorative floating icons */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 right-16 hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100"
      >
        <Shield size={22} className="text-blue-500" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 left-16 hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-md border border-slate-100"
      >
        <Terminal size={18} className="text-indigo-500" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-8 hidden xl:flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-md border border-slate-100"
      >
        <Code2 size={16} className="text-blue-400" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span
            className="text-xs font-semibold text-blue-700 tracking-widest"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Available for Internships
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-3 leading-tight tracking-tight"
        >
          Jeeno{" "}
          <span className="text-blue-500">SK</span>
        </motion.h1>

        {/* Typing subtitle */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="h-10 flex items-center justify-center mb-4"
          >
            <span
              className="text-xl md:text-2xl font-semibold text-slate-500"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="text-blue-400">$</span> {typed}
              <span className="cursor-blink text-blue-400">▊</span>
            </span>
          </motion.div>
        )}

        {/* College */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm text-slate-500 mb-6 font-medium"
        >
          {siteConfig.year} · {siteConfig.college}
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed mb-10"
        >
          {siteConfig.name} is a Cyber Security enthusiast passionate about{" "}
          <span className="text-blue-600 font-semibold">ethical hacking</span>,{" "}
          <span className="text-blue-600 font-semibold">security research</span>, and
          hands-on problem solving.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold text-sm hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download Resume
          </a>
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-800 font-semibold text-sm border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            View Projects
          </button>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-800 font-semibold text-sm border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="text-blue-500 mb-2 flex justify-center">
                {statIcons[stat.icon]}
              </div>
              <div
                className="text-2xl font-black text-slate-900 mb-1"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {stat.value}
              </div>
              <div className="text-[10px] text-slate-500 font-semibold leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-slate-400 cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() =>
              document.getElementById("learning")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-xs font-medium tracking-widest uppercase">scroll</span>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
