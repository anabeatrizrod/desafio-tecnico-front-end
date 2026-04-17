// hooks/use-services.ts
import { useMemo } from 'react'
import { SERVICES, Service } from '@/lib/constants/services'

export interface UseServicesOptions {
  category?: Service['category']
  featured?: boolean
  limit?: number
}

export function useServices(options: UseServicesOptions = {}) {
  const { category, featured, limit } = options

  const filteredServices = useMemo(() => {
    let result = SERVICES

    if (category) {
      result = result.filter(service => service.category === category)
    }

    if (featured !== undefined) {
      result = result.filter(service => service.featured === featured)
    }

    if (limit) {
      result = result.slice(0, limit)
    }

    return result
  }, [category, featured, limit])

  return {
    services: filteredServices,
    totalCount: SERVICES.length,
    featuredCount: SERVICES.filter(s => s.featured).length,
    categories: [...new Set(SERVICES.map(s => s.category))]
  }
}