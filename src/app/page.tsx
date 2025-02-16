'use client'

import { motion } from "motion/react"

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-900 text-white">

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1.1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1.9 }}
        className="top-10 text-center"
      >
        <h1 className="text-6xl font-bold mt-10">Next 15 Motion</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1.1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1.9 }}
        className="text-center"
      >

        <p className="top-20 w-fit ml-32 rounded-md text-3xl text-white bg-zinc-900/35 px-5 p-2">NextJS 15</p>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1.1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 3 }}
        className="text-center mt-5"
      >

        <p className="w-fit ml-32 rounded-md text-3xl text-white bg-zinc-900/35 px-5 p-2">TailWind-CSS</p>

      </motion.div>

      <motion.div
        animate={{ rotateX: 90 }}
        transition={{
          type: "spring",
          visualDuration: 2,
          bounce: 0.25
        }}
        className="text-center"
      >
        <h2 className="text-6xl">Hi!</h2>
        <h2 className="text-3xl">Friends</h2>
      </motion.div>

    </div>
  )
}