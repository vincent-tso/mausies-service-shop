import { Hero } from "../components/Hero";
import { TitleCard } from "../components/TitleCard";
import { Features } from "../components/Features";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Hero />
            <TitleCard 
            title="Why Choose Our Services?"
            description="We provide the most reliable and professional OSRS achievement services in the community."
            align="centre"
            />
            <Features/>
            <TitleCard 
            title="What Our Clients Say"
            description="Join hundreds of satisfied players who have trusted us with their achievements."
            align="centre"
            bg="bg-gray-100"
            />
            <Testimonials />
            <Footer />
        </div>
    );
}
