import { ThemeProvider } from "@/components/theme/theme-provider"
import Layout from "./components/Layout"
import Home from "./sections/Home"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/skills"
import Contact from "./sections/Contact"
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em ms
      once: false, // anima só uma vez ao invés de toda vez que entrar na tela
    });
  }, []);

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