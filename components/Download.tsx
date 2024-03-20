import { apple, footer, footerHand, google } from "@/public"
import Image from "next/image"
import { FC } from "react"

interface DownloadProps {}

const Download: FC<DownloadProps> = ({}) => {
  return (
    <footer className="relative">
      <div className="absolute h-[22rem] w-full bg-gradient-to-t from-[#2654DE] to-[#315CDE] -z-10">
        <Image src={footer} alt="footer " className="w-full " />
      </div>
      <div className="flex relative  justify-between">
        <div className="lg:ms-32 lg:mt-10 ms-7 md:ms-12 mt-8">
          <h4 className="text-white text-4xl lg:text-6xl font-bold ">
            Download our <br /> Application Now
          </h4>
          <div className="flex mt-12 flex-col md:flex-row gap-y-4 gap-x-6">
            <Image src={google} alt="Download" />
            <Image src={apple} alt="Download" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Download
