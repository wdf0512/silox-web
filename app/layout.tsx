import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from '@radix-ui/themes';
import NavBar from './NavBar';
import purpleBlueBg from '@/public/images/purpleBlueBg.png';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Theme
          accentColor="iris"
          radius="large"
          // style={{ color: "white" }}
          // appearance="dark"
          style={{
            backgroundImage: `url(${purpleBlueBg.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            height: "auto",
            width: "100vw",
            paddingBottom: '20px'
          }}
        >
          <NavBar />
          {children}
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  )
}
