import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-lvh flex flex-col bg-stone-100">
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  );
}
