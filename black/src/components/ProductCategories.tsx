import { ChevronRight } from 'lucide-react';

const categories = [
  'PCR Enzymes for MDx',
  'Molecular Diagnostics Enzymes',
  'DNA-RNA Amplification',
  'RT-PCR & Real-Time PCR',
  'Isothermal Amplification',
  'DNA & RNA Purification',
  'Detection Kits (Human, Animal, Plant)',
];

export default function ProductCategories() {
  return (
    <section className="py-24" style={{ background: '#0a0f1c' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3">
            Product Categories
          </h2>
          <p className="text-xl" style={{ color: '#cbd5e1' }}>
            Complete range of molecular biology solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border transition-all duration-300 cursor-pointer"
              style={{ background: '#0f172a', borderColor: '#1e293b' }}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold leading-snug" style={{ color: '#3bc9ff' }}>
                  {category}
                </span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" style={{ color: '#3bc9ff' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}