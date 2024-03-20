import { about } from "@/public";
import Image from "next/image";

const About = ({}) => {
  return (
    <section
      id="about"
      className=" flex gap-x-20 flex-col lg:flex-row items-start lg:my-44 container justify-between">
      <div className="">
        <h2 className="text-2xl font-bold md:text-4xl lg:text-right my-4">
          About Us
        </h2>
        <p className="text-left mt-4 lg:mt-8 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          itaque laudantium quibusdam accusamus nostrum? Corporis eos
          reiciendis, veritatis ea eum ducimus, aperiam dolor tenetur dolore
          doloribus similique sint! Dolorem, repellendus. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore, unde quisquam officia
          qui ipsam sunt doloribus architecto harum cupiditate deleniti quae
          error, quam labore ex. Doloribus velit dolores tenetur hic! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolor quia
          Dolorem, repellendus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Inventore, unde quisquam officia qui ipsam sunt
          doloribus architecto harum cupiditate deleniti quae error, quam labore
          ex. Doloribus velit dolores tenetur hic! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorem dolor quia quos et cumque, ipsum
          quae! Esse consequatur accusamus animi quis eius quas, voluptate sed
          quasi fuga quos deserunt error?
        </p>
      </div>

      <Image src={about} alt="test image" />
    </section>
  );
};

export default About;
