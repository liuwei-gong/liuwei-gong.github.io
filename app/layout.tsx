import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://liuwei-gong.github.io"),
  title: {
    default: "Liuwei Gong · Mathematics",
    template: "%s · Liuwei Gong",
  },
  description:
    "Academic homepage of Liuwei Gong, a mathematician working in nonlinear, harmonic, and geometric analysis.",
  keywords: [
    "Liuwei Gong",
    "mathematics",
    "nonlinear analysis",
    "harmonic analysis",
    "geometric analysis",
    "Q-curvature",
    "oscillatory integrals",
  ],
  authors: [{ name: "Liuwei Gong" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title: "Liuwei Gong · Mathematics",
    description: "Research in nonlinear, harmonic, and geometric analysis.",
    siteName: "Liuwei Gong",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Liuwei Gong — nonlinear, harmonic, and geometric analysis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liuwei Gong · Mathematics",
    description: "Research in nonlinear, harmonic, and geometric analysis.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
