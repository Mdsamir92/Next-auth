
import ClientProvider from "@/ClientProvider";
import "./globals.css";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
      <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
