// lib/utils/icons.ts
import {
  TennisBall,
  Sun,
  Volleyball,
  Racquet,
  Person,
  Barbell,
  Hand,
  Heart,
  Target,
  Trophy,
  Users,
  Clock,
  Star
} from '@phosphor-icons/react'

const iconMap = {
  TennisBall,
  Sun,
  Volleyball,
  Racquet,
  Person,
  Barbell,
  Hand,
  Heart,
  Target,
  Trophy,
  Users,
  Clock,
  Star
} as const

export type IconName = keyof typeof iconMap

export function getIconComponent(iconName: string) {
  return iconMap[iconName as IconName] || TennisBall
}