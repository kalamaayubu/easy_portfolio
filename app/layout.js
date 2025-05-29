import NavBar from "@/components/NavBar";
import "../styles/globals.css";

const metadata = {
  title: 'My App',
  description: 'This is my app description',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <NavBar />
            {children}
        </body>
    </html>
  )
}

export default RootLayout