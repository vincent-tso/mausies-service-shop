import Link from "next/link"

export function Hero() {
    return(
        <section>
            <div className="bg-gray-100 font-sans text-black flex mx-auto flex-col text-center justify-evenly p-16 pb-20 gap-y-8">
                <div>
                    <h1 className="font-extrabold text-6xl">Mausies Services</h1>
                </div>
                <div className="max-w-3xl mx-auto">
                    <p className="text-xl text-gray-600">
                        Professional Old School RuneScape end-game achievement services. Get your Infernal Cape, Quivers, and rare ornament kits completed with confidence.
                    </p>
                </div>
                <div className="flex mx-auto gap-x-4">
                    <Link href="/services"><button className="border border-gray-200 bg-white p-2 px-4 rounded-md text-black transition duration-200 ease-in-out hover:bg-gray-200 cursor-pointer">View Services</button></Link>
                    <Link href="/about"><button className="border border-gray-200 bg-white p-2 px-4 rounded-md text-black transition duration-200 ease-in-out hover:bg-gray-200 cursor-pointer">Learn More</button></Link>
                </div>
            </div>
        </section>
    );
}
