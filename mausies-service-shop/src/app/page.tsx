import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Hero />
            <Features/>
            <Testimonials />
            <Footer />
        </div>
    );
}
