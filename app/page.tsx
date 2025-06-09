import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FeatureCard } from "@/components/feature-card"
import { WorkflowStep } from "@/components/workflow-step"
import { AnimatedText } from "@/components/animated-text"

export default function Home() {
  const features = [
    {
      icon: "🔍",
      title: "Codebase Monitoring",
      description: "Watches your project folder for file changes and detects updates in real-time.",
    },
    {
      icon: "🤖",
      title: "AI Content Generation",
      description: "Uses multiple AI models (ChatGPT, Gemini, Llama) to generate high-quality posts and summaries.",
    },
    {
      icon: "📢",
      title: "Multi-Platform Posting",
      description: "Instantly or on a schedule, post to Twitter, LinkedIn, or your personal blog/portfolio.",
    },
    {
      icon: "📝",
      title: "Approval Workflow",
      description: "Review, edit, and approve generated content before publishing. Submit custom posts too!",
    },
  ]

  const workflowSteps = [
    {
      number: 1,
      title: "Connect to Project",
      description: "Connect AutoSocial AI to your project folder.",
      image: "/Connect to Project.png",
    },
    {
      number: 2,
      title: "Detect Changes",
      description: "It detects code changes and summarizes them.",
      image: "/detect changes.png",
    },
    {
      number: 3,
      title: "Generate Content",
      description:
        'AI generates a ready-to-post update.',
      image: "/generated content.png",
    },
    {
      number: 4,
      title: "Review & Edit",
      description: "You approve, edit, or reject the post.",
      image: "/review and edit .png",
    },
    {
      number: 5,
      title: "Publish",
      description: "AutoSocial AI publishes it to your chosen platforms.",
      image: "/publish.png",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <HeroSection />

      {/* What is AutoSocial AI */}
      <section id="features" className="container max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">What is AutoSocial AI?</h2>
          </AnimatedText>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
            <span className="font-bold">AutoSocial AI</span> is a Python-powered automation tool that monitors your
            codebase for changes and automatically generates engaging posts for Twitter (X), LinkedIn, or your blog.
            Save time, grow your audience, and keep your followers updated with zero manual effort!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Demo Image */}
      <section className="container max-w-6xl mx-auto px-4 py-8">
        <div className="relative rounded-xl shadow-2xl bg-white overflow-hidden" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/1091765193?autoplay=1&muted=0&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            title="Main video - Made with Clipchamp"
          ></iframe>
          {/* Optionally, you can include the overlay as before */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end pointer-events-none rounded-xl">
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Intuitive Dashboard</h3>
              <p className="text-white/90">Monitor all your social activities from one place</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">How does it work?</h2>
          </AnimatedText>
        </div>

        <div className="space-y-12 md:space-y-24">
          {workflowSteps.map((step, index) => (
            <WorkflowStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              image={step.image}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </section>

      {/* Prompt Generation Example */}
      <section className="container max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-6 bg-indigo-600 text-white">
            <h3 className="text-xl font-bold">Prompt Generation Example</h3>
          </div>
          <div className="p-6">
            <Image
              src="/Prompt Gen.png"
              alt="Workflow Example"
              width={1200}
              height={675}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to automate your social presence?</h2>
          </AnimatedText>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Start saving time and growing your audience today with AutoSocial AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://github.com/2005-PriyanshuSaini/AutoSocial-AI" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-slate-100 hover:text-indigo-700 transition-all duration-300 group"
              >
                View on GitHub
                <Github className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </a>
            <a href="mailto:Priyanshusaini9991@gmail.com">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300"
              >
                Contact Author
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">AutoSocial AI</h2>
              <p className="text-slate-400 mt-2">Automate your devlog, blog, and social media posts</p>
            </div>
            <div className="flex flex-col items-end gap-4">
              <div className="text-right">
                <h3 className="text-lg font-semibold text-indigo-300">Developer Info</h3>
                <p className="text-slate-400">Developed by Priyanshu Saini</p>
                <p className="text-slate-400">Python & AI Enthusiast</p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/2005-PriyanshuSaini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/Dev_Prynshu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prynshu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            &copy; 2024 Priyanshu Saini. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
