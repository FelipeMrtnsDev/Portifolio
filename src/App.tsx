import { ThemeProvider } from "@/components/theme/theme-provider"
import Layout from "./components/Layout"
import Home from "./sections/Home"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/skills"
import Contact from "./sections/Contact"
import { useEffect } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ToastContainer />
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

export default App;
