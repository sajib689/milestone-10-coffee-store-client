import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Title = () => {
  return (
    <div data-aos="fade-right" className="text-center mt-24">
      <h1 className="text-[50px] text-[#331A15] font-bold font-rancho">
        Our Popular Products
      </h1>
      <div>
        <p className="font-ralway">
          A globally cherished beverage, brewed from roasted <br /> coffee beans. Known
          for its rich flavors and <br /> energizing effects.
        </p>
        {/* <Link className="btn bg-[#E3B577] hover:bg-[#ffcc88] text-white font-rancho text-[18px]">
          Add Coffee
        </Link> */}
      </div>
    </div>
  );
};

export default Title;
