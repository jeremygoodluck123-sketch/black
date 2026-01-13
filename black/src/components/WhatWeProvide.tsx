const products = [
  'PCR & RT-PCR Enzymes',
  'Real-Time PCR Premixes',
  'Isothermal Amplification Reagents',
  'Lyophilized & LyoReady Premixes',
  'DNA & RNA Purification',
  'Sample Preparation for POC Testing',
  'Molecular Detection Kits',
  'Custom Formulations',
];

export default function WhatWeProvide() {
  return (
    <section className="py-24" style={{ background: '#0a0f1c' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3">
            What We Provide
          </h2>
          <p className="text-xl" style={{ color: '#cbd5e1' }}>
            Comprehensive molecular biology solutions for diagnostic and research applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border transition-all duration-300"
              style={{ background: '#0f172a', borderColor: '#1e293b' }}
            >
              <h3 className="text-base font-semibold leading-snug" style={{ color: '#3bc9ff' }}>
                {product}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}