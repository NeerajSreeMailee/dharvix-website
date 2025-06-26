// // hooks/use-theme.ts
// import { useEffect, useState } from "react"

// export function useTheme() {
//   const [theme, setTheme] = useState<"light" | "dark">("light")

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
//     const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
//     const initialTheme = savedTheme ?? (systemPrefersDark ? "dark" : "light")

//     document.documentElement.classList.toggle("dark", initialTheme === "dark")
//     setTheme(initialTheme)
//   }, [])

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light"
//     document.documentElement.classList.toggle("dark", newTheme === "dark")
//     localStorage.setItem("theme", newTheme)
//     setTheme(newTheme)
//   }

//   return { theme, toggleTheme }
// }
// // This hook manages the theme state and toggling between light and dark modes.
// // It initializes the theme based on local storage or system preferences and provides a function to toggle the theme.
// // It also updates the document's class to apply the appropriate styles.
// // This allows components to easily access and change the theme without duplicating logic.


import { useCallback, useEffect, useState } from "react"

type Theme = "light" | "dark"

export function useTheme() {
  // Check initial theme from localStorage or system preference
  const getInitialTheme = (): Theme => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme")
      if (stored === "light" || stored === "dark") return stored
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark"
    }
    return "light"
  }

  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  // Apply theme to <html> element
  useEffect(() => {
    const root = window.document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }, [])

  return { theme, toggleTheme }
}