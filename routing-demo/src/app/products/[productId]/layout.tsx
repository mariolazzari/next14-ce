import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product details",
  description: "Generated by create next app",
};

type Props = {
  children: ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <>
      <h2>Feature layout</h2>
      {children}
    </>
  );
}

export default RootLayout;