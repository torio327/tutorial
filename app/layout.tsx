
import "./globals.css";
import {Footer, Navber} from "@/components";


export const metadata = {
  title: "Car Hub",
  description: "Discover the best car in the world",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'relative'}>
      <Navber/>
      {children}</body>
    <Footer/>
    </html>
  );
}
