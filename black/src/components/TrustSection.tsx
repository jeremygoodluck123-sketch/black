const trustMarkers = [
  {
    title: 'Manufactured under strict quality control',
    description: 'Every batch is tested and certified to meet the highest industry standards.',
  },
  {
    title: 'Designed for molecular diagnostics',
    description: 'Optimized formulations specifically for diagnostic applications.',
  },
  {
    title: 'Used by biotech companies globally',
    description: 'Trusted by leading organizations across all major markets.',
  },
  {
    title: 'Consistent, reliable supply chain',
    description: 'Dependable availability and lot-to-lot consistency for production.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-24" style={{ background: '#0a0f1c' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3">
            Built for Reliability
          </h2>
          <p className="text-xl" style={{ color: '#cbd5e1' }}>
            The foundation of successful molecular diagnostics starts with quality raw materials
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {trustMarkers.map((marker, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border transition-all duration-300"
              style={{ background: '#0f172a', borderColor: '#1e293b' }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#3bc9ff' }}>
                {marker.title}
              </h3>
              <p style={{ color: '#cbd5e1' }}>
                {marker.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-8 rounded-2xl border" style={{ background: '#0f172a', borderColor: '#1e293b' }}>
            <div className="text-5xl font-bold mb-2" style={{ color: '#3bc9ff' }}>
              ISO 9001:2015
            </div>
            <div style={{ color: '#cbd5e1' }}>
              Certified Quality Management System
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}