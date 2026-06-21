import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";

const DeveloperCLI = dynamic(
  () => import("@/components/DeveloperCLI").then((mod) => mod.DeveloperCLI),
  { ssr: false }
);

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Shakir Ansari",
    "Full-Stack Developer",
    "Web Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Python Flask API",
    "Cloud Deployment",
    "REST API",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
    creator: "@saahiyo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  sameAs: [siteConfig.github, siteConfig.linkedin],
  knowsAbout: [
    "Full-Stack Development",
    "Backend Systems",
    "Cloud Deployment",
    "REST APIs",
    "React",
    "Next.js",
    "Python",
    "Node.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                if (t === 'light' || (!t && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border focus:border-border focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-foreground"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <DeveloperCLI />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
