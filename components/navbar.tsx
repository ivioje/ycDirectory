import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8 text-black">
            {session && session?.user ? (
              <>
                <Link
                  href="/startup/create"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Create
                </Link>
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  <button type="submit">Log Out</button>
                </form>
                <Link
                  href={`/user/${session?.id}`}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  <span>{session?.user?.name}</span>
                </Link>
              </>
            ) : (
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                <button type="submit">Sign in with GitHub</button>
              </form>
            )}
          </div>

          {/* Mobile Menu Button */}
          {/* <div className="md:hidden flex items-center">
          <button className="mobile-menu-button p-2 rounded-md hover:bg-gray-100">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div> */}
        </div>

        {/* Mobile Menu */}
        {/* <div className="md:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            Contact
          </Link>
        </div>
      </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
