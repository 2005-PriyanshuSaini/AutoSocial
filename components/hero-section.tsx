"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [backgroundElements, setBackgroundElements] = useState<
    Array<{
      width: number
      height: number
      left: string
      top: string
      duration: number
    }>
  >([])

  useEffect(() => {
    // Generate random background elements only on the client side
    const elements = Array.from({ length: 20 }, () => ({
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 10,
    }))
    setBackgroundElements(elements)
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: element.width,
              height: element.height,
              left: element.left,
              top: element.top,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: element.duration,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">AutoSocial AI</h1>
              <p className="text-xl md:text-2xl text-indigo-200 mb-8 max-w-lg">
                Automate your devlog, blog, and social media posts from your code changes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="https://github.com/2005-PriyanshuSaini/AutoSocial-AI" target="_blank">
                  <Button
                    size="lg"
                    className="bg-white text-indigo-900 hover:bg-slate-100 hover:text-indigo-800 transition-all duration-300 group"
                  >
                    View on GitHub
                    <Github className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-indigo-900 hover:bg-white/10 transition-all duration-300 w-full"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
                <div className="h-8 bg-slate-800 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-4">
                  <pre className="text-xs md:text-sm text-green-400 font-mono">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      <span className="text-blue-400">from</span> autosocial{" "}
                      <span className="text-blue-400">import</span> AutoSocialAI
                    </motion.span>
                    <br />
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                    >
                      <br />
                      <span className="text-purple-400">ai</span> = AutoSocialAI(
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2, duration: 0.5 }}
                    >
                      <br />
                      {"    "}project_path=<span className="text-yellow-300">"./my_project"</span>,
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.5, duration: 0.5 }}
                    >
                      <br />
                      {"    "}platforms=[<span className="text-yellow-300">"twitter"</span>,{" "}
                      <span className="text-yellow-300">"linkedin"</span>],
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3, duration: 0.5 }}
                    >
                      <br />
                      {"    "}ai_model=<span className="text-yellow-300">"gpt-4"</span>
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.5, duration: 0.5 }}
                    >
                      <br />)
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 4, duration: 0.5 }}
                    >
                      <br />
                      <br />
                      <span className="text-blue-400">print</span>(
                      <span className="text-yellow-300">"Starting AutoSocial AI..."</span>)
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 4.5, duration: 0.5 }}
                    >
                      <br />
                      <span className="text-purple-400">ai</span>.start_monitoring()
                    </motion.span>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 5, duration: 0.5 }}
                      className="mt-4 text-white"
                    >
                      <span className="text-green-400">{">"} Starting AutoSocial AI...</span>
                      <br />
                      <span className="text-green-400">{">"} Monitoring project for changes...</span>
                      <br />
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ delay: 5.5, duration: 1, repeat: Number.POSITIVE_INFINITY }}
                        className="inline-block"
                      >
                        █
                      </motion.span>
                    </motion.div>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
