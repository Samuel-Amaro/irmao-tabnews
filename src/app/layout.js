export const metadata = {
  title: "Irmão TabNews",
  description: "irmão TabNews",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
