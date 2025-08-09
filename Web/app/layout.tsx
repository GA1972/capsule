export const metadata = { title: "Capsule" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body style={{ fontFamily: "Inter, system-ui" }}>{children}</body></html>;
}
