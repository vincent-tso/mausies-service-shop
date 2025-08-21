import { Footer } from "../../../../components/Footer"

export default function ThankYou() {
    return (
        <div className="min-h-screen">
            <div className="bg-white text-black p-16 flex flex-col">
                <h1 className="mx-auto font-bold text-4xl p-20">Thank you for your inquiry.</h1>
                <div className="mx-auto">
                    <h2 className="text-xl pb-4">What Happens Next?</h2>
                    <div className="p-4 border border-gray-200 rounded-md ">
                        <ol>
                            <li className="pb-2">
                                <strong>1. Review</strong>
                                <p className="text-gray-600">We&apos;ll review your inquiry within 24 hours</p>
                            </li>
                            <li className="pb-2">
                                <strong>2. Quote</strong>
                                <p className="text-gray-600">You will receive a personalised quote and timeline</p>
                            </li>
                            <li className="pb-2">
                                <strong>3. Service</strong>
                                <p className="text-gray-600">Secure service completion by our experts</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}