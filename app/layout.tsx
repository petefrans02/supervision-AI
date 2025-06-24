// app/layout.tsx

export const metadata = {
  title: 'Supervision AI',
  description: 'Simple video generation UI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
