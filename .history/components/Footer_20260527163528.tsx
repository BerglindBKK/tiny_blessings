export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="px-5 max-w-6xl mx-auto lg:px-8">
        {/* TOP */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* BRAND */}
          <div className="max-w-sm">
            <h3 className="text-[18px] font-serif font-semibold">
              Tiny Blessings Foundation
            </h3>
            <p className="mt-3 text-[13px] text-white/70 leading-6">
              Supporting children in vulnerable communities in Makati City
              through education, nutrition, and community care.
            </p>
          </div>

          {/* LINKS */}
          <div className="text-[13px] space-y-2">
            <p className="font-semibold text-white">Navigate</p>
            <a
              href="#foundation"
              className="block text-white/70 hover:text-white"
            >
              Foundation
            </a>
            <a href="#impact" className="block text-white/70 hover:text-white">
              Impact
            </a>
            <a href="#stories" className="block text-white/70 hover:text-white">
              Stories
            </a>
            <a href="#donate" className="block text-white/70 hover:text-white">
              Take Action
            </a>
            <a href="#contact" className="block text-white/70 hover:text-white">
              Contact
            </a>
          </div>

          {/* CONTACT */}
          <div className="text-[13px] space-y-2">
            <p className="font-semibold text-white">Contact</p>
            <p className="text-white/70">Instagram: @_tinyblessings</p>
            <p className="text-white/70">tinyblessingsfoundation@gmail.com</p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-6 border-t border-white/10 text-[12px] text-white/50 flex flex-col md:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} Tiny Blessings Foundation</p>
          <p>Made with care for community impact</p>
        </div>
      </div>
    </footer>
  );
}
