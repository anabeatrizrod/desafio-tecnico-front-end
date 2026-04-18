"use client"

import { useState } from "react"
import { Phone, Envelope, MapPin, WhatsappLogo, InstagramLogo, FacebookLogo, PaperPlaneTilt } from "@phosphor-icons/react"
import { Spinner } from "@/components/ui/spinner"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simula envio do formulario
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contato" className="py-16 md:py-20 lg:py-32 bg-card">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="col-span-12">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Entre em Contato
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              VAMOS <span className="text-primary">CONVERSAR?</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Tire suas dúvidas, agende uma aula experimental ou venha conhecer nossa estrutura
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-foreground mb-6 md:mb-8">
                INFORMAÇÕES DE CONTATO
              </h3>

              <div className="space-y-5 md:space-y-6 mb-8 md:mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone weight="fill" className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Telefone</p>
                    <p className="text-muted-foreground text-sm md:text-base">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Envelope weight="fill" className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">E-mail</p>
                    <p className="text-muted-foreground text-sm md:text-base">contato@acesports.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin weight="fill" className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Endereço</p>
                    <p className="text-muted-foreground text-sm md:text-base">Av. dos Esportes, 1234 - Jardim Atlético<br />São Paulo - SP, 01234-567</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-foreground font-medium mb-4">Siga-nos nas redes</p>
                <div className="flex gap-3 md:gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 bg-secondary/20 hover:bg-secondary rounded-full flex items-center justify-center transition-colors group"
                    aria-label="WhatsApp"
                  >
                    <WhatsappLogo weight="fill" className="w-5 h-5 md:w-6 md:h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 bg-secondary/20 hover:bg-secondary rounded-full flex items-center justify-center transition-colors group"
                    aria-label="Instagram"
                  >
                    <InstagramLogo weight="fill" className="w-5 h-5 md:w-6 md:h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 bg-secondary/20 hover:bg-secondary rounded-full flex items-center justify-center transition-colors group"
                    aria-label="Facebook"
                  >
                    <FacebookLogo weight="fill" className="w-5 h-5 md:w-6 md:h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border">
              {isSubmitted ? (
                <div className="text-center py-8 md:py-12">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <PaperPlaneTilt weight="fill" className="w-8 h-8 md:w-10 md:h-10 text-secondary" />
                  </div>
                  <h4 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-foreground mb-2">
                    MENSAGEM ENVIADA!
                  </h4>
                  <p className="text-muted-foreground mb-6 text-sm md:text-base">
                    Em breve entraremos em contato com você.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-medium hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-foreground font-medium mb-2 text-sm md:text-base">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm md:text-base"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-foreground font-medium mb-2 text-sm md:text-base">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm md:text-base"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-foreground font-medium mb-2 text-sm md:text-base">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-foreground font-medium mb-2 text-sm md:text-base">
                      Interesse
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm md:text-base"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="tenis">Tênis Tradicional</option>
                      <option value="beach">Beach Tennis</option>
                      <option value="ambos">Ambos</option>
                      <option value="aluguel">Aluguel de Quadra</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-foreground font-medium mb-2 text-sm md:text-base">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm md:text-base"
                      placeholder="Conte-nos mais sobre seu interesse..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-primary/90 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner className="w-5 h-5" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <PaperPlaneTilt weight="fill" className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
