import NavBar from "@/components/NavBar";
import "../styles/globals.css";
import ReduxProvider from "@/components/client/ReduxProvider";
import { Toaster } from "sonner";

export const metadata = {
  title: 'My App',
  description: 'This is my app description',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
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