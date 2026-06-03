import Image from "next/image";

export default function InstagramPreview() {
  return (
    <section className="bg-soft py-14">
      <div className="px-5 max-w-6xl mx-auto">
        <h2 className="text-[28px] leading-[34px] font-serif text-navy">
          Follow Our Journey
        </h2>

        <p className="mt-3 text-[14px] leading-6 text-body">
          See daily updates from our programs, the children we support, and the
          impact your help creates in real time.
        </p>

        {/* PREVIEW GRID */}
        <div className="mt-8 grid grid-cols-3 gap-2">
          <div className="aspect-square bg-white rounded-xl overflow-hidden" />
          <div className="aspect-square bg-white rounded-xl overflow-hidden" />
          <div className="aspect-square bg-white rounded-xl overflow-hidden" />
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="https://instagram.com/YOUR_HANDLE"
            target="_blank"
            className="inline-flex items-center justify-center bg-navy text-white text-[14px] font-semibold px-6 py-3 rounded-full"
          >
            View Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
