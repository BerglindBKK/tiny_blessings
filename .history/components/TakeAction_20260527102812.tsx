export default function TakeAction() {
  return (
    <section id="donate" className="bg-navy py-16">
      <div className="px-5 max-w-6xl mx-auto">
        {/* HEADER */}
        <p className="text-[11px] tracking-widest uppercase text-white/60 mb-3">
          Get involved
        </p>

        <h2 className="text-white text-[30px] md:text-[38px] leading-[36px] md:leading-[44px] font-serif">
          Take <span className="text-coral font-semibold">Action</span>
        </h2>

        <p className="mt-4 text-[14px] leading-6 text-white/80 max-w-2xl">
          Your support directly helps provide education, meals, healthcare, and
          safe spaces for children in vulnerable communities in Makati City.
        </p>

        {/* PRIMARY CTA */}
        <div className="mt-8">
          <button className="bg-coral text-white text-[15px] font-bold px-8 py-4 rounded-full hover:bg-[#d65d41] transition-all active:scale-95">
            Sponsor a Child
          </button>

          <p className="mt-3 text-[12px] text-white/60">
            Most impactful way to support long-term care and education
          </p>
        </div>

        {/* SECONDARY ACTIONS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-5">
            <h3 className="text-[16px] font-semibold text-navy">
              One-time donation
            </h3>
            <p className="mt-2 text-[13px] text-body leading-5">
              Support urgent needs like food, school supplies, and healthcare.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5">
            <h3 className="text-[16px] font-semibold text-navy">
              Volunteer with us
            </h3>
            <p className="mt-2 text-[13px] text-body leading-5">
              Share your time, skills, or professional support with our
              programs.
            </p>
          </div>
        </div>

        {/* PAYMENT DETAILS (collapsed importance) */}
        <div className="mt-10 border border-white/20 rounded-xl p-5 text-white/80">
          <p className="text-[13px] font-semibold text-white">
            Other ways to donate
          </p>

          <p className="mt-2 text-[12px] text-white/70">
            GCash and bank transfer details available upon request or via
            contact.
          </p>
        </div>

        {/* INSTAGRAM */}
        <div className="mt-8 text-center">
          <a
            href="https://instagram.com/YOUR_HANDLE"
            target="_blank"
            className="text-white text-[13px] underline underline-offset-4"
          >
            Follow our updates on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
