import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const CoffeeDetails = () => {
    return (
        <div className="grid mt-24 grid-cols md:grid-cols-4 gap-5 bg-[#ECEAE3] p-10 rounded-lg">
            <div data-aos="fade-right">
                <img className='rounded-full' src="https://i.ibb.co/F37tzkn/1.jpg" alt="" />
                <h1 className="text-[30px] text-[#331A15] font-rancho">Awesome Aroma</h1>
                <p className="font-ralway">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div data-aos="fade-left">
                <img className='rounded-full' src="https://i.ibb.co/30FBZw2/2-1.jpg" alt="" />
                <h1 className="text-[30px] text-[#331A15] font-rancho">High Quality</h1>
                <p className="font-ralway">We served the coffee to you maintaining the best quality</p>
            </div>
            <div data-aos="fade-right">
                <img className='rounded-full' src="https://i.ibb.co/j58JXzr/4.jpg" alt="" />
                <h1 className="text-[30px] text-[#331A15] font-rancho">Pure Grades</h1>
                <p className="font-ralway">The coffee is made of the green coffee beans which you will love </p>
            </div>
            <div data-aos="fade-left">
                <img className='rounded-full' src="https://i.ibb.co/FDZsnKK/3.jpg" alt="" />
                <h1 className="text-[30px] text-[#331A15] font-rancho">Proper Roasting</h1>
                <p className="font-ralway">Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default CoffeeDetails;