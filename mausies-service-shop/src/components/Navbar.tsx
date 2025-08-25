"use client"

import { Swords, House, ScrollText, User, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

const navItems = [
    {
        icon: House,
        title: "Home",
        link: "/"
    },
    {
        icon: ScrollText,
        title: "Services",
        link: "/services"
    },
    {
        icon: User,
        title: "About",
        link: "/about"
    }
]

export function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const closeDropdown = () => {
        setIsDropdownOpen(false)
    }

    return (
        <section className="sticky top-0 border-b-1 z-50">
            <nav>
                <div className="flex justify-between px-6 py-4 text-md bg-white text-black">
                    <Link className="my-auto px-4" href="/">
                        <div className="flex gap-x-2 font-bold text-xl hover:cursor-pointer transition duration-200 ease-in-out hover:opacity-80">
                            <Swords className="my-auto"/>
                            <h1 className="my-auto">Mausies Services</h1>
                        </div>
                    </Link>
                    <div className="flex gap-x-2 max-md:hidden">
                        {navItems.map((navItem, index) => (
                            <Link key={index} href={navItem.link}>
                                <button className="flex gap-x-2 text-gray-600 rounded-md transition duration-200 ease-in-out hover:bg-gray-200 hover:cursor-pointer p-2 px-4">
                                    <navItem.icon />
                                    <p className="">{navItem.title}</p>
                                </button>
                            </Link>
                        ))}
                    </div>
                    <div className="relative hidden max-md:block" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="my-auto mx-4 cursor-pointer transition duration-200 ease-in-out hover:text-gray-500 p-1"
                            aria-label="Toggle navigation menu"
                        >
                            {isDropdownOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                        
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 border border-gray-200">
                                <ul className="z-10 py-2 text-sm text-gray-700">
                                    {navItems.map((navItem, index) => (
                                        <li key={index}>
                                            <Link 
                                                href={navItem.link} 
                                                className="flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100 transition duration-150 ease-in-out"
                                                onClick={closeDropdown}
                                            >
                                                <navItem.icon size={20} />
                                                {navItem.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </section>
    );
}
