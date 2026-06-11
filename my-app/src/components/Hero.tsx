import { personal } from '@/lib/data';

export default function Hero() {
  return (
    <h1 className="text-3xl font-normal text-[#1a1a1a] mb-6">{personal.greeting}</h1>
  );
}
