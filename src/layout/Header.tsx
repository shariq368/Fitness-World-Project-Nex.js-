import Link from "next/link"



import Wrapper from "@/shared/Wrapper"
const Header = () => {
  return (
    <Wrapper>
    <header className="flex justify-between py-6 sticky top-0  items-center ">
        {/* logo */}
        <div>
       
        <h2 className="text-xl font-black text-lime-400 hover:scale-125" >FITNESS WORLD</h2>

        </div>
        {/* Navigation bar */}
        <ul className="flex space-x-6 font-medium text-white items-center  ">
            <li className="hover:text-lime-500">
                <Link href={'/'}>
                Home
                </Link>
                </li>
                <li className="hover:text-lime-500">
                <Link href={'/blog'}>
                Blog
                </Link>
                </li>
                <li className="hover:text-lime-500">
                <Link href={'/about us'}>
                About us
                </Link>
                </li>
                <li className="hover:text-lime-500">
                <Link href={'/contact us'}>
                Contact us
                </Link>
                </li>
                <div className="flex text-white rounded-full bg-lime-500 px-3 py-1 hover:scale-105 ">
                  <button>Sign in </button>
                </div>
                <div className="flex text-white rounded-full  bg-lime-500 px-3 py-1 hover:scale-105">
                  <button>Sign up </button>
                </div>
                
              

                
        </ul>
      




    </header>
    </Wrapper>
  )
}

export default Header