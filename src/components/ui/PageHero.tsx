type PageHeroProps = {
  badge?: string
  title: string
  subtitle?: string
  backgroundImage: string
  minHeight?: string
}

export default function PageHero({
  badge,
  title,
  subtitle,
  backgroundImage,
  minHeight = 'min-h-[360px] md:min-h-[440px]',
}: PageHeroProps) {
  return (
    <section
      className={`relative ${minHeight} flex items-center justify-center overflow-hidden`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center object-top"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="relative z-10 w-full px-6 py-20 text-center md:px-10">
        {badge && (
          <span className="mb-5 inline-block rounded-full bg-background-50/15 px-4 py-1.5 text-xs font-medium text-background-50/80 backdrop-blur-sm md:text-sm">
            {badge}
          </span>
        )}
        <h1 className="font-heading text-3xl font-bold leading-tight text-background-50 md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-lg text-sm text-background-50/70 md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
