import TestimonialCard from "./TestimonialCard"

const TestimonialSection = () => {
  return (
    <div id="testimonials" className="m-auto max-w-7xl w-[80%]">
        <p className="section-header">TESTIMONIALS</p>
        <div className="flex justify-center">
            <div className="grid grid-cols-1 max-w-[12800px] md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4 xl:gap-6">
                <TestimonialCard 
                    name={'Liam Okoro'}
                    occupation={'Data Scientist Enthusiast'} 
                    testimonial={'What I appreciated most was how straightforward everything felt. The layout is clean, and I didn’t have to fight with the structure to make it my own.'} 
                    testimonailPic={"/assets/testimonials/dataAnalyst.jpeg"}
                />
                <TestimonialCard 
                    name={'Sofia Lian'}
                    occupation={'Fullstack developer / Freelancer'} 
                    testimonial={'I used to dread updating my portfolio. EasyPortfolio made it feel like fun.'} 
                    testimonailPic={"/assets/testimonials/fullstackDev.jpeg"}
                />
                <TestimonialCard 
                    name={'Zahra Al-Mansouri'} 
                    occupation={'Product Designer'} 
                    testimonial={'For someone outside traditional dev workflows, it was refreshing to find a setup I could navigate and present my profile without technical overhead.'} 
                    testimonailPic={"/assets/testimonials/siz.jpg"}
                />
                <TestimonialCard 
                    name={'Tariq Abiola'} 
                    occupation={'Economist / Product Manager'} 
                    testimonial={'For someone outside traditional dev workflows, it was refreshing to find a setup I could navigate and present my profile without technical overhead.'} 
                    testimonailPic={"/assets/testimonials/economist.jpeg"}
                />
                <TestimonialCard 
                    name={'Isabella Nakamura'} 
                    occupation={'Journalist / Content Creator'} 
                    testimonial={'I wanted a site that reflects professionalism without overcomplicating the process. This did exactly that — and the writing-focused layout helped.'} 
                    testimonailPic={"/assets/testimonials/journalist.jpeg"}
                />
                <TestimonialCard 
                    name={'Kai Russo'} 
                    occupation={'Frontend Developer / Tutor'} 
                    testimonial={'It’s ideal for developers who want to showcase projects cleanly. My students even found it useful as a real-world example of modern dev presentation.'} 
                    testimonailPic={"/assets/testimonials/frontendDev.jpeg"}
                />
            </div>
        </div>
    </div>
  )
}

export default TestimonialSection