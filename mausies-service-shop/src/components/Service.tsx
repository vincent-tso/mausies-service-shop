import { DollarSign, Clock } from "lucide-react"

const services = [
    {
        type: "Infernal Cape",
        difficulty: "Extreme",
        description: "The ultimate PvM challenge. Our experienced players will complete the Inferno for you, earning the prestigious Infernal Cape.",
        price: "200m+",
        duration: "1-1.5 Hrs",
        requirements: ["Combat level 100+", "High-level gear recommended", "Account access required"],
        included: ["Standard combat achievements", "Additional combat achievements available upon purchase", "Full account security measures", "100% success guarantee"]
    }, 
    {
        type: "Quiver",
        difficulty: "Very Difficult",
        description: "Unlock the most prestigous ranged upgrade in the game, Dizana's Quiver.",
        price: "100m+",
        duration: "0.5-1 Hr",
        requirements: ["Combat level 100+", "Completion of Specific Quests", "High-level gear recommended"],
        included: ["Standard combat achievements", "Additional combat achievements available upon purchase", "Full account security measures", "100% success guarantee"]
    }, 
    {
        type: "Blood Ornament Kit",
        difficulty: "Extreme",
        description: "Obtain the rare Blood Ornament Kit through the Awakened version of the Desert Treasure II Bosses.",
        price: "250m+",
        duration: "1-1.5 Hrs",
        requirements: ["Maximum combat stats", "High-level gear recommended", "Account access required"],
        included: ["10 Orb guarantee", "Additional combat achievements available upon purchase", "Full account security measures", "100% success guarantee"]
    }, 
    {
        type: "Radiant Oathplate Kit",
        difficulty: "Extreme",
        description: "The most prestigious armor ornament kit, requiring completion of the most challenging versions of Demon-King Yama.",
        price: "300m+",
        duration: "1.5-2 Hrs",
        requirements: ["Combat level 100+", "High-level gear recommended", "Purging staff required"],
        included: ["Standard combat achievements", "Additional combat achievements available upon purchase", "Full account security measures", "100% success guarantee"]
    }
]

export default function Service() {
    return (
        <section>
            <div className="bg-white">
                <div className="flex flex-col text-black gap-y-4 p-16 text-center">
                    <h1 className="font-bold text-3xl mx-auto">Our Services</h1>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto">Professional completion of Old School RuneScape's most challenging achievements. All services are performed by skilled players with proven track records.</p>
                </div>
                <div className="grid grid-cols-2 gap-8 text-black p-20">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col justify-between border border-border rounded-md border-gray-200 gap-8 p-8  transition duration 200 ease-in-out hover:scale-101 hover:shadow-md">
                            <div>
                                <h2 className="font-bold text-2xl">{service.type}</h2>
                                <label className="text-sm">{service.difficulty}</label>
                                <p className="text-gray-500">{service.description}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="flex gap-2"><DollarSign /> Price: {service.price}</p>
                                <p className="flex gap-2"><Clock /> Duration: {service.duration}</p>
                            </div>
                            <div className="max-w-sm">
                                <strong>Requirements:</strong>
                                <ul>
                                    {service.requirements.map((requirement, index) => (
                                        <li className="text-sm">{requirement}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="max-w-sm">
                                <strong>What's Included:</strong>
                                <ul>
                                    {service.included.map((inclusion, index) => (
                                        <li className="text-sm">{inclusion}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <button className="bg-black text-white w-full border border-border rounded-md p-2">Inquire For Your {service.type}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
