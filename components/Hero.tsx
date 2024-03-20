"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { heroBo, heroBoSw, heroMain, test } from "@/public";
import Image from "next/image";

const Hero = ({}) => {
  const imgSliders = [
    {
      id: 0,
      imgSrc: test,
    },
    {
      id: 1,
      imgSrc: test,
    },
    {
      id: 2,
      imgSrc: test,
    },
    {
      id: 3,
      imgSrc: test,
    },
    {
      id: 4,
      imgSrc: test,
    },
  ];
  return (
    <div id="home" className="relative ">
      <div className="absolute top-0 w-full ">
        <Image src={heroMain} alt="hero image" className="w-full h-full" />
      </div>

      {/* Text Section */}
      <section className="container flex flex-col items-center justify-center  pt-12 mb-12">
        <h1 className=" text-3xl lg:text-5xl font-bold max-w-[400px] text-blue-700">
          Daraak
        </h1>
        <p className="my-4 max-w-6xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          repellendus reprehenderit adipisci maiores perspiciatis asperiores
          dolores dignissimos, magni earum atque nulla, animi quam quas odit
          omnis itaque nam saepe. Praesentium. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Ab, recusandae. Eius temporibus saepe
          iusto doloribus et soluta distinctio laborum, accusamus consectetur
          inventore cupiditate aliquid, numquam, maiores quisquam animi delectus
          molestias!
        </p>
      </section>
      {/* Swiper Section */}
      <section className="my-12 relative container">
        <div className="absolute right-0 -z-20">
          <Image src={heroBo} alt="hero image" />
        </div>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}>
          {imgSliders.map((item) => (
            <SwiperSlide key={item.id} className="my-14">
              <Image src={item.imgSrc} alt="slider Image" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute -left-12 lg:left-0 top-[100px] lg:top-[250px]">
          <Image src={heroBoSw} alt="hero image" className="" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
