import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI Foundry Video Player Studio",
  description: "Standalone Video Player component generator.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex h-screen flex-col overflow-hidden bg-[var(--bg)] text-[var(--text)]">{children}</body>
    </html>
  );
}
