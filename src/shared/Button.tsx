import { FC } from "react"


const Button:FC<{text:string}> = ({text}) => {
  return (
   <button className="bg-lime-600 text-white px-7 py-3 rounded-full shadow-lg text-xl font-medium hover:scale-110 duration-300"
   >{text}</button>
  )
}

export default Button