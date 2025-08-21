import { DollarSign, Clock } from "lucide-react"
import Link from "next/link"

const services = [
    {
        type: "Infernal Cape",
        difficulty: "Extreme",
        description: "The ultimate PvM challenge. Our experienced players will complete the Inferno for you, earning the prestigious Infernal Cape.",
        price: "200m+",
        duration: "1-1.5 Hrs",
        requirements: ["Combat level 100+", "High-level gear recommended", "Account access required"],
        included: ["1x Inferno completion", "Standard combat achievements", "Additional combat achievements available upon purchase", "100% success guarantee"]
    }, 
    {
        type: "Quiver",
        difficulty: "Very Difficult",
        description: "Unlock the most prestigous ranged upgrade in the game, Dizana's Quiver.",
        price: "100m+",
        duration: "0.5-1 Hr",
        requirements: ["Combat level 100+", "Completion of Specific Quests", "High-level gear recommended"],
        included: ["1x Colosseum completion", "Standard combat achievements", "Additional combat achievements available upon purchase", "100% success guarantee"]
    }, 
    {
        type: "Blood Ornament Kit",
        difficulty: "Extreme",
        description: "Obtain the rare Blood Ornament Kit through the Awakened version of the Desert Treasure II Bosses.",
        price: "250m+",
        duration: "1-1.5 Hrs",
        requirements: ["Maximum combat stats", "High-level gear recommended", "Account access required"],
        included: ["1x Blood Ornament Kit", "10 Orb guarantee", "Additional combat achievements available upon purchase", "100% success guarantee"]
    }, 
    {
        type: "Radiant Oathplate Kit",
        difficulty: "Extreme",
        description: "The most prestigious armor ornament kit, requiring completion of the most challenging versions of Demon-King Yama.",
        price: "300m+",
        duration: "1.5-2 Hrs",
        requirements: ["Combat level 100+", "High-level gear recommended", "Purging staff required"],
        included: ["1x Radiant Oathplate Kit", "Standard combat achievements", "Additional combat achievements available upon purchase", "100% success guarantee"]
    }
]

const difficultyColors = {
    'Very Difficult': 'text-orange-600 bg-orange-100',
    'Extreme': 'text-red-600 bg-red-100'
};

export function Service() {
    return (
        <section>
            <div className="bg-white">
                <div className="flex flex-col text-black gap-y-4 p-16 text-center">
                    <h1 className="font-bold text-3xl mx-auto">Our Services</h1>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto">Professional completion of Old School RuneScape's most challenging achievements. All services are performed by skilled players with proven track records.</p>
                </div>
                <div className="grid grid-cols-2 gap-8 text-black px-20 pb-20 pt-8">
                    {services.map((service, index) => (
                        <Link key={index} href="services/inquire">
                            <div className="flex flex-col border border-border rounded-md border-gray-200 justify-between gap-8 p-8 h-full transition duration 200 ease-in-out hover:shadow-md hover:cursor-pointer">
                                <div>
                                    <h2 className="font-bold text-2xl">{service.type}</h2>
                                    <label className={`rounded-xl px-2 py-1 text-sm ${difficultyColors[service.difficulty as keyof typeof difficultyColors]}`}>{service.difficulty}</label>
                                    <p className="text-gray-500">{service.description}</p>
                                </div>
                                <div className="flex flex-col gap-8">
                                    <div className="flex justify-between">
                                        <p className="flex gap-2"><DollarSign /> Price: {service.price}</p>
                                        <p className="flex gap-2"><Clock /> Duration: {service.duration}</p>
                                    </div>
                                    <div className="max-w-sm">
                                        <strong>Requirements:</strong>
                                        <ul>
                                            {service.requirements.map((requirement, i) => (
                                                <li key={i} className="text-sm">{requirement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="max-w-sm">
                                        <strong>What's Included:</strong>
                                        <ul>
                                            {service.included.map((inclusion, i) => (
                                                <li key={i} className="text-sm">{inclusion}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <button className="bg-black text-white w-full border border-border rounded-md p-2 opacity-80 hover:cursor-pointer">Inquire For Your {service.type}</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
