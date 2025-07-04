import Quote from "@/public/assets/Quote"
import Image from "next/image"

const TestimonialCard = ({ testimonial, testimonailPic, name, occupation}) => {
  return (
    <div className="border p-4 px-6 rounded-xl flex flex-col max-w-[400px] bg-white">
        <Quote/>
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