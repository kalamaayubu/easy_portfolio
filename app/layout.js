import NavBar from "@/components/NavBar";
import "../styles/globals.css";
import ReduxProvider from "@/components/client/ReduxProvider";
import { Toaster } from "sonner";

export const metadata = {
  title: 'EasyPortfolioo',
  description: 'Effortlessly craft a sleek, personalized developer portfolio — no code, no clutter. Just your work, beautifully presented and live in seconds.',
  authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],
  keywords: ['portfolio', 'developer', 'projects', 'EasyPortfolioo', 'Easy Portfolio'],
  openGraph: {
    title: 'EasyPortfolioo',
    description: 'Effortlessly craft a sleek, personalized developer portfolio — no code, no clutter. Just your work, beautifully presented and live in seconds.',
    url: 'https://easyportfolioo.netlify.app',
    siteName: 'EasyPortfolioo',
    images: [
      {
        url: 'https://easyportfolioo.netlify.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EasyPortfolioo preview image',
      },
    ],
  },
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body className="">
            <ReduxProvider>
              <NavBar />
              {children}
              <Toaster richColors position="top-left" />
            </ReduxProvider>
        </body>
    </html>
  )
}

export default RootLayout