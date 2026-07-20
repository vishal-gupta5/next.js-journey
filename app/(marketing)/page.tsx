"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = useRouter();
  return (
    <div className="flex gap-5">
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
      <button onClick={() => navigate.push("/login")}>Login</button>
    </div>
  );
}
