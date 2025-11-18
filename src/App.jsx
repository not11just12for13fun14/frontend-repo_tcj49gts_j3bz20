import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import JobSearch from './components/JobSearch'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <JobSearch />
      <Pricing />
      <FAQ />
      <footer className="py-12 text-center text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} JobReach. All rights reserved.
      </footer>
    </div>
  )
}

export default App