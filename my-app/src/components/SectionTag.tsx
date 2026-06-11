interface SectionTagProps {
  label: string;
}

export default function SectionTag({ label }: SectionTagProps) {
  return (
    <span className="inline-block px-2 py-0.5 text-sm border border-gray-300 rounded-sm bg-gray-100 text-[#333]">
      {label}
    </span>
  );
}
