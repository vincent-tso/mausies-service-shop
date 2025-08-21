import Link from "next/link"

export function Footer() {
    return (
        <section>
            <footer>
                <div className="flex flex-col p-16 mb-8">
                    <h2 className="font-extrabold text-4xl mx-auto mb-4">Ready To Get Your Achievement?</h2>
                    <p className="text-xl mx-auto mb-8">Contact us today to discuss your requirements and get started on your OSRS goals.</p>
                    <Link href="/services" className="mx-auto"><button className="bg-white border p-2 px-4 text-gray-600 border rounded-md transition duration-200 ease-in-out hover:bg-gray-200 cursor-pointer">Get Started Now</button></Link>
                </div>
            </footer>
        </section>
    );
}
