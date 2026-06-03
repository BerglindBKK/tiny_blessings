import React from "react";

export default function TakeAction() {
  return (
    <section id="donate" className="bg-navy py-14">
      {/* TITLE */}
      <div className="px-5 max-w-6xl mx-auto">
        <h2 className="text-white text-[30px] leading-[36px] font-serif">
          Take <span className="text-coral font-semibold">Action</span>
        </h2>

        <p className="mt-3 text-[14px] leading-6 text-white/85 md:max-w-2xl">
          There are many ways to support children and families in our programs.
          Every contribution directly supports education, safety, and wellbeing.
        </p>
        <p className="mt-4 text-[14px] leading-6 text-white/80 md:max-w-2xl">
          Tiny blessings make a big impact. Every contribution directly supports
          education, healthcare, nutrition, and safe spaces for children in
          need.
        </p>
      </div>

      {/* ACTION CARDS — 1 col mobile, 3 col desktop */}
      <div className="px-5 mt-8 max-w-6xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
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
            Ways to support
          </h3>

          <p className="mt-2 text-[13px] leading-5 text-white/80">
            You can support our programs through the following trusted payment
            methods:
          </p>

          {/* PAYMENT METHODS — 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="mt-4 grid grid-cols-1 gap-4 text-[13px] text-white/80 md:grid-cols-2 lg:grid-cols-3">
            {/* GCash */}
            <div className="space-y-1">
              <span className="text-white font-medium block">GCash</span>
              <p>Account Name: Juan Dela Cruz</p>
              <p>Mobile Number: 0956 857 4685</p>
              <div className="mt-2">
                <p className="text-white/70 text-[12px]">Scan QR code:</p>
                <div className="mt-2 p-2 bg-white rounded-lg inline-block text-navy text-[12px]">
                  gcashqr.png
                </div>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="space-y-1">
              <span className="text-white font-medium block">
                Bank Transfer
              </span>
              <p>
                Bank: Rcbc ph corp foundation
                <br />
                Account Name: XXXX
                <br />
                Account No: 7591020689
              </p>
              <p className="mt-2">
                Bank: USbank corp foundation
                <br />
                Account Name: XXXX
                <br />
                Account No: 157525568901
              </p>
            </div>

            {/* PayPal + Zelle + Venmo grouped */}
            <div className="space-y-4 md:col-span-2 lg:col-span-1">
              <div>
                <span className="text-white font-medium block">PayPal</span>
                <p>tinyblessingsfoundation@gmail.com</p>
              </div>
              <div>
                <span className="text-white font-medium block">Zelle</span>
                <p>ktvjavier@gmail.com</p>
              </div>
              <div>
                <span className="text-white font-medium block">Venmo</span>
                <p>@tinyblessings</p>
              </div>
            </div>
          </div>
        </div>
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
