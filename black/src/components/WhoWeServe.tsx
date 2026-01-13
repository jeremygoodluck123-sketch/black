const audiences = [
  {
    title: 'Molecular Diagnostics Companies',
    description: 'Supporting IVD manufacturers with reliable, scalable raw materials for diagnostic test development and production.',
  },
  {
    title: 'Clinical Testing Laboratories',
    description: 'Providing high-quality reagents for accurate molecular testing in clinical diagnostic settings.',
  },
  {
    title: 'Research Institutions',
    description: 'Enabling cutting-edge molecular biology research with premium enzymes and reagents.',
  },
  {
    title: 'Point-of-Care & IVD Manufacturers',
    description: 'Specialized solutions for POC testing platforms and in vitro diagnostic device development.',
  },
];

export default function WhoWeServe() {
  return (
    <section className="py-24" style={{ background: '#0a0f1c' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3">
            Who We Serve
          </h2>
          <p className="text-xl" style={{ color: '#cbd5e1' }}>
            Trusted by leading organizations in molecular diagnostics and life sciences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border transition-all duration-300"
              style={{ background: '#0f172a', borderColor: '#1e293b' }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#3bc9ff' }}>
                {audience.title}
              </h3>
              <p style={{ color: '#cbd5e1' }}>
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}