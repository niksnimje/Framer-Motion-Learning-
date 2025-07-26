"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function Cursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
    const [isHovered, setHovered] = useState(false)

  const springX = useSpring(cursorX, { stiffness: 300, damping: 30 })
  const springY = useSpring(cursorY, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
      const handleMouseEnter = () => setHovered(true)
  const handleMouseLeave = () => setHovered(false)

  const targets = document.querySelectorAll(".hover-target")
  targets.forEach((el) => {
    el.addEventListener("mouseenter", handleMouseEnter)
    el.addEventListener("mouseleave", handleMouseLeave)
  })


    window.addEventListener("mousemove", moveCursor)
      return () => {
    targets.forEach((el) => {
      el.removeEventListener("mouseenter", handleMouseEnter)
      el.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mousemove", moveCursor)
    })
  }

  }, [])

  return (
    <>
    
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{ translateX: springX, translateY: springY,  width: isHovered ? 60 : 24,
    height: isHovered ? 60 : 24,
    backgroundColor: "white" }}
    />
    
    <button className="hover-target px-6 py-2">Hover me</button>


    </>
  )
}
