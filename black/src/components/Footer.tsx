import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16" style={{ background: '#020617' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">BioRaw Materials</h2>
        <p style={{ color: '#cbd5e1' }} className="mb-6">
          Premium molecular biology raw materials for diagnostic and research applications.
        </p>

        <div className="mb-8">
          <div className="flex flex-col items-center gap-2 mb-6" style={{ color: '#cbd5e1' }}>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" style={{ color: '#3bc9ff' }} />
              <span>+1 437 5999 553</span>
            </div>
          </div>

          <button className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-200"
            style={{ background: '#3bc9ff', color: '#020617' }}>
            Request Information
          </button>
        </div>

        <div className="text-sm pt-8 border-t" style={{ color: '#cbd5e1', borderColor: '#1e293b' }}>
          <p>&copy; 2026 BioRaw Materials</p>
        </div>
      </div>
    </footer>
  );
}