import { personal } from '@/lib/data';

const INK = '#1c1410';

function ScatterFrame() {
  return (
    <>
      <path d="M22 20 V126 H104" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
      {[
        [34, 110], [40, 100], [48, 106], [54, 92], [60, 96], [64, 82],
        [70, 86], [76, 70], [82, 74], [86, 58], [92, 62], [98, 46],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.4" fill={INK} />
      ))}
      <path d="M28 118 L102 38" stroke={INK} strokeWidth="2.5" strokeDasharray="7 5" strokeLinecap="round" />
    </>
  );
}

function HistogramFrame() {
  return (
    <>
      {[
        [22, 30], [36, 54], [50, 86], [64, 96], [78, 60], [92, 32],
      ].map(([x, h]) => (
        <rect key={x} x={x} y={126 - h} width="12" height={h} fill={INK} />
      ))}
      <path
        d="M18 120 C40 114 46 30 60 30 C74 30 84 110 108 118"
        stroke="#f2eee5"
        strokeWidth="6"
        fill="none"
      />
      <path
        d="M18 120 C40 114 46 30 60 30 C74 30 84 110 108 118"
        stroke={INK}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </>
  );
}

function NetworkFrame() {
  const input: [number, number][] = [[26, 40], [26, 75], [26, 110]];
  const hidden: [number, number][] = [[62, 28], [62, 58], [62, 88], [62, 118]];
  const output: [number, number][] = [[98, 56], [98, 94]];
  return (
    <>
      {input.map(([x1, y1]) =>
        hidden.map(([x2, y2]) => (
          <line key={`i${y1}-${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={INK} strokeWidth="1.4" opacity="0.65" />
        ))
      )}
      {hidden.map(([x1, y1]) =>
        output.map(([x2, y2]) => (
          <line key={`h${y1}-${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={INK} strokeWidth="1.4" opacity="0.65" />
        ))
      )}
      {input.map(([cx, cy]) => (
        <circle key={`in${cy}`} cx={cx} cy={cy} r="6" fill={INK} />
      ))}
      {hidden.map(([cx, cy]) => (
        <circle key={`hd${cy}`} cx={cx} cy={cy} r="6" fill="#f2eee5" stroke={INK} strokeWidth="3" />
      ))}
      {output.map(([cx, cy]) => (
        <circle key={`ou${cy}`} cx={cx} cy={cy} r="6" fill={INK} />
      ))}
    </>
  );
}

function HeatmapFrame() {
  const cells = [
    [0.95, 0.3, 0.15, 0.5],
    [0.25, 0.85, 0.4, 0.18],
    [0.12, 0.45, 0.9, 0.3],
    [0.5, 0.2, 0.35, 0.8],
  ];
  return (
    <>
      {cells.map((row, r) =>
        row.map((opacity, c) => (
          <rect
            key={`${r}-${c}`}
            x={26 + c * 21}
            y={32 + r * 21}
            width="18"
            height="18"
            fill={INK}
            opacity={opacity}
          />
        ))
      )}
      {[0, 1, 2, 3].map((i) => (
        <line key={`tx${i}`} x1={35 + i * 21} y1={120} x2={35 + i * 21} y2={126} stroke={INK} strokeWidth="2" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <line key={`ty${i}`} x1={16} y1={41 + i * 21} x2={22} y2={41 + i * 21} stroke={INK} strokeWidth="2" />
      ))}
    </>
  );
}

const frames = [ScatterFrame, HistogramFrame, NetworkFrame, HeatmapFrame];

function Sprockets() {
  return (
    <div className="flex justify-between px-1 py-2.5">
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} className="h-2.5 w-3 rounded-[2.5px] bg-[#f1ecdf] sm:h-3 sm:w-3.5" />
      ))}
    </div>
  );
}

function HandArrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 64 44"
      className={`h-8 w-12 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 ${flip ? '-scale-x-100' : ''}`}
      aria-hidden
    >
      <path d="M62 36 C36 44 10 32 7 9" stroke="currentColor" strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <path d="M1 17 L7 5 L16 12" stroke="currentColor" strokeWidth="3.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16">
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />

      {/* film strip */}
      <div
        className="anim-drop w-full max-w-3xl -rotate-[1.2deg] bg-[#a13524] px-2.5 shadow-[0_22px_50px_rgba(70,30,18,0.28)] sm:px-3"
        style={{
          clipPath:
            'polygon(0.6% 4%, 0% 18%, 1% 36%, 0.2% 58%, 0.8% 80%, 0% 96%, 3% 100%, 97% 99.4%, 100% 96%, 99.2% 78%, 100% 55%, 99% 34%, 100% 14%, 98.8% 0.6%, 4% 0.4%)',
        }}
      >
        <Sprockets />

        <div className="relative h-4">
          <span className="font-type absolute left-[12%] text-[10px] leading-4 text-[#f1ecdf]/70">5</span>
          <span className="font-type absolute left-[62%] text-[10px] leading-4 text-[#f1ecdf]/70">6</span>
        </div>

        <div className="grid grid-cols-4 gap-2 px-0.5 sm:gap-2.5">
          {frames.map((FrameArt, i) => (
            <div
              key={i}
              className="aspect-[4/5] overflow-hidden rounded-[2px] bg-[#f2eee5] transition duration-300 hover:[filter:invert(0.92)]"
            >
              <svg
                viewBox="0 0 120 150"
                className="anim-develop h-full w-full"
                style={{ animationDelay: `${0.45 + i * 0.18}s` }}
                aria-hidden
              >
                <FrameArt />
              </svg>
            </div>
          ))}
        </div>

        <div className="relative h-4">
          <span className="font-type absolute left-[30%] text-[10px] leading-4 text-[#f1ecdf]/70">▹ 5A</span>
          <span className="font-type absolute left-[80%] text-[10px] leading-4 text-[#f1ecdf]/70">▹ 6A</span>
        </div>

        <Sprockets />
      </div>

      {/* taped name banner */}
      <div
        className="anim-stick mt-12 -rotate-[0.8deg] bg-[#a13524] px-10 py-2.5 sm:px-16 sm:py-3"
        style={{
          clipPath:
            'polygon(0% 14%, 3% 0%, 50% 6%, 97% 2%, 100% 12%, 98.4% 38%, 100% 62%, 99% 100%, 55% 93%, 3% 100%, 0.4% 76%, 1.6% 44%)',
          backgroundImage:
            'radial-gradient(circle at 8% 30%, rgba(241,236,223,0.22) 0 6px, transparent 7px), radial-gradient(circle at 94% 70%, rgba(241,236,223,0.18) 0 5px, transparent 6px), radial-gradient(circle at 70% 15%, rgba(241,236,223,0.12) 0 4px, transparent 5px)',
        }}
      >
        <h1 className="font-hand text-5xl font-semibold tracking-wide text-[#f4efe3] sm:text-6xl md:text-7xl">
          {personal.name}
        </h1>
      </div>

      {/* resume, pinned to the top-right corner */}
      <a
        href={personal.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="anim-rise font-type absolute right-5 top-6 inline-flex items-center gap-1.5 rounded-full border-2 border-[#a13524] px-5 py-1.5 text-[10px] tracking-[0.25em] text-[#a13524] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#a13524] hover:text-[#f1ecdf] hover:shadow-[0_8px_18px_rgba(90,30,15,0.3)] sm:right-10 sm:top-8 sm:text-xs"
      >
        resume <span aria-hidden>↗</span>
      </a>

      <p className="anim-rise font-type mt-7 text-[10px] tracking-[0.35em] text-[#6b5546] sm:text-xs">
        — {personal.role} —
      </p>

      {/* hand-drawn arrows + CTA */}
      <a
        href="#more"
        className="anim-rise group mt-5 flex items-center gap-4 text-[#a13524] sm:gap-6"
        style={{ animationDelay: '1.8s' }}
      >
        <HandArrow />
        <span className="font-type text-[10px] tracking-[0.3em] underline-offset-4 group-hover:underline sm:text-xs">
          click here to find out more
        </span>
        <HandArrow flip />
      </a>
    </section>
  );
}
