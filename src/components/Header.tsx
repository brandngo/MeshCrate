import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <header className="w-full bg-gray-800 text-white shadow-md">
      <div className="flex items-center justify-between p-4">
        {/* Left Section: Icon and Title */}
        <div className="flex items-center gap-2">
          <Image
            src="/icon.svg"
            alt="Site Icon"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <h1 className="text-lg font-bold">MeshCrate</h1>
        </div>

        {/* Right Section: Navigation Links */}
        <button
          className="sm:hidden p-2 rounded-md hover:bg-gray-700"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Toggle Navigation"
        >
          <span className="material-icons">menu</span>
        </button>
        <nav
          className={`${
            isCollapsed ? "hidden" : "block"
          } sm:flex gap-4 items-center`}
        >
          <a
            href="/about"
            className="hover:underline hover:underline-offset-4"
          >
            About
          </a>
          <a
            href="/services"
            className="hover:underline hover:underline-offset-4"
          >
            Services
          </a>
          <a
            href="/contact"
            className="hover:underline hover:underline-offset-4"
          >
            Contact
          </a>
          
        </nav>
      </div>
    </header>
  );
}