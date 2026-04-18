"use client"

import Link from "next/link"
import { TennisBall, WhatsappLogo, InstagramLogo, FacebookLogo, YoutubeLogo, Heart } from "@phosphor-icons/react"

export function Footer() {
  const currentYear = new Date().getFullYear()

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
    <footer className="bg-background border-t border-border">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="col-span-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <TennisBall weight="fill" className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-[family-name:var(--font-display)] text-2xl text-foreground tracking-wide">
                  ACESPORTS
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                A melhor academia de tênis e beach tennis da região. Transformando vidas através do esporte desde 2010.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-muted hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                  aria-label="WhatsApp"
                >
                  <WhatsappLogo weight="fill" className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-muted hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                  aria-label="Instagram"
                >
                  <InstagramLogo weight="fill" className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-muted hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                  aria-label="Facebook"
                >
                  <FacebookLogo weight="fill" className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-muted hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                  aria-label="YouTube"
                >
                  <YoutubeLogo weight="fill" className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-[family-name:var(--font-display)] text-lg md:text-xl text-foreground mb-4 md:mb-6">
                LINKS RÁPIDOS
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a 
                    href="#inicio" 
                    onClick={(e) => handleNavClick(e, '#inicio')}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base cursor-pointer"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a 
                    href="#servicos"
                    onClick={(e) => handleNavClick(e, '#servicos')}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base cursor-pointer"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a 
                    href="#precos"
                    onClick={(e) => handleNavClick(e, '#precos')}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base cursor-pointer"
                  >
                    Planos e Preços
                  </a>
                </li>
                <li>
                  <a 
                    href="#contato"
                    onClick={(e) => handleNavClick(e, '#contato')}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base cursor-pointer"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-[family-name:var(--font-display)] text-lg md:text-xl text-foreground mb-4 md:mb-6">
                NOSSOS SERVIÇOS
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a 
                    href="#servicos"
                    onClick={(e) => handleNavClick(e, '#servicos')}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base cursor-pointer"
                  >
                    Tênis Tradicional
                  </a>
                </li>
                <li>
                  <a 
                    href="#servicos"
                    onClick={(e) => handleNavClick(e, '#servicos')}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base cursor-pointer"
                  >
                    Beach Tennis
                  </a>
                </li>
                <li>
                  <a 
                    href="#servicos"
                    onClick={(e) => handleNavClick(e, '#servicos')}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base cursor-pointer"
                  >
                    Aulas em Grupo
                  </a>
                </li>
                <li>
                  <a 
                    href="#servicos"
                    onClick={(e) => handleNavClick(e, '#servicos')}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base cursor-pointer"
                  >
                    Aluguel de Quadras
                  </a>
                </li>
                <li>
                  <a 
                    href="#servicos"
                    onClick={(e) => handleNavClick(e, '#servicos')}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base cursor-pointer"
                  >
                    Competições
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-[family-name:var(--font-display)] text-lg md:text-xl text-foreground mb-4 md:mb-6">
                HORÁRIO DE FUNCIONAMENTO
              </h4>
              <ul className="space-y-2 md:space-y-3 text-muted-foreground text-sm md:text-base">
                <li className="flex justify-between">
                  <span>Segunda - Sexta</span>
                  <span className="text-foreground">6h - 22h</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado</span>
                  <span className="text-foreground">7h - 20h</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo</span>
                  <span className="text-foreground">8h - 18h</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs md:text-sm">
              &copy; {currentYear} AceSports. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-xs md:text-sm flex items-center gap-1">
              Feito com <Heart weight="fill" className="w-4 h-4 text-primary" /> para amantes do esporte
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
