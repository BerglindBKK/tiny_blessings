export default function TakeAction() {
  return (
    <section id="donate" className="bg-navy py-24 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        {/* HEADER */}
        <p className="text-[11px] tracking-widest uppercase text-white/60 mb-3">
          Get involved
        </p>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Take <span className="text-coral">Action</span> Today
          </h2>

          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Your support helps provide education, meals, healthcare, and safe
            learning environments for children in Makati. Every form of support
            contributes directly to ongoing community programs.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* ONE-TIME DONATION */}
          <div className="group bg-white/10 border border-white/20 text-white rounded-2xl p-6 text-center transition">
            <div className="font-bold">
              One-time{" "}
              <span className="group-hover:underline decoration-coral decoration-2 underline-offset-4">
                Donation
              </span>
            </div>

            <p className="text-sm font-normal mt-2 text-white/70 leading-relaxed">
              Supports meals, learning materials, and daily program operations.
            </p>
          </div>

          {/* MONTHLY SUPPORT */}
          <div className="group bg-white/10 border border-white/20 text-white rounded-2xl p-6 text-center transition">
            <div className="font-bold">
              Monthly{" "}
              <span className="group-hover:underline decoration-coral decoration-2 underline-offset-4">
                Support
              </span>
            </div>

            <p className="text-sm font-normal mt-2 text-white/70 leading-relaxed">
              Provides consistent funding for education, care, and stability.
            </p>
          </div>

          {/* SPONSOR */}
          <div className="group bg-white/10 border border-white/20 text-white rounded-2xl p-6 text-center transition">
            <div className="font-bold">
              <span className="group-hover:underline decoration-coral decoration-2 underline-offset-4">
                Sponsor
              </span>{" "}
              a Child
            </div>

            <p className="text-sm font-normal mt-2 text-white/70 leading-relaxed">
              Directly supports a child’s education, nutrition, and daily needs.
            </p>
          </div>

          {/* VOLUNTEER */}
          <div className="group bg-white/10 border border-white/20 text-white rounded-2xl p-6 text-center transition">
            <div className="font-bold">
              <span className="group-hover:underline decoration-coral decoration-2 underline-offset-4">
                Volunteer
              </span>{" "}
              / Collaborate
            </div>

            <p className="text-sm font-normal mt-2 text-white/70 leading-relaxed">
              Share your time, skills, or expertise to support programs and
              activities.
            </p>

            <p className="mt-4 text-sm text-white/80 font-medium">
              Contact: [your email here]
            </p>
          </div>
        </div>

        {/* PAYMENT METHODS */}
        <div
          id="payment"
          className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10"
        >
          <h3 className="text-white text-xl font-semibold text-center">
            Other Ways to Donate
          </h3>

          <p className="text-white/60 text-center mt-2 text-sm">
            We accept multiple payment methods for your convenience.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80 text-sm">
            <div>
              <p className="font-semibold text-white">Bank Transfer</p>
              <p>Account Name: [YOUR NAME / FOUNDATION NAME]</p>
              <p>Account Number: [XXXX XXXX XXXX]</p>
              <p>Bank: [BANK NAME]</p>
            </div>

            <div>
              <p className="font-semibold text-white">GCash</p>
              <p>Name: [NAME]</p>
              <p>Number: [09XX XXX XXXX]</p>
            </div>

            <div>
              <p className="font-semibold text-white">PayPal</p>
              <p>[paypal@email.com]</p>
            </div>

            <div>
              <p className="font-semibold text-white">Venmo / Zelle</p>
              <p>Venmo: [@username]</p>
              <p>Zelle: [email or phone]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
