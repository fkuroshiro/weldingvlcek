// Brand mark: a "V" that is also a V-groove weld joint, with a spark at the root. Same drawing as app/icon.svg, minus the tile.
export default function Logo({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="6 4 52 60" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-spark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe9a8" /><stop offset=".5" stopColor="#e2b95c" /><stop offset="1" stopColor="#c9803f" />
        </linearGradient>
      </defs>
      <path d="M12 11l20 34L52 11" fill="none" stroke="currentColor" strokeWidth="9.5" />
      <path className="spark" d="M32 26q2.2 16.8 17 19q-14.8 2.2-17 17q-2.200-14.800-17-17q14.800-2.200 17-19z" fill="url(#logo-spark)" stroke="var(--color-ink)" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}
