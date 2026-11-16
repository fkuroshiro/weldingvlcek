"use client";
import { useState } from "react";

// Lets visitors stop the auto-rotating hero photos (WCAG 2.2.2 Pause, Stop, Hide).
export default function HeroPause() {
  const [paused, setPaused] = useState(false);
  return (
    <button
      type="button"
      aria-pressed={paused}
      aria-label={paused ? "Spustit střídání fotografií" : "Pozastavit střídání fotografií"}
      title={paused ? "Spustit střídání fotografií" : "Pozastavit střídání fotografií"}
      onClick={() => {
        const next = !paused;
        setPaused(next);
        document.getElementById("top")?.toggleAttribute("data-paused", next);
      }}
      className="absolute bottom-4 right-4 z-10 grid size-11 place-items-center rounded-full border border-plate/30 bg-ink/60 text-plate backdrop-blur hover:border-straw hover:text-straw sm:bottom-6 sm:right-6"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {paused ? <path d="M7 4.5v15l13-7.500z" /> : <path d="M6 4.500h4.500v15H6zM13.500 4.500H18v15h-4.500z" />}
      </svg>
    </button>
  );
}
