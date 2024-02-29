import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Example App 1",
  description: "Example application number one",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
