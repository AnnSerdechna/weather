import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from './Header'
import { ContentWrap } from './ContentWrap'

const pageStyles = `
   w-full 
   min-h-screen
   py-6
   bg-[#f8f8f8] 
   dark:bg-[#1f1f1f]
   transition-colors 
   duration-300 
`

export const Layout: FC = () => {
   return (
      <div className={pageStyles}>
         <ContentWrap>
            <Header />
            <main className={'px-6'}>
               <Outlet />
            </main>
         </ContentWrap>
      </div>
   )
}
