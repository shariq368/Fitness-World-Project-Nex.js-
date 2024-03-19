import Wrapper from "@/shared/Wrapper"
import HeroPoster from "../../public/assests/images/hero-poster.png"
import Image from "next/image"
// component
import Button from "@/shared/Button"
const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex flex-col md:flex-row items-center gap-x-48 :">
                    {/* Left side */}
                    <div className="flex-1">
                        <h4 className="text-lime-300 font-semibold text-lg">Web Fitness World The Best Way to Get Fit</h4>
                        <h1 className="text-5xl sm:text-6xl font-bold text-white">Start Your Journey to a Fit & Healthy Life</h1>
                        <p className="mt-5 text-1g text-white font-medium">Unleash your potential and transform your life. Web Fitness World offers personalized programs and expert guidance to empower you to achieve your fitness goals.</p>
                       <div className="mt-6">
                            <Button text={"Join Now"}/>
                            </div>
                    </div>
                    {/* Right side */}
                    <div className="flex-1">
                        <Image className="w-[500px]  h-[500px]  " src={HeroPoster} alt="Hero Poster"/>
                    </div>

                </div>

            </Wrapper>
        </section>
    )
}

export default Hero