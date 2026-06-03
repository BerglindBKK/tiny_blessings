<div className="relative w-full aspect-square sm:aspect-square md:aspect-[21/12]">
  {src === "/images/students_ism.png" ? (
    <>
      <Image
        src="/images/students_ism.png"
        alt={alt}
        fill
        className="object-cover lg:hidden"
      />

      <Image
        src="/images/students_ism_desktop.png"
        alt={alt}
        fill
        className="hidden object-cover lg:block"
      />
    </>
  ) : (
    <Image src={src} alt={alt} fill className="object-cover" />
  )}
</div>;
