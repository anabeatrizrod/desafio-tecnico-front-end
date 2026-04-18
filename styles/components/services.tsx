// components/services.tsx
import { ServiceCard } from './service-card'
import { Section } from './section'
import { SectionHeader } from './section-header'
import { useServices } from '@/hooks/use-services'

export function Services() {
  const { services } = useServices()

  return (
    <Section id="servicos" className="bg-card">
      <SectionHeader
        badge="Nossos Serviços"
        title="TUDO QUE VOCÊ PRECISA"
        subtitle="Oferecemos uma estrutura completa para você evoluir no esporte que ama"
        highlight="PRECISA"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            priority={index < 3}
          />
        ))}
      </div>
    </Section>
  )
}
