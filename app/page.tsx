import Link from "next/link";

export default function Home() {
  return <>
    <Link href="/about" className="bg-slate-700 text-white">About</Link>
    <Link href="/users" className="bg-slate-700 text-white">users</Link>
    <h1>Hello</h1>
  </>
}
