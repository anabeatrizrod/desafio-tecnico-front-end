"use client"

import Image from "next/image"
import { ArrowRight, Trophy, Users, Calendar } from "@phosphor-icons/react"

export function Hero() {
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

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&q=80"
          alt="Quadra de tênis"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="col-span-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Trophy weight="fill" className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium text-sm">#1 Academia da Região</span>
          </div>

          {/* Title */}
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6">
            DOMINE A <span className="text-primary">QUADRA</span>
            <br />
            COM ESTILO
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
            Aulas de tênis e beach tennis para todos os níveis. Instrutores certificados, 
            quadras profissionais e uma comunidade apaixonada pelo esporte.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-12">
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato')}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all hover:gap-3 cursor-pointer"
            >
              Começar Agora
              <ArrowRight weight="bold" className="w-5 h-5" />
            </a>
            <a
              href="#precos"
              onClick={(e) => handleNavClick(e, '#precos')}
              className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              Ver Planos
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-xl lg:max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Users weight="fill" className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl text-foreground">500+</p>
                <p className="text-muted-foreground text-sm">Alunos Ativos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Trophy weight="fill" className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl text-foreground">15+</p>
                <p className="text-muted-foreground text-sm">Anos de Experiência</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar weight="fill" className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl text-foreground">8</p>
                <p className="text-muted-foreground text-sm">Quadras Profissionais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
