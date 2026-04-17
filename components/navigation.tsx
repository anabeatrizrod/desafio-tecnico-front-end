// components/navigation.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { TennisBall, List, X } from '@phosphor-icons/react'
import { ThemeToggle } from './theme-toggle'

const navigationItems = [
  { href: '#inicio', label: 'Inicio', ariaLabel: 'Ir para seção inicial' },
  { href: '#sobre', label: 'Sobre', ariaLabel: 'Ir para seção sobre nós' },
  { href: '#servicos', label: 'Serviços', ariaLabel: 'Ir para seção de serviços' },
  { href: '#precos', label: 'Preços', ariaLabel: 'Ir para seção de preços' },
  { href: '#contato', label: 'Contato', ariaLabel: 'Ir para seção de contato' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg p-1"
            aria-label="AceSports - Página inicial"
          >
            <TennisBall weight="fill" className="w-8 h-8 text-primary" />
            <span className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
              AceSports
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6" role="menubar">
              {navigationItems.map((item) => (
                <li key={item.href} role="none">
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-foreground/80 hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary/20"
                    role="menuitem"
                    aria-label={item.ariaLabel}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isOpen ? (
                <X weight="bold" className="w-6 h-6" />
              ) : (
                <List weight="bold" className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <ul className="py-4 space-y-2" role="menu">
              {navigationItems.map((item) => (
                <li key={item.href} role="none">
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    role="menuitem"
                    aria-label={item.ariaLabel}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}