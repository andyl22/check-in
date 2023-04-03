import "./globals.scss";

export const metadata = {
  title: "Check In App",
  description: "An App For Daily Accountability",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Welcome Back!</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
