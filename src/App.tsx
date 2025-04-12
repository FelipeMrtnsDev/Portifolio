import { ThemeProvider } from "@/components/theme/theme-provider"
import Layout from "./components/Layout"
import Home from "./sections/Home"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/skills"
import Contact from "./sections/Contact"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Layout>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Layout>
    </ThemeProvider>
  )
}

export default App