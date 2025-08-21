import { ShieldCheck, Users, Award, Clock } from "lucide-react"

const values = [
    {
        icon: ShieldCheck,
        title: "Security First",
        description: "We prioritize your account security above all else. Advanced VPN protection, secure methods, and complete discretion."
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Our team consists of experienced OSRS players with thousands of hours in end-game content and proven track records."
    },
    {
        icon: Award,
        title: "Transparent Process",
        description: "Regular updates, clear communication, and transparent pricing. You'll always know exactly what's happening with your service."
    },
    {
        icon: Clock,
        title: "Fast Delivery",
        description: "We understand your time is valuable. Our efficient methods ensure quick completion without compromising quality or safety."
    }
]

export function Values() {
    return (
        <section>
            <div className="bg-white px-16 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="flex flex-col p-6 border border-gray-200 rounded-md text-black lg:px-8">
                            <div className="flex gap-2">
                                <value.icon className="my-2"/>
                                <h2 className="text-xl my-auto font-bold">{value.title}</h2>
                            </div>
                            <p className="text-gray-500">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
