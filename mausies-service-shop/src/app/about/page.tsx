import { TitleCard } from "../../components/TitleCard"
import { Values } from "../../components/Values"
import { Footer } from "../../components/Footer"

export default function About() {
    return (
        <div className="min-h-screen">
            <TitleCard
                title="About Mausies Services"
                description="We are a team of dedicated Old School RuneScape veterans providing professional achievement completion services to players worldwide. Our mission is to help you reach your OSRS goals safely and efficiently."
                align="centre"
                size="lg"
                as="h1"
            />
            <TitleCard
                title="Our Core Values"
                align="centre"
            />
            <Values />
            <Footer />
        </div>
    );
}