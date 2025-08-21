import { Swords, House, ScrollText, User} from "lucide-react"
import Link from "next/link"

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
                    <div className="flex gap-x-2">
                        {navItems.map((navItem, index) => (
                            <Link key={index} href={navItem.link}>
                                <button className="flex gap-x-2 text-gray-600 rounded-md transition duration-200 ease-in-out hover:bg-gray-200 hover:cursor-pointer p-2 px-4">
                                    <navItem.icon />
                                    <p className="">{navItem.title}</p>
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </section>
    );
}
