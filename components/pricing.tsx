"use client"

import { Check, X, Star, Lightning } from "@phosphor-icons/react"

// Todas as features do plano Elite (mais completo)
const allFeatures = [
  { name: "Aulas por semana", iniciante: "2 aulas", avancado: "4 aulas", elite: "Ilimitadas" },
  { name: "Acesso às quadras", iniciante: "Horários limitados", avancado: "Ilimitado", elite: "24h por dia" },
  { name: "Material incluso", iniciante: "Básico", avancado: "Premium", elite: "Profissional" },
  { name: "Vestiário e estacionamento", iniciante: true, avancado: true, elite: true },
  { name: "Eventos sociais", iniciante: true, avancado: true, elite: true },
  { name: "Preparação física", iniciante: false, avancado: true, elite: true },
  { name: "Participação em torneios", iniciante: false, avancado: true, elite: true },
  { name: "Análise de vídeo", iniciante: false, avancado: true, elite: true },
  { name: "Personal trainer dedicado", iniciante: false, avancado: false, elite: true },
  { name: "Suporte nutricional", iniciante: false, avancado: false, elite: true },
  { name: "Fisioterapia preventiva", iniciante: false, avancado: false, elite: true },
  { name: "Inscrição em campeonatos", iniciante: false, avancado: false, elite: true },
  { name: "Descontos em parceiros", iniciante: false, avancado: false, elite: true },
]

const plans = [
  {
    key: "iniciante",
    name: "Iniciante",
    description: "Perfeito para quem está começando",
    price: "149",
    period: "/mês",
    cta: "Começar Agora",
    popular: false,
  },
  {
    key: "avancado",
    name: "Avançado",
    description: "Para quem quer evoluir de verdade",
    price: "279",
    period: "/mês",
    cta: "Escolher Plano",
    popular: true,
  },
  {
    key: "elite",
    name: "Elite",
    description: "Treinamento de alta performance",
    price: "499",
    period: "/mês",
    cta: "Falar com Consultor",
    popular: false,
  }
]

export function Pricing() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const getFeatureValue = (feature: typeof allFeatures[0], planKey: string) => {
    const value = feature[planKey as keyof typeof feature]
    return value
  }

  return (
    <section id="precos" className="py-16 md:py-20 lg:py-32 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="col-span-12">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Lightning weight="fill" className="w-4 h-4" />
              Planos e Preços
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              ESCOLHA SEU <span className="text-secondary">PLANO</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Temos opções para todos os perfis e objetivos. Comece sua jornada hoje!
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {plans.map((plan) => (
              <div
                key={plan.key}
                className={`relative rounded-2xl border-2 bg-card p-6 md:p-8 transition-all duration-300 flex flex-col ${
                  plan.popular 
                    ? 'border-primary' 
                    : 'border-border hover:border-muted-foreground/30'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                      <Star weight="fill" className="w-4 h-4" />
                      Mais Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-baseline gap-1">
                    <span className="text-muted-foreground text-lg">R$</span>
                    <span className="font-[family-name:var(--font-display)] text-5xl md:text-6xl text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {allFeatures.map((feature, featureIndex) => {
                    const value = getFeatureValue(feature, plan.key)
                    const isIncluded = value !== false
                    const displayValue = typeof value === 'string' ? value : null

                    return (
                      <li key={featureIndex} className="flex items-start gap-3">
                        {isIncluded ? (
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.popular ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                          }`}>
                            <Check weight="bold" className="w-3 h-3" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-muted">
                            <X weight="bold" className="w-3 h-3 text-muted-foreground" />
                          </div>
                        )}
                        <span className={`text-sm ${isIncluded ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                          {feature.name}
                          {displayValue && isIncluded && (
                            <span className="text-muted-foreground ml-1">({displayValue})</span>
                          )}
                        </span>
                      </li>
                    )
                  })}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contato"
                  onClick={(e) => handleNavClick(e, '#contato')}
                  className={`block w-full text-center py-3 md:py-4 rounded-full font-semibold transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <p className="text-center text-muted-foreground text-sm md:text-base mt-10 md:mt-12">
            Todos os planos incluem aula experimental gratuita. <span className="text-primary font-medium">Cancele quando quiser.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
