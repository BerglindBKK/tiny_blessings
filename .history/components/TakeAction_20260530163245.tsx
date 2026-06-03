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
            Your support helps children access education, food, and care. Every
            contribution directly supports ongoing programs in Makati.
          </p>
        </div>

        {/* ACTION CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* One-time */}
          <div className="bg-coral text-white rounded-2xl p-6 text-center font-bold">
            One-time Donation
            <p className="text-sm font-normal mt-2 text-white/90">
              Give any amount, anytime
            </p>
          </div>

          {/* Monthly */}
          <div className="bg-white/10 border border-white/20 text-white rounded-2xl p-6 text-center font-bold">
            Monthly Support
            <p className="text-sm font-normal mt-2 text-white/70">
              Sustain long-term impact
            </p>
          </div>

          {/* Sponsor */}
          <div className="bg-white/10 border border-white/20 text-white rounded-2xl p-6 text-center font-bold">
            Sponsor a Child
            <p className="text-sm font-normal mt-2 text-white/70">
              Support one child directly
            </p>
          </div>

          {/* Volunteer */}
          <div className="bg-white/5 border border-white/10 text-white rounded-2xl p-6 text-center font-bold">
            Volunteer / Collaborate
            <p className="text-sm font-normal mt-2 text-white/70 leading-relaxed">
              Offer your time, skills, or professional expertise to support
              programs, learning activities, or operations.
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
