import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="flex bg-slate-500 text-white p-5">
      <Link href="/" className="mr-5">Home</Link>
      <Link href="/users" className="mr-5">Users</Link>
      <Link href="/admin" className="mr-5">Admin</Link>
    </nav>
  )
}

export default NavBar