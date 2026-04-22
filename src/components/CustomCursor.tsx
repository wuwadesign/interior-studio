'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const enter = (e: Event) => {
      if ((e.target as HTMLElement).closest('a, button')) setHovered(true)
    }
    const leave = () => setHovered(false)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', enter)
    document.addEventListener('mouseout', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', enter)
      document.removeEventListener('mouseout', leave)
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${hovered ? 'hover' : ''}`}
      style={{ left: pos.x, top: pos.y }}
    />
  )
}
