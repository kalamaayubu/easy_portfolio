import Image from "next/image"

const TestimonialCard = ({ testimonial, testimonailPic, name, occupation}) => {
  return (
    <div className="border p-4 px-6 rounded-xl flex flex-col max-w-[400px] bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="url(#fuchsiaToOrange)">
            <defs>
                <linearGradient id="fuchsiaToOrange" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="20%" stop-color="#d946ef"/>
                <stop offset="95%" stop-color="#f97316"/>
                </linearGradient>
            </defs>
            <text x="5" y="50" font-size="48" font-family="Georgia, serif" fill="url(#fuchsiaToOrange)">“</text>
        </svg>

        <p className="text-gray-500 mb-3">{testimonial}</p>
        <div className="flex gap-4 items-center">
            <div>
                <Image
                    src={testimonailPic}
                    alt="Testimonial Image"
                    width={100}
                    height={100}
                    className="rounded-full w-12 h-12 object-cover"
                />
            </div>
            <div className="flex flex-col">
                <h3 className="text-gray-800 font-semibold">{name}</h3>
                <p className="text-gray-500 text-sm">{occupation}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard