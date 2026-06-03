export default function Footer() {
  return (
    <footer className="bg-[#042a52] text-white/70">
      {/* TOP BORDER SEPARATION */}
      <div className="border-t border-white/10" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white font-semibold text-lg">Tiny Blessings</h3>
            <p className="mt-3 text-sm leading-relaxed">
              Supporting children in Makati through education, nutrition, and
              care.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Impact</li>
              <li>Stories</li>
              <li>Donate</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Contact</h4>
            <p className="text-sm">
              Makati City, Philippines
              <br />
              hello@tinyblessings.org
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/50">
          © {new Date().getFullYear()} Tiny Blessings Foundation
        </div>
      </div>
    </footer>
  );
}
