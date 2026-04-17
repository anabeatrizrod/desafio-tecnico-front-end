// lib/constants/services.ts
export interface Service {
  id: string
  icon: string
  title: string
  description: string
  image: string
  category: 'sports' | 'wellness' | 'additional'
  featured: boolean
}

export const SERVICES: Service[] = [
  {
    id: 'tennis',
    icon: 'TennisBall',
    title: 'Aula de Tênis',
    description: 'Aulas individuais e em grupo para todos os níveis. Técnicas profissionais, treinos personalizados e acompanhamento constante.',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&q=80',
    category: 'sports',
    featured: true
  },
  {
    id: 'beach-tennis',
    icon: 'Sun',
    title: 'Beach Tennis',
    description: 'O esporte que mais cresce no Brasil! Aprenda na areia com instrutores especializados, muita diversão e energia.',
    image: 'https://images.unsplash.com/photo-1519046947096-f43d6481532b?w=600&q=80',
    category: 'sports',
    featured: true
  },
  {
    id: 'futevolei',
    icon: 'Volleyball',
    title: 'Futevôlei',
    description: 'Esporte dinâmico que combina futebol e vôlei. Treinos intensos para melhorar coordenação, agilidade e trabalho em equipe.',
    image: 'https://images.unsplash.com/photo-1684266370915-382b2329278c?w=600&q=80',
    category: 'sports',
    featured: false
  },
  {
    id: 'pickleball',
    icon: 'Racquet',
    title: 'Pickleball',
    description: 'Esporte acessível e divertido para todas as idades. Aprenda as regras, técnicas e estratégias deste esporte em crescimento.',
    image: 'https://images.unsplash.com/photo-1693142518820-78d7a05f1546?w=600&q=80',
    category: 'sports',
    featured: false
  },
  {
    id: 'pilates',
    icon: 'Person',
    title: 'Pilates',
    description: 'Método completo para fortalecimento do core, flexibilidade e equilíbrio. Aulas personalizadas para todos os níveis.',
    image: 'https://images.unsplash.com/photo-1591258370814-01609b341790?w=600&q=80',
    category: 'wellness',
    featured: true
  },
  {
    id: 'gym',
    icon: 'Barbell',
    title: 'Academia Completa',
    description: 'Equipamentos modernos, treinos funcionais e musculação. Acompanhe seu progresso com profissionais qualificados.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    category: 'wellness',
    featured: true
  },
  {
    id: 'massage',
    icon: 'Hand',
    title: 'Massagem',
    description: 'Relaxamento e recuperação muscular. Técnicas especializadas para atletas e pessoas ativas. Serviço pago separadamente, sob consulta e disponibilidade.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
    category: 'additional',
    featured: false
  }
]