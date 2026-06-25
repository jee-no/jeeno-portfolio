import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeeno SK — Cyber Security Portfolio",
  description:
    "Jeeno SK is a Cyber Security enthusiast and 2nd-year CSE student at KPR Institute of Technology. Security researcher, ethical hacker, CTF learner.",
  keywords: [
    "Jeeno SK",
    "Cyber Security",
    "Security Researcher",
    "CTF",
    "Ethical Hacking",
    "KPR Institute of Technology",
    "Portfolio",
  ],
  authors: [{ name: "Jeeno SK" }],
  openGraph: {
    title: "Jeeno SK — Cyber Security Portfolio",
    description: "Cyber Security enthusiast | Security Researcher | CTF Learner",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
