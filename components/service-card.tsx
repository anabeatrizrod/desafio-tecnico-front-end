// components/service-card.tsx
'use client'

import { Service } from '@/lib/constants/services'
import { getIconComponent } from '@/lib/utils/icons'
import { ImageWithLoading } from './image-with-loading'

interface ServiceCardProps {
  service: Service
  priority?: boolean
}

export function ServiceCard({ service, priority = false }: ServiceCardProps) {
  const IconComponent = getIconComponent(service.icon)
  const isPrimary = service.category === 'sports'

  return (
    <article
      className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/20"
      role="article"
      aria-labelledby={`service-${service.id}`}
    >
      {/* Image Section */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <ImageWithLoading
          src={service.image}
          alt={service.title}
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

        {/* Icon Badge */}
        <div className={`absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 ${
          isPrimary
            ? 'bg-primary text-primary-foreground'
            : 'bg-secondary text-secondary-foreground'
        } rounded-full flex items-center justify-center shadow-lg`}>
          <IconComponent weight="fill" className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        {/* Category Badge */}
        {service.category === 'additional' && (
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground px-2 py-1 rounded-full text-xs font-medium">
            Adicional
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3
          id={`service-${service.id}`}
          className="font-[family-name:var(--font-display)] text-xl text-foreground mb-2"
        >
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </article>
  )
}