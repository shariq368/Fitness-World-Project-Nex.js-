import Button from "@/shared/Button"
import Wrapper from "@/shared/Wrapper"

const CoreTrackdata =[
{
  header:"Hedline 1",
  description:"Unleash Your Fitness Potential",
},
{
  header:"Hedline 2",
  description:"Expert Articles & Personalized Plans to Fuel Your Journey",
},
{
  header:"Hedline 3",
  description:"Join Now & Achieve Your Fitness Goals",
}

]

const CoreTrack = () => {
  return (
    <section className="mt-16 lg:mt-28">
        <Wrapper>
            {/* Content */}
        <div className="max-w-screen-sm"> 
            <h4 className="text-lime-300 font-semibold text-lg">Track Your Progress Reach Your Goals</h4>
            <h2 className="text-4xl font-bold text-white" >Your Fitness Journey Simplified</h2>
            <p className="mt-4 text-1g text-white font-medium">Unleash your fitness potential. Expert articles & personalized plans to guide your journey to a healthier you.</p>
            <div className="mt-4">
              <Button text="Join Now"/>
            </div>
        </div>
        {/* Boxes */}
        <div className="my-20 flex flex-col md:flex-row gap-x-8  gap-y-6 mt-[300px]">
          {
            CoreTrackdata.map((item, i) => (
                            <div className="border rounded-md flex-1 relative px-10 py-16 flex flex-col justify-center shadow-xl hover:scale-110 duration-500 text-white">
            <h4 className="font-bold text-lg">{item.header}</h4>
            <p className="mt-2 text-white z-0">{item.description}</p>
            <div className="absolute text-gray-400 -top-10 right-16 text-[170px] font-bold -z-10">{i+1}</div>
          </div>
          )
            )
            
          }

          
          
        

        </div>

        </Wrapper>
        </section>
  )
}

export default CoreTrack