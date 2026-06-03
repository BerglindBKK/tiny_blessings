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
          Your support helps provide education, meals, healthcare, and safe
          spaces for children in vulnerable communities in Makati City.
        </p>

        {/* ACTION CARDS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5">
            <h3 className="text-[16px] font-semibold text-navy">
              Sponsor a child monthly
            </h3>
            <p className="mt-2 text-[13px] text-body leading-5">
              Long-term support for education, nutrition, and healthcare.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5">
            <h3 className="text-[16px] font-semibold text-navy">
              One-time donation
            </h3>
            <p className="mt-2 text-[13px] text-body leading-5">
              Helps with urgent needs like food, school supplies, and medical
              support.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5">
            <h3 className="text-[16px] font-semibold text-navy">
              Volunteer with us
            </h3>
            <p className="mt-2 text-[13px] text-body leading-5">
              Share time or skills in education, healthcare, or community work.
            </p>
          </div>
        </div>

        {/* DONATION METHODS */}
        <div className="mt-10 border border-white/20 rounded-xl p-5 text-white/80">
          <p className="text-[13px] font-semibold text-white">Ways to donate</p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[13px]">
            {/* GCash */}
            <div>
              <p className="text-white font-medium">GCash</p>
              <p>Juan Dela Cruz</p>
              <p>0956 857 4685</p>
            </div>

            {/* PayPal */}
            <div>
              <p className="text-white font-medium">PayPal</p>
              <p>tinyblessingsfoundation@gmail.com</p>
            </div>

            {/* Bank PH */}
            <div>
              <p className="text-white font-medium">Bank Transfer (PH)</p>
              <p>RCBC</p>
              <p>Account No: 7591 **** 689</p>
            </div>

            {/* Bank International */}
            <div>
              <p className="text-white font-medium">
                Bank Transfer (International)
              </p>
              <p>US Bank / Partner Foundation Account</p>
              <p>Account No: 1575 **** 8901</p>
            </div>

            {/* Zelle */}
            <div>
              <p className="text-white font-medium">Zelle</p>
              <p>ktvjavier@gmail.com</p>
            </div>

            {/* Venmo */}
            <div>
              <p className="text-white font-medium">Venmo</p>
              <p>@tinyblessings</p>
            </div>
          </div>
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
      <div className="hidden lg:block mt-24 border-t border-border/60" />
    </section>
  );
}
