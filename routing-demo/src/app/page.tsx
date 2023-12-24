import Link from "next/link";

function Home() {
  const links = [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Products", href: "/products" },
  ];

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Home page</h1>

      {links.map(link => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className="text-sky-800 hover:cursor-pointer hover:bg-slate-50 p-2"
          >
            {link.label}
          </Link>
        );
      })}
    </main>
  );
}

export default Home;
