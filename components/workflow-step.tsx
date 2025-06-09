"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

interface WorkflowStepProps {
  number: number
  title: string
  description: string
  image: string
  isReversed?: boolean
}

export function WorkflowStep({ number, title, description, image, isReversed = false }: WorkflowStepProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12`}
    >
      <div className="md:w-1/2">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg mr-4">
            {number}
          </div>
          <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
        </div>
        <p className="text-lg text-slate-600">{description}</p>
      </div>
      <div className="md:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-xl overflow-hidden shadow-lg"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30"></div>
            <div className="relative bg-white rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="w-full h-auto"
            />
            </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
