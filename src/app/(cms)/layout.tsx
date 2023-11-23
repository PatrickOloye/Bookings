// import type { Metadata } from 'next'
// import { Poppins } from 'next/font/google'
// import './globals.css'
// import Header from '@/components/Header/Header'
// import Footer from '@/components/Footer/Footer'
// import ThemeProvider from '@/components/ThemeProvider/ThemeProvider'

// const poppins =  Poppins({ subsets: ['latin'], weight: ["400", "500", "700", "900"], style: ['italic', 'normal'], variable: '--font-poppins'  })

// export const metadata: Metadata = {
//   title: 'Lodge App',
//   description: 'Created by Shawn',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//     <body className={poppins.className}>
//       <ThemeProvider>
//       <main className='font-normal'>
//         {/* 7Header */}
//        <Header/>
//         {children}
//         {/* ?Footer */}
//         <Footer/>
//         </main>
//       </ThemeProvider>
//     </body>
//   </html>
//   )
// }
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
// import './globals.css'
// import Header from '@/components/Header/Header'
// import Footer from '@/components/Footer/Footer'
// import ThemeProvider from '@/components/ThemeProvider/ThemeProvider'

// const poppins =  Poppins({ subsets: ['latin'], weight: ["400", "500", "700", "900"], style: ['italic', 'normal'], variable: '--font-poppins'  })

export const metadata: Metadata = {
  title: 'Lodge App',
  description: 'Created by Shawn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>{children}</body>
  </html>
  )
}