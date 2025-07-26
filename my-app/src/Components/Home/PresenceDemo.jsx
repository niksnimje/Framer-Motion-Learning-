"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function PresenceDemo() {
  const [show, setShow] = useState(true)

  return (
    <div className="mx-auto justify-center place-content-center container text-center">
      <button onClick={() => setShow(!show)} className="bg-green-400 p-3  rounded-lg cursor-pointer">Toggle</button>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-40 h-40 bg-red-400 mt-4"
          >
            Fade Box
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
