// components/section-header.tsx
interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  highlight?: string
  centered?: boolean
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  highlight,
  centered = true
}: SectionHeaderProps) {
  const containerClasses = centered
    ? "text-center mb-12 md:mb-16"
    : "mb-12 md:mb-16"

  const titleWithHighlight = highlight
    ? title.replace(highlight, `<span class="text-primary">${highlight}</span>`)
    : title

  return (
    <header className={containerClasses}>
      {badge && (
        <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          {badge}
        </span>
      )}

      <h2
        className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
        dangerouslySetInnerHTML={{ __html: titleWithHighlight }}
      />

      {subtitle && (
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </header>
  )
}