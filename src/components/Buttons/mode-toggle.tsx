import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme/theme-context"

export default function ModeToggle() {
  const { setTheme } = useTheme()

  const toggleTheme = () => {
    // Verifica qual tema está ativo e alterna
    const currentTheme = document.documentElement.classList.contains("dark") ? "light" : "dark"
    setTheme(currentTheme)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="w-14 h-14 rounded-full"
      onClick={toggleTheme} 
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
