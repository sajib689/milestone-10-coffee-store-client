import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const CoffeeCard = ({ coffee,user }) => {
  const {chef,  name, img, details, price, taste,supplier } = coffee;
  const handleAddToCart = () => {
    const c = {
        name: name,
        img: img,
        details: details,
        price: price,
        chef: chef,
        taste: taste,
        supplier: supplier

    }
    fetch(`http://localhost:3000/carts`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(c)
    })
    .then( res => res.json())
    .then( data => {
     
        if(data){
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Order Success!",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  }
  return (
    <div data-aos="fade-right" className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      <img
        src={img}
        alt=""
        className="object-cover object-center  rounded-lg h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-rancho font-semibold tracking-wide">
            {name}
          </h2>
          <p className="dark:text-gray-800 font-ralway">
            {details.slice(0, 50)}...
          </p>
          <p className="dark:text-gray-800 font-bold font-rancho text-xl">
            Price: ${price}
          </p>
        </div>
        {
          user?
          <Link onClick={() => handleAddToCart()} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#E3B577] dark:text-gray-50 text-white">
          Buy Now
        </Link>
        :
        <Link to='/login' className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#E3B577] dark:text-gray-50 text-white">
          Buy Now
        </Link>
        }
        
      </div>
    </div>
  );
};

export default CoffeeCard;
