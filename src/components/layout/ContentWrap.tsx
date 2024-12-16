import { FC, ReactNode } from 'react'

const contentStyles = `
   w-full
   max-w-screen-lg
   min-h-screen
   mx-auto 
   px-10
`

export const ContentWrap: FC<{ children: ReactNode }> = ({ children }) => (
   <div className={contentStyles}>{children}</div>
)
