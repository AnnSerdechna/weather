import { useEffect, useState } from 'react'

export const useThemeMode = () => {
   const [theme, setTheme] = useState(() => {
      return (
         localStorage.getItem('theme') ||
         (window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light')
      )
   })

   useEffect(() => {
      if (theme === 'dark') {
         document.documentElement.classList.add('dark')
      } else {
         document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', theme)
   }, [theme])

   const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
   }

   return { theme, toggleTheme }
}
