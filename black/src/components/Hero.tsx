import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #020617, #0a1b3f)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 text-center">
        <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          Molecular Biology Raw Materials
        </h1>

        <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: '#cbd5e1' }}>
          Supplying the critical building blocks behind molecular diagnostics. We connect biotech manufacturers with high-quality enzymes, PCR reagents, and molecular biology raw materials used in diagnostics, research, and point-of-care testing.
        </p>

        <button className="group inline-flex items-center space-x-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-lg"
          style={{ background: '#3bc9ff', color: '#020617' }}>
          <span>Request Product Details</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="flex justify-center gap-6 mt-12 flex-wrap">
          <div className="px-8 py-4 rounded-full border" style={{ borderColor: '#1e293b', background: '#020617' }}>
            Quality Assured
          </div>
          <div className="px-8 py-4 rounded-full border" style={{ borderColor: '#1e293b', background: '#020617' }}>
            ISO 9001:2015
          </div>
        </div>
      </div>
    </section>
  );
}