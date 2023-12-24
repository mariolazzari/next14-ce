"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
};

function RootLayout({ children }: Props) {
  const pathname = usePathname();

  const links = [
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
  ];

  return (
    <div>
      <h2>Inner layout</h2>

      <div>
        {links.map(link => {
          const isActive = link.href === pathname;
          const style = isActive
            ? "text-xl text-sky-800 mr-1 hover:cursor-pointer hover:text-sky-800"
            : "text-xl mr-1 hover:cursor-pointer hover:text-sky-800";

          return (
            <Link key={link.href} className={style} href={link.href}>
              {link.label}
            </Link>
          );
        })}
      </div>

      {children}
    </div>
  );
}

export default RootLayout;
