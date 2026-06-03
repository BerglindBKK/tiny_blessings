export default function TakeAction() {
  return (
    <section className="bg-navy py-14">
      {/* TITLE */}
      <div className="px-5 max-w-6xl mx-auto">
        <h2 className="text-[30px] leading-[36px] font-serif font-semibold text-coral">
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
            Donation details
          </h3>

          <p className="mt-2 text-[13px] leading-5 text-white/80">
            Bank transfer and mobile payment options available. Full details are
            shared on request or via our Instagram highlights.
          </p>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="px-5 mt-10 max-w-6xl mx-auto text-center">
        <button className="bg-coral text-white text-[15px] font-semibold px-7 py-3 rounded-full">
          Support a Child
        </button>

        <p className="mt-4 text-[12px] text-white/70">
          Every action creates lasting change.
        </p>
      </div>
    </section>
  );
}
