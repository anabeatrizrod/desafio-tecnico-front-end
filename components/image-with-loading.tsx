// components/image-with-loading.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'

interface ImageWithLoadingProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
}

export function ImageWithLoading({
  src,
  alt,
  fill = true,
  className = '',
  priority = false,
  sizes
}: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className={`bg-muted flex items-center justify-center ${fill ? 'absolute inset-0' : 'w-full h-48'}`}>
        <div className="text-muted-foreground text-center">
          <div className="w-8 h-8 mx-auto mb-2 opacity-50">📷</div>
          <p className="text-xs">Imagem indisponível</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {isLoading && (
        <Skeleton className={`absolute inset-0 ${className}`} />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        priority={priority}
        sizes={sizes}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false)
          setHasError(true)
        }}
      />
    </>
  )
}