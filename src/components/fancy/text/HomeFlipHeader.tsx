"use client"

import { LayoutGroup, motion } from "framer-motion"
import { useState, useEffect } from "react"

import TextRotate from "@/components/fancy/text/text-rotate"

export default function HomeFlipHeader() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <div className="w-dvw text-[3rem] sm:text-[2rem] font-bold flex flex-row items-center justify-center font-overused-grotesk bg-white dark:text-muted text-foreground overflow-hidden p-12 sm:p-20 md:p-24">
      <LayoutGroup>
        <motion.p 
          className="flex items-center" 
          style={{ 
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '0px' : '8px',
            alignItems: isMobile ? 'center' : 'baseline',
            fontSize: isMobile ? '2.5rem' : '3rem',
            fontWeight: 'bold',
            color: '#362f2f'
          }}
          layout
        >
          <motion.span
            className="pt-0.5 sm:pt-1 md:pt-2"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            layout
          >
            Kent does{"  "}
          </motion.span>
          <TextRotate
            as="span"
            texts={[
                "dev",
                "CTO-ing",
                "AI things",
                "startups",
                "dad stuff",
                "speaking",
                "coaching",
                "consulting",
                "writing",
                "training",
                "product building",
                "shipping features",
                "debugging life",
                "mentoring",
                "automation",
                "frontend sorcery",
                "backend-ing",
                "docs (sometimes)",
                "web stuff™",
                "abiguity",
                "cool 💩",
                "shenanigans",
                "parenting",
                "soft serve R&D",
                "startup therapy",
                "side quests",
                "existential talks",
                "sleep (rarely)"
              ]}
            mainClassName="text-white px-8 sm:px-2 md:px-3 bg-[#f5cb2e] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-center"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "tween", damping: 30, stiffness: 300 }}
            rotationInterval={2400}
          />
        </motion.p>
      </LayoutGroup>
    </div>
  )
}
