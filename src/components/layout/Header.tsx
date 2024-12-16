import { FC } from 'react'

import { useThemeMode } from '../../hooks'
import { SvgIcon } from '../svg-icon'

export const Header: FC = () => {
   const { theme, toggleTheme } = useThemeMode()

   const headerStyles = `
      flex 
      items-center
      h-20 
      mb-6
      px-6
      bg-[#eee] 
      dark:bg-[#4d5156]
      rounded-full
      transition-colors  
      duration-300 
   `

   return (
      <header className={headerStyles}>
         <button onClick={toggleTheme} className='h-6 w-6'>
            <SvgIcon type={theme === 'dark' ? 'moon' : 'sunny'} />
         </button>
      </header>
   )
}
