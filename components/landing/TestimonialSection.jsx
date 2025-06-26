import TestimonialCard from "./TestimonialCard"

const TestimonialSection = () => {
  return (
    <div className="m-auto max-w-7xl w-[80%]">
        <p className="text-center purple-gradient-text text-sm mt-28 mb-6 border border-gray-800 px-5 py-1 rounded-full w-fit m-auto">TESTIMONIALS</p>
        <div className="flex justify-center">
        <div className="grid grid-cols-1 max-w-[12800px] md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4 xl:gap-6">
        <TestimonialCard 
            name={'Kelvin Katwai'}
            occupation={'Data Scientist Enthusiast'} 
            testimonial={'What I appreciated most was how straightforward everything felt. The layout is clean, and I didn’t have to fight with the structure to make it my own.'} 
            testimonailPic={"/assets/testimonials/katwai.jpg"}
        />
        <TestimonialCard 
            name={'Kalama Ayubu'}
            occupation={'Fullstack developer / Freelancer'} 
            testimonial={'I used to dread updating my portfolio. EasyPortfolio made it feel like fun.'} 
            testimonailPic={"/assets/testimonials/me.jpg"}
        />
        <TestimonialCard 
            name={'Rasoa Kadzo'} 
            occupation={'Product Designer'} 
            testimonial={'For someone outside traditional dev workflows, it was refreshing to find a setup I could navigate and present my profile without technical overhead.'} 
            testimonailPic={"/assets/testimonials/siz.jpg"}
        />
        <TestimonialCard 
            name={'Joseph Kagwe'} 
            occupation={'Economist / Product Manager'} 
            testimonial={'For someone outside traditional dev workflows, it was refreshing to find a setup I could navigate and present my profile without technical overhead.'} 
            testimonailPic={"/assets/testimonials/kagwe.jpg"}
        />
        <TestimonialCard 
            name={'Kenyan Ely'} 
            occupation={'Journalist / Content Creator'} 
            testimonial={'I wanted a site that reflects professionalism without overcomplicating the process. This did exactly that — and the writing-focused layout helped.'} 
            testimonailPic={"/assets/testimonials/me3.jpg"}
        />
        <TestimonialCard 
            name={'Joe Indogwa'} 
            occupation={'Frontend Developer / Tutor'} 
            testimonial={'It’s ideal for developers who want to showcase projects cleanly. My students even found it useful as a real-world example of modern dev presentation.'} 
            testimonailPic={"/assets/testimonials/me2.jpg"}
        />
        </div>
        </div>
    </div>
  )
}

export default TestimonialSection