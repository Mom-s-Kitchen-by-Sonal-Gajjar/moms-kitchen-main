import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Button } from "@/components/button";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import { ChefImage } from "@/components/chef";
import { ThreeDCardDemo } from "@/components/3-d-card";
import { CourseCard } from "@/components/CourseCard";
import { Badge } from "@/components/ui/badge";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <section className="bg-burgendy">
        <MaxWidthWrapper className="lg:grid lg:grid-cols-3 lg:gap-x-0 xl:gap-x-12 py-24 lg:py-0 lg:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className={montserrat.className}>
                <h1
                  className={
                    "relative w-fit tracking-tight text-balance font-bold !leading-tight text-white text-5xl md:text-6xl lg:text-7xl"
                  }
                >
                  Become a Master Chef with Our Culinary Courses
                </h1>
              </div>
              <div className={montserrat.className}>
                <p className="mt-2 text-lg lg:pr-10 max-w-prose text-center text-white font-light lg:text-left">
                  Unlock your passion for cooking and take your skills to the
                  next level. Our comprehensive culinary courses cover
                  everything from classic techniques to modern cuisine.
                </p>
              </div>
              <div className="flex space-x-4 mt-4">
                <button className="px-4 py-2 rounded-xl border cursor-pointer border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                  Enroll Now
                </button>

                <button className="px-4 py-2 rounded-xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                  Learn
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center lg:justify-end mt-10 lg:mt-0 hidden lg:block">
            <ChefImage
              className="w-full max-w-xs h-auto"
              imgSrc="https://d312wdvz7m5f2r.cloudfront.net/website_assets/pngwing.com.png"
            />
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-12 py-24 lg:py-0">
          <div>
            <div className="col-span px-6 lg:px-0 ">
              <div className="relative text-center lg:text-left flex flex-col items-center my-10 lg:items-start">
                <div className={montserrat.className}>
                  <h1
                    className={
                      "relative w-fit tracking-tight text-balance font-bold !leading-tight text-black text-5xl md:text-6xl lg:text-5xl"
                    }
                  >
                    Explore Our Courses
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <CourseCard/>
              </div>
              
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
