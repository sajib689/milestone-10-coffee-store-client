import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Banner = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div data-aos="fade-right" className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img
          src="https://i.ibb.co/rbBMGVV/2.jpg"
          alt="Coffee beans"
          className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        />
      </div>
      <div data-aos="fade-left" className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl font-rancho">
          Enjoy the Finest 
          <span className="dark:text-violet-600"> Sajib Coffee</span> Selections
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12">
          Experience the rich flavors and aromas of our meticulously sourced and expertly crafted coffees.
        </p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <Link
            
            className="font-rancho px-8 py-3 text-lg font-semibold rounded bg-[#E3B577] dark:text-gray-50"
          >
            Explore
          </Link>
          <Link
           
            className="font-rancho px-8 bg-[#E3B577] py-3 text-lg font-semibold border rounded dark:border-gray-800"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Banner;
