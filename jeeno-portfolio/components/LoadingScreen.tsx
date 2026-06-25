"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg"
        >
          <Shield size={26} className="text-white" />
        </motion.div>
        <div
          className="text-sm font-bold text-slate-900"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          jeeno<span className="text-blue-500">.sk</span>
        </div>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 rounded-full bg-blue-400"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
