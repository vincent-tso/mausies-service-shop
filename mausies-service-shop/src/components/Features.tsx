import { Trophy, Zap, Shield, Users } from 'lucide-react';

const features = [
    {
        icon: Shield,
        title: "100% Safe & Secure",
        description: "We use advanced security measures and VPN protection to ensure your account remains safe throughout the service."
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Our expert team completes services efficiently while maintaining the highest quality standards."
    },
    {
        icon: Trophy,
        title: "Guaranteed Results",
        description: "We guarantee successful completion of your desired achievement or your money back."
    },
    {
        icon: Users,
        title: "24/7 Support",
        description: "Our dedicated support team is available around the clock to assist you with any questions or concerns."
    }
];

export function Features() {
    return (
        <section>
            <div className="bg-white p-16 pb-20">
                <div className="flex flex-col text-black gap-y-4 pb-8 text-center">
                    <h1 className="font-bold text-3xl mx-auto">Why Choose Our Services?</h1>
                    <p className="text-gray-600 text-xl max-w-2xl mx-auto">We provide the most reliable and professional OSRS achievement services in the community.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col text-center p-6 border border-gray-200 rounded-md text-black lg:px-8">
                            <feature.icon className="mx-auto w-12 h-12 my-2"/>
                            <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
                            <p className="text-gray-500">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
