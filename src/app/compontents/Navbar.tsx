import Link from "next/link";
import React from "react";
import Image from "next/image";

const navigation = [
  { name: "About", href: "#about-section" },
  { name: "Portfolio", href: "#project-section" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const content = (
    <header className="sticky top-0 z-50">
      <nav className="bg-neutral p-4 flex flex-col md:flex-row drop-shadow-xl">
        <div>
        <Image
          src="/img/Profile.png"
          className="rounded-full m-auto"
          alt="Avatar"
          width={50}
          height={50}
        />
        </div>
        <h2 className="text-3xl pl-2 font-bold grid place-content-center mb-2 md:mb-0">
          <Link scroll={false} href="#home-section">
            Garrett Brown
          </Link>
        </h2>
        <div className="flex flex-auto align-middle place-content-end">
        <div className="my-auto space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className=" hover:bg-base-100 hover:text-white rounded-md px-3 py-2 text-xl font-medium">
              {item.name}
            </Link>
          ))}
        </div>
        </div>
      </nav>
    </header>
  );

  return content;
}
