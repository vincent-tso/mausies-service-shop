import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "DragonSlayer99",
        service: "Infernal Cape",
        rating: 5,
        text: "Absolutely incredible service! Got my Infernal Cape without any issues. Professional, fast, and discrete. Highly recommend!"
    },
    {
        name: "PvMKing2024",
        service: "Blood Ornament Kit",
        rating: 5,
        text: "Second time using their services. The Blood Ornament Kit completion was flawless. Great communication throughout the process."
    },
    {
        name: "IronManPro",
        service: "Quiver",
        rating: 5,
        text: "These guys are the real deal. Got my quiver completed efficiently and safely. Will definitely use again for future achievements!"
    }
  ];
  
  export function Testimonials() {
    return(
        <section>
            <div className="bg-gray-100 px-16 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col p-6 border border-gray-200 bg-white rounded-md text-black lg:px-8">
                            <div>
                                <h2 className="text-xl font-bold">{testimonial.name}</h2>
                                <p className="text-sm mb-2">{testimonial.service}</p>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-500 italic">&quot;{testimonial.text}&quot;</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
