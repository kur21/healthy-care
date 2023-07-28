import { Footer, Header, ScrollBtn } from "@/components";
import { BASE_URL } from "@/configs";
import "@/styles/globals.css";

export const metadata = {
  title: {
    template: "%s | Healthy App",
    default: "Healthy App",
  },
  description: "Healthy Application for everyone",
  openGraph: {
    title: "Healthy App",
    description: "Healthy Application for everyone",
    url: BASE_URL,
    siteName: "Healthy App",
    images: [
      {
        url: "/assets/images/logo/healthy-logo.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Header />
        <main className="app">{children}</main>
        <Footer />
        <ScrollBtn />
      </body>
    </html>
  );
}
