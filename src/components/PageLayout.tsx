import { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-[88px]">
        {children}
      </main>
      <Footer />
    </div>
  )
}
