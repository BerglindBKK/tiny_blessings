export default function TakeAction() {
  return (
    <section className="bg-soft py-14">
      {/* TITLE */}
      <div className="px-5 max-w-6xl mx-auto">
        <h2 className="text-[28px] leading-[34px] font-serif text-navy">
          Take Action
        </h2>

        <p className="mt-3 text-[14px] leading-6 text-body">
          There are many ways to support children and families in our programs.
          Every action creates meaningful impact.
        </p>
      </div>

      {/* OPTIONS */}
      <div className="px-5 mt-8 space-y-4 max-w-6xl mx-auto">
        {/* ONE-TIME DONATION */}
        <div className="bg-white border border-border rounded-xl p-5">
          <h3 className="text-[16px] font-semibold text-navy">
            One-time donation
          </h3>
          <p className="mt-2 text-[13px] text-body leading-5">
            Supports immediate needs such as food, school materials, hygiene
            kits, and emergency care for children in our programs.
          </p>
        </div>

        {/* MONTHLY SUPPORT */}
        <div className="bg-white border border-border rounded-xl p-5">
          <h3 className="text-[16px] font-semibold text-navy">
            Support a child monthly
          </h3>
          <p className="mt-2 text-[13px] text-body leading-5">
            Provides stable funding for education, meals, healthcare, and safe
            learning environments for one child.
          </p>
        </div>

        {/* SHARE SKILLS */}
        <div className="bg-white border border-border rounded-xl p-5">
          <h3 className="text-[16px] font-semibold text-navy">
            Share your skills or time
          </h3>
          <p className="mt-2 text-[13px] text-body leading-5">
            Contribute expertise, mentorship, or volunteer time in education,
            healthcare, creative work, or community support.
          </p>
        </div>
      </div>

      {/* FINAL CTA STRIP */}
      <div className="px-5 mt-10 max-w-6xl mx-auto">
        <div className="bg-white border border-border rounded-xl p-6 text-center">
          <h3 className="text-[18px] font-semibold text-navy">
            Be part of lasting change
          </h3>

          <p className="mt-2 text-[13px] text-body">
            Your support helps create safe, educated, and empowered futures.
          </p>

          <button className="mt-5 bg-coral text-white text-[14px] font-semibold px-5 py-3 rounded-full">
            Support a Child
          </button>
        </div>
      </div>
    </section>
  );
}
