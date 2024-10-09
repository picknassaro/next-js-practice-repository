"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="flex bg-slate-500 text-white p-5">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      <Link href="/admin" className="mr-5">
        Admin
      </Link>
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="mr-5">
          Login
        </Link>
      )}
      {status === "loading" && <p>Loading...</p>}
      {status === "authenticated" && (
        <>
          <div className="mr-5">
            {session?.user?.name || session?.user?.email || "Unidentified User"}
          </div>
          <Link href="/api/auth/signout" className="mr-5">Sign out</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
