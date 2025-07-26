"use client"
import { delay, motion, scale ,useScroll,useAnimation, useTransform, useInView, LayoutGroup } from "framer-motion"

import Image from "next/image"


import React, { useEffect, useRef, useState } from 'react'

function DemoAnimations() {

  const { scrollYProgress ,scrollY } = useScroll()
  const controls = useAnimation()
   const rotate = useTransform(scrollY, [0, 500], [0, 360])
    const ref = useRef(null)
  const isInView = useInView(ref, { once: false })


  const [big, setBig] = useState(false)

const boxVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
}


  useEffect(() => {
    controls.start({ x: 200, opacity: 1, transition: { duration: 1 } })
  }, [])

  return (
    <>
        <motion.div style={{scaleX:scrollYProgress}} className="w-full bg-red-400 rounded-full h-2 origin-left fixed"></motion.div>
        <motion.div layout className="w-full bg-red-400 rounded-full h-2 "></motion.div>
    <div className="flex justify-between container mx-auto ">
    
       <motion.img animate={{x:1600,rotate:360}} transition={{duration:1,delay:1,ease:"anticipate"}}  src="/pokeballs.png" width={100} height={100} alt="pokeball" className="h-25"/>
       <motion.img src="/pika.png" animate={{y:[0,200,200],x:[0,0,300]}} transition={{duration:1,delay:1.1,ease:"anticipate"}} height={100} width={100} alt="pokeball"/>
    </div>
        <div className="">
            <div>
                <motion.img drag whileDrag={{scale:0.8}} dragConstraints={{left:0, bottom:200 ,top:0 , right:1000}} src="laddu.png" height={200} width={200}  />
            </div>
            <motion.img src="chotabheem.png" whileTap={{scale:1.2}} height={200} width={200} className="mx-auto" alt="hekl" />
        </div>
        <br /><br />
        <motion.div whileHover={{backgroundColor:"skyblue" ,border:"solid black"}} transition={{duration:2}} className=" overflow-hidden border border-red-500 w-75 mx-auto ">
            <motion.img src="rdj.png" height={400} width={400} alt="jsd" className="mx-auto" initial={{y:200}} animate={{y:0}}  transition={{duration:1.2}} />
        </motion.div>

        <br /><br />

        <motion.div
      className="w-40 h-40 bg-blue-500"
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      Box
    </motion.div>

      <br /><br /><br />


      <motion.div
      layout
      onClick={() => setBig(!big)}
      className={`bg-green-400 cursor-pointer ${big ? 'w-64 h-64' : 'w-32 h-32'}`}
    >
      Click to Resize
    </motion.div>

<br /><br /><br />
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={controls}
      className="w-32 h-32 bg-purple-400"
    >
      Controlled Box
    </motion.div>

    <br /><br /><br />
      <motion.div
      style={{ rotate }}
      className="w-32 h-32 bg-yellow-400 fixed top-20 left-20"
    >
      Scroll to Rotate
    </motion.div>

      <br /><br /><br />


       <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="w-40 h-40 bg-pink-500 my-40"
    >
      Scroll Me
    </motion.div>

    <br /><br />
     <LayoutGroup>
      <motion.div layout className="p-4 bg-gray-100 flex space-x-4">
        <motion.div layoutId="underline" className="bg-black w-20 h-1" />
      </motion.div>
    </LayoutGroup>
    </>
  )
}

export default DemoAnimations   