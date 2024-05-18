import Link from "next/link"
import { MaxWidthWrapper } from "./MaxWidthWrapper"

export const Navbar = () => {
    return( 
        <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/7 backdrop-blur-lg transition-all'>
        <MaxWidthWrapper>
          <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
            <Link href='/' className='flex z-40 font-semibold'>
            <img src='https://d312wdvz7m5f2r.cloudfront.net/website_assets/logo.png' width={100}></img>
            </Link>
            <div className="h-full flex items-center space-x-4"> 

                <Link href="/">Home</Link>
                <Link href="/courses">Courses</Link>
                
            </div>
            </div>
        </MaxWidthWrapper>
    </nav>
    )
}

