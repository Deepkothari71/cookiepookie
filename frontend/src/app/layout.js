import AnimatedBackground from '@/components/Background'
import './globals.css'

export const metadata = {
  title: 'Cookie Pook',
  description: 'Check website cookie compliance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen text-white overflow-x-hidden">
        <AnimatedBackground />
        {children}
      </body>
    </html>
  )
}