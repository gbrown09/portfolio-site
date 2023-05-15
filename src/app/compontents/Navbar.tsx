import Link from 'next/link'
import React from 'react'

const navigation = [
    {name: 'About', href: "#about-section" },
    {name: 'Portfolio', href: "/portfolio" },
    {name: 'Contact', href: "/contact" },

]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

export default function Navbar() {
    const content = (
        <header>
            <nav className="bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
                    <h2 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
                        <Link href='/'>Garrett Brown</Link>
                    </h2>
                    <div className="flex space-x-4 place-content-center">
                        {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                            {item.name}
                        </Link>
                        ))}
                    </div>
            </nav>
        </header>
    )

  return content
}
