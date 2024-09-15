import { PrivateLayout } from "@/components/layout";

export default function PrivateRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PrivateLayout>{children}</PrivateLayout>;
}
