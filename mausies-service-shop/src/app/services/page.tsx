import { TitleCard } from "../../components/TitleCard"
import { Service } from "../../components/Service"

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            <TitleCard
            title="Our Services"
            description="Professional completion of Old School RuneScape's most challenging achievements. All services are performed by skilled players with proven track records."
            align="centre"
            />
            <Service />
        </div>
    );
}
