"use client";
import { useEffect } from "react";

// Scroll-reveal: elements marked data-reveal fade/slide in once they reach the viewport.
// The hidden state only applies once this has run (html.reveal-on), so the page is complete without JS.
// Anything already scrolled past (anchor jumps, fast flicks) is revealed too, so nothing can stay hidden.
export default function Reveal() {
  useEffect(() => {
    let pending = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    let frame = 0;
    const check = () => {
      frame = 0;
      const line = window.innerHeight * 0.9;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top > line) return true;
        el.classList.add("in");
        return false;
      });
      if (!pending.length) window.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => { frame ||= requestAnimationFrame(check); };
    document.documentElement.classList.add("reveal-on");
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.documentElement.classList.remove("reveal-on");
    };
  }, []);
  return null;
}
