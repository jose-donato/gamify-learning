import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Brain, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 py-6 bg-white dark:bg-gray-900 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">BlogMaster</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Features</a></li>
              <li><Link href="/login" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Login</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Elevate Your Blog Learning Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Transform your blog posts into interactive quizzes powered by AI</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="max-w-xs"
            />
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Get Started
            </Button>
          </div>
        </section>

        <section id="features" className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <BookOpen className="h-8 w-8 mb-4 text-indigo-600" />, title: "Blog-Based Learning", description: "Turn any blog post into an interactive quiz" },
              { icon: <Brain className="h-8 w-8 mb-4 text-indigo-600" />, title: "AI-Generated Questions", description: "Automatically create quizzes using advanced AI" },
              { icon: <Users className="h-8 w-8 mb-4 text-indigo-600" />, title: "Social Learning", description: "Engage with friends and track progress" },
              { icon: <Zap className="h-8 w-8 mb-4 text-indigo-600" />, title: "Gamified Experience", description: "Earn XP and unlock achievements as you learn" },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-start">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Ready to Transform Your Learning?</h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Join BlogMaster today and revolutionize how you engage with content</p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3">Sign Up Now</Button>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-900 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; 2023 BlogMaster. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}