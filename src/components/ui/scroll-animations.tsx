"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate'
  delay?: number
  duration?: number
  trigger?: 'top' | 'center' | 'bottom'
}

export function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fadeIn',
  delay = 0,
  duration = 1,
  trigger = 'center'
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const animations = {
      fadeIn: { opacity: 0, y: 50 },
      slideUp: { opacity: 0, y: 100 },
      slideLeft: { opacity: 0, x: -100 },
      slideRight: { opacity: 0, x: 100 },
      scale: { opacity: 0, scale: 0.8 },
      rotate: { opacity: 0, rotation: 180 }
    }

    const initialProps = animations[animation]
    const finalProps = { opacity: 1, y: 0, x: 0, scale: 1, rotation: 0 }

    gsap.fromTo(element, 
      initialProps,
      {
        ...finalProps,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: `${trigger} 80%`,
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animation, delay, duration, trigger])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export function ParallaxSection({ children, speed = 0.5 }: { children: React.ReactNode, speed?: number }) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.to(section, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [speed])

  return (
    <div ref={sectionRef} className="relative">
      {children}
    </div>
  )
}

export function StaggeredAnimation({ 
  children, 
  stagger = 0.1,
  className = ''
}: { 
  children: React.ReactNode[], 
  stagger?: number,
  className?: string 
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.children

    gsap.fromTo(elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [stagger])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
} 