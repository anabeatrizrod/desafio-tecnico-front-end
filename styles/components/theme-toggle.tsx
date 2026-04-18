'use client'

import * as React from 'react'
import { Moon, Sun } from '@phosphor-icons/react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const activeTheme = theme === 'system' ? resolvedTheme : theme

  if (!mounted) {
    return (
      <Button type="button" variant="ghost" className="opacity-0 pointer-events-none">
        <Sun weight="fill" />
      </Button>
    )
  }

  const isDark = activeTheme === 'dark'

  return (
    <Button
      type="button"
      variant="ghost"
      className="text-foreground"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
    >
      {isDark ? <Sun weight="fill" /> : <Moon weight="fill" />}
      <span className="hidden sm:inline">
        {isDark ? 'Claro' : 'Escuro'}
      </span>
    </Button>
  )
}
