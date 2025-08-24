import ServiceForm from "../../../components/ServiceForm"
import InquiryHero from "../../../components/InquiryHero"

const SERVICES = ["Inferno Cape", "Quiver", "Blood Ornament Kit", "Radiant Oathplate Kit"] as const;
type Service = typeof SERVICES[number];

export default function Inquire({
    searchParams,
  }: { searchParams: { serviceType?: string } }) {
    const initialServiceType: Service =
        SERVICES.includes(searchParams.serviceType as Service)
        ? (searchParams.serviceType as Service)
        : "Inferno Cape"; // fallback

    return(
        <div className="min-h-screen">
            <InquiryHero />
            <ServiceForm initialServiceType={initialServiceType} />
        </div>
    );
}
