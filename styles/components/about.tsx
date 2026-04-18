'use client'

import Image from "next/image"
import { Heart, Target, Trophy, Users, Clock, Star } from "@phosphor-icons/react"

export function About() {
  const features = [
    {
      icon: Heart,
      title: "Paixão pelo Esporte",
      description: "Somos apaixonados por tênis e beach tennis, transmitindo essa energia para todos os nossos alunos."
    },
    {
      icon: Target,
      title: "Metodologia Exclusiva",
      description: "Desenvolvemos uma metodologia própria baseada em técnicas profissionais e acompanhamento individual."
    },
    {
      icon: Trophy,
      title: "Instrutores Certificados",
      description: "Nossa equipe é formada por profissionais certificados e com experiência internacional."
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Criamos uma comunidade unida de amantes do esporte, com eventos e torneios regulares."
    },
    {
      icon: Clock,
      title: "Horários Flexíveis",
      description: "Oferecemos aulas nos horários mais convenientes para você, incluindo finais de semana."
    },
    {
      icon: Star,
      title: "Excelência Reconhecida",
      description: "Somos referência na região, com alunos que conquistaram títulos estaduais e nacionais."
    }
  ]

  return (
    <section id="sobre" className="py-16 md:py-20 lg:py-32 bg-card" suppressHydrationWarning>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" suppressHydrationWarning>
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Trophy weight="fill" className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium text-sm">Sobre o AceSports</span>
            </div>

            {/* Title */}
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              MAIS QUE UMA <span className="text-primary">ACADEMIA</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Fundado em 2009, o AceSports oferece uma estrutura completa para a prática esportiva.
              Somos especializados em tênis, beach tennis, futevôlei e pickleball, com quadras profissionais e aulas para todos os níveis.
              Além dos esportes de raquete, oferecemos aulas de pilates, academia completa e massagens sob consulta.
              Somos mais que uma academia - somos uma família dedicada a transformar vidas através do esporte.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8" suppressHydrationWarning>
              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground mb-3">
                  Nossa Missão
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Oferecer uma estrutura completa de esportes e bem-estar, democratizando o acesso ao tênis, beach tennis, futevôlei, pickleball,
                  pilates, musculação e massagens. Promovemos saúde, bem-estar e integração social através do esporte.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground mb-3">
                  Nossa Visão
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ser a principal referência em formação esportiva da região,
                  reconhecida pela qualidade de ensino e pelos resultados dos nossos alunos.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Conheça Nossa História
            </a>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1632755898125-36cd72575dde?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Pessoa jogando tênis profissionalmente"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-lg p-4 border border-border shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users weight="fill" className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-xl text-foreground">500+</p>
                  <p className="text-muted-foreground text-xs">Alunos Formados</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-background rounded-lg p-4 border border-border shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Trophy weight="fill" className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-xl text-foreground">50+</p>
                  <p className="text-muted-foreground text-xs">Títulos Conquistados</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 md:mt-20 lg:mt-32">
          <div className="text-center mb-12">
            <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
              Por que escolher o <span className="text-primary">AceSports</span>?
            </h3>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Descubra o que nos torna únicos e referência na formação de atletas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" suppressHydrationWarning>
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="group bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <IconComponent weight="fill" className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-[family-name:var(--font-display)] text-lg text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}