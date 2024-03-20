import { heroMain, logo, watermark } from "@/public"
import Image from "next/image"

const WaterMark = ({}) => {
  return (
    <section className=" relative flex py-2  flex-col items-center ">
      <div className="absolute h-full w-full rotate-180 -z-40">
        <Image src={heroMain} alt="hero image" className="w-full " />
      </div>
      <div className="absolute left-0 top-8 lg:top-16 -z-10 ">
        <Image src={watermark} alt="hero image" className="w-full " />
      </div>
      <div className="flex mt-28 md:mt-36 items-center gap-x-5 lg:gap-x-12">
        <Image src={logo} className="w-[4.375rem] h-[4.375rem]" alt="logo" />{" "}
        <h1 className=" text-3xl lg:text-5xl font-bold max-w-[400px] text-blue-700">
          Daraak
        </h1>
      </div>

      <p className="container text-center text-[#2F2E2D] font-semibold text-lg py-5">
        copyright &copy; 2019 Daraak By Asetins IT serves . All rights received{" "}
      </p>
      <p className="text-[#2F2E2D] gap-y-1 font-semibold text-2xl ">
        Designed by <span></span> <br />
        Developed by <span>Omar Dugha</span>
      </p>
    </section>
  )
}

export default WaterMark
