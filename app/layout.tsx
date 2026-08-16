import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"The Lyric Prism — Pink Floyd Themes",description:"Explore how recurring lyrical themes changed across Pink Floyd's discography."};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>;}
