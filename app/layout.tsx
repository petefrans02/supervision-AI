export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Supervision AI</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
