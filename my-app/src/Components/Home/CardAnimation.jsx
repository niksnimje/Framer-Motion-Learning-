"use client"

import { useEffect, useRef } from "react"
import { motion, scale } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CardAnimation() {
  const containerRef = useRef(null)
  const pizzaRef = useRef(null)
  const roundGRef = useRef(null)
  const topCardRef = useRef(null)
  const rightCardRef = useRef(null)
  const bottomCardRef = useRef(null)
  const leftCardRef = useRef(null)
  const topLineRef = useRef(null)
  const rightLineRef = useRef(null)
  const bottomLineRef = useRef(null)
  const leftLineRef = useRef(null)
  const topConRef = useRef(null)
  const rightConRef = useRef(null)
  const bottomConRef = useRef(null)
  const leftConRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1000",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      })

      gsap.set([
        roundGRef.current,
        topCardRef.current,
        rightCardRef.current,
        bottomCardRef.current,
        leftCardRef.current,
        topConRef.current,
        rightConRef.current,
        bottomConRef.current,
        leftConRef.current,
      ], {
        opacity: 0,
        scale: 0.8,
        y: 20,
      })

      gsap.set(pizzaRef.current, { opacity: 0 })
      gsap.set(roundGRef.current, { opacity: 0 })
      gsap.set([
        topLineRef.current,
        rightLineRef.current,
        bottomLineRef.current,
        leftLineRef.current,
      ], {
        scaleX: 0,
        transformOrigin: "left center",
      })

      tl.to(pizzaRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      })

      tl.to(roundGRef.current, {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "back.out(1.7)",
      }, "-=0.5")

      tl.to(topCardRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      }, "+=0.2")
        .to(topLineRef.current, {
          scaleX: 1,
          duration: 0.5,
          ease: "power2.out",
        }, "-=0.3")
        .to(topConRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        }, "-=0.3")

      tl.to(rightLineRef.current, { scaleX: 1, duration: 0.5, ease: "power2.out" }, "+=0.3")
        .to(rightCardRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        }, "-=0.3")

      tl.to(bottomLineRef.current, { scaleX: 1, duration: 0.5, ease: "power2.out" }, "+=0.3")
        .to(bottomCardRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        }, "-=0.3")

      tl.to(leftLineRef.current, { scaleX: 1, duration: 0.5, ease: "power2.out" }, "+=0.3")
        .to(leftCardRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        }, "-=0.3")
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-gray-50 py-20">
      <div
        ref={containerRef}
        className="relative w-full max-w-8xl mx-auto px-4 min-h-[120vh] flex items-center justify-center"
      >
        <div className="relative">
  <Image 
    ref={pizzaRef} 
    src="/pizzashape.svg" 
    alt="Pizza Shape" 
    width={600} 
    height={600} 
    className="mx-auto" // Ensure pizza is centered
  />
  
  <motion.div
    ref={roundGRef}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px]"
    style={{
      // Calculate exact center position based on pizza dimensions
      marginLeft: `${(0-500) / 2}px`,
      marginTop: `${(0 -500) / 2}px`
    }}
    
    animate={{rotate: 360 }}
    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
  >
    <Image 
      src="/RoundG.svg" 
      alt="Rotating Round G" 
      width={500} 
      height={500} 
      className="absolute inset-0" 
      whileHover={{ scale: 1.5 }}
        transition={{ type: "spring", stiffness: 300 }}// Fill the container
    />
  </motion.div>
</div>

          {/* Top Card - Fill Application */}
        <div className="absolute top-15 left-1/2 transform -translate-x-1/2 -translate-y-4">
          <div
            ref={topLineRef}
            className="absolute top-30  rounded-xl left-1/2 transform -translate-x-1/2 w-18 h-2 bg-[#D0E6FF] mb-2"
          />
            
            <motion.div
             ref={topConRef}
            className=" rounded-2xl p-6 max-w-xs text-center  "
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">Fill Application</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Complete a simple online form with your basic details — it takes just a few minutes.
            </p>
             
          </motion.div>

          <motion.div
            ref={topCardRef}
            className=" rounded-2xl p-6 max-w-xs text-center "
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-25 h-25 bg-[#F1F8FF] rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#1F99FF]">
              <img src="/File.svg" alt="Document Icon" className="w-10 h-10" />
            </div>
          </motion.div>
        </div>


        {/* Right Card - Get Best Match */}
        <div className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2">
          <div
            ref={rightLineRef}
            className="absolute right-full top-1/2 transform -translate-y-1/2 w-18 h-2 bg-[#D0E6FF] mr-2"
          />

             <motion.div
             ref={rightConRef}
            className=" rounded-2xl p-6 max-w-xs text-center  "
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">Get Best Match</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our smart system compares multiple lenders to find the loan that suits you best.
            </p>
             
          </motion.div>


          <motion.div
            ref={rightCardRef}
            className="rounded-2xl p-6 max-w-xs text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-25 h-25 bg-[#F1F8FF] rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#1F99FF]">
              <img src="/Frame(3).svg" alt="Handshake Icon" className="w-10 h-10" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Card - Instant Approval */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
          <div
            ref={bottomLineRef}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-18 h-2 bg-[#D0E6FF] mt-2"
          />

            <motion.div
             ref={bottomConRef}
            className=" rounded-2xl p-6 max-w-xs text-center  "
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
           <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Approval</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Get quick loan approval with minimal paperwork and real-time decision-making.
            </p>
          </motion.div>

          <motion.div
            ref={bottomCardRef}
            className="rounded-2xl p-6 max-w-xs text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-25 h-25 bg-[#F1F8FF] rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#1F99FF]">
              <img src="/Frame(4).svg" alt="Approval Icon" className="w-10 h-10" />
            </div>
          </motion.div>
        </div>

        {/* Left Card - Easy Repayment */}
        <div className="absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2">
          <div
            ref={leftLineRef}
            className="absolute left-full top-1/2 transform -translate-y-1/2 w-18 h-2 bg-[#D0E6FF] ml-2"
          />

              <motion.div
             ref={leftConRef}
            className=" rounded-2xl p-6 max-w-xs text-center  "
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
          <h3 className="text-lg font-bold text-gray-900 mb-2">Easy Repayment</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Repay your loan with flexible EMI options, automated reminders, and zero stress.
            </p>
             
          </motion.div>

          <motion.div
            ref={leftCardRef}
            className="rounded-2xl p-6 max-w-xs text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-25 h-25 bg-[#F1F8FF] rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#1F99FF]">
              <img src="/Frame(1).svg" alt="Payment Icon" className="w-8 h-8" />
            </div>
            
          </motion.div>
        </div>

        {/* Center Pizza Shape Decoration */}
        {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-20 opacity-10">
            <img src="/placeholder.svg?height=80&width=80" alt="Pizza Shape" className="w-full h-full" />
          </div>
        </div> */}

        
      </div>
    </div>
  )
}
