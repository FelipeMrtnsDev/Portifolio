import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Home from "./sections/Home"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Header />
      <Home />
    </ThemeProvider>
  )
}

export default App
