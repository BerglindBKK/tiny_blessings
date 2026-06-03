export default function Footer() {
  return (
    <footer className="bg-[#031d38] text-white/70">
      <div className="border-t border-white/10" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* BRAND */}
          <div>
            <h3 className="text-white font-semibold text-lg">Tiny Blessings</h3>

            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Supporting children in Makati through education, nutrition, and
              consistent care.
            </p>
          </div>

          {/* NAV */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">
              Navigation
            </h4>

            <ul className="space-y-2 text-sm text-white/60">
              <li>About</li>
              <li>Impact</li>
              <li>Stories</li>
              <li>Donate</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact</h4>

            <p className="text-sm text-white/60 leading-relaxed">
              Makati City, Philippines
              <br />
              [email@tinyblessings.org]
            </p>
          </div>
        </div>

        {/* SEPARATOR */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Tiny Blessings Foundation
          </p>
        </div>
      </div>
    </footer>
  );
}
