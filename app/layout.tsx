import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "AUDREY | オードリー",
  description: "苺が大好きな女の子オードリーがお届けする、甘酸っぱい苺とチョコのキラキラした愛らしいスイーツ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: '"Yu Gothic Medium", YuGothic, "Noto Sans JP", sans-serif', background: '#FFFFFF', color: '#1A1A1A' }}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
