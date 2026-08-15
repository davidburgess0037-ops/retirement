export default function GrowthLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* faint ledger grid */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={i}
          x1="0"
          y1={30 + i * 34}
          x2="560"
          y2={30 + i * 34}
          stroke="#D8D2C2"
          strokeWidth="1"
        />
      ))}
      {/* the compounding curve, a bit hand-drawn */}
      <path
        d="M4 200 C 90 196, 140 188, 180 172 C 230 152, 250 150, 300 120 C 350 90, 370 96, 420 60 C 460 32, 490 30, 556 6"
        stroke="#1B4332"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* marker dots at decade intervals */}
      {[
        [4, 200],
        [180, 172],
        [300, 120],
        [420, 60],
        [556, 6],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i === 4 ? 6 : 4} fill="#C9A227" stroke="#1B4332" strokeWidth="1.5" />
      ))}
    </svg>
  );
}
