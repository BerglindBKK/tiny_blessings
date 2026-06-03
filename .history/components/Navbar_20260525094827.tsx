export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-border">
      <div className="flex items-center justify-between px-5 py-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="font-serif text-xl text-navy font-semibold">
          Foundation
        </div>

        {/* Menu (simple mobile version for now) */}
        <nav className="hidden sm:flex gap-6 text-[14px] font-medium text-navy">
          <a href="#">Our Work</a>
          <a href="#">Impact</a>
          <a href="#">Stories</a>
        </nav>

        {/* CTA */}
        <button className="bg-coral text-white text-[14px] font-semibold px-4 py-2 rounded-full">
          Support
        </button>
      </div>
    </header>
  );
}
