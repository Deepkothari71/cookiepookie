import AnimatedBackground from '@/components/Background0'
import './globals.css'

export const metadata = {
  title: 'Cookie Scanner',
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