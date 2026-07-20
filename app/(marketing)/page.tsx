"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const navs = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contacts" },
    { href: "/products", label: "products " },
  ];

  const pathName = usePathname();
  const navigate = useRouter();
  return (
    <div className="flex gap-5">
      {/* <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link> */}

      {navs.map((nav, index) => {
        const isActive = pathName === nav.href || (pathName.startsWith(`${nav.href}/`) && nav.href !== '/')
        return (
          <Link key={index} href={nav.href} className={isActive ? `text-red-500` : "text-yellow-400"}>
            {nav.label}
          </Link>
        );
      })}
      <button onClick={() => navigate.push("/login")}>Login</button>
    </div>
  );
}
