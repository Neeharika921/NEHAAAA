const ITEMS = [
  'machine learning',
  'nlp',
  'feature engineering',
  'data storytelling',
  'model evaluation',
  'streamlit apps',
  'clean data',
];

function Row() {
  return (
    <div className="flex w-max items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="font-hand px-8 text-3xl text-[#f1ecdf]">{item}</span>
          <span aria-hidden className="text-sm text-[#f1ecdf]/60">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="relative z-10 -mx-2 -rotate-[0.6deg] overflow-hidden bg-[#a13524] py-2.5 shadow-[0_10px_24px_rgba(70,30,18,0.25)]">
      <div
        className="marquee-track flex w-max"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        <Row />
        <div aria-hidden className="flex w-max">
          <Row />
        </div>
      </div>
    </div>
  );
}
