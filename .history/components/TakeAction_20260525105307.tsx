export default function TakeAction() {
  return (
    <section className="bg-navy py-14">
      {/* TITLE */}
      <div className="px-5 max-w-6xl mx-auto">
        <h2 className="text-[30px] leading-[36px] font-serif font-semibold text-coral font-semibold drop-shadow-sm">
          Take Action
        </h2>

        <p className="mt-3 text-[14px] leading-6 text-white/85">
          There are many ways to support children and families in our programs.
          Every contribution directly supports education, safety, and wellbeing.
        </p>
      </div>

      {/* ACTION CARDS */}
      <div className="px-5 mt-8 space-y-4 max-w-6xl mx-auto">
        {/* ONE TIME */}
        <div className="bg-white rounded-xl p-5">
          <h3 className="text-[16px] font-semibold text-navy">
            One-time donation
          </h3>
          <p className="mt-2 text-[13px] text-body leading-5">
            Provides food, school materials, hygiene kits, and emergency support
            for children in urgent need.
          </p>
        </div>

        {/* MONTHLY */}
        <div className="bg-white rounded-xl p-5">
          <h3 className="text-[16px] font-semibold text-navy">
            Support a child monthly
          </h3>
          <p className="mt-2 text-[13px] text-body leading-5">
            Covers education, meals, healthcare, and safe learning spaces for
            one child on an ongoing basis.
          </p>
        </div>

        {/* VOLUNTEER */}
        <div className="bg-white rounded-xl p-5">
          <h3 className="text-[16px] font-semibold text-navy">
            Share your skills or time
          </h3>
          <p className="mt-2 text-[13px] text-body leading-5">
            Contribute mentorship, professional skills, or volunteer support in
            education, healthcare, or community programs.
          </p>
        </div>
      </div>

      {/* PAYMENT INFO */}
      <div className="px-5 mt-10 max-w-6xl mx-auto">
        <div className="border border-white/20 rounded-xl p-5 text-white/90">
          <h3 className="text-[14px] font-semibold text-white">
            Ways to donate
          </h3>

          <p className="mt-2 text-[13px] leading-5 text-white/80">
            You can support our programs through any of the following methods:
          </p>

          {/* PAYMENT METHODS */}
          <div className="mt-4 grid grid-cols-2 gap-3 text-[12px] text-white/80">
            <div>• GCash</div>
            <div>• PayPal</div>
            <div>• Venmo</div>
            <div>• Zelle</div>
            <div className="text-white font-medium">
              • Bank transfer (recommended)
            </div>
          </div>

          {/* NOTE */}
          <p className="mt-4 text-[12px] text-white/70">
            Full account details are shared securely upon request or via
            Instagram.
          </p>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="px-5 mt-10 max-w-6xl mx-auto text-center">
        <button className="bg-coral text-white text-[14px] font-semibold px-6 py-3 rounded-full">
          Support a Child
        </button>

        <p className="mt-4 text-[12px] text-white/70">
          Every action creates lasting change.
        </p>
      </div>

      {/* INSTAGRAM LINK */}
      <div className="mt-6 text-center">
        <a
          href="https://instagram.com/YOUR_HANDLE"
          target="_blank"
          className="!text-white text-[13px] underline underline-offset-4"
        >
          Follow our work on Instagram
        </a>
      </div>
    </section>
  );
}
