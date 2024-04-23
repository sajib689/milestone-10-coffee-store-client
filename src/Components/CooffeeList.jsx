import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeListCard from "./CoffeeListCard";
import Swal from "sweetalert2";

const CooffeeList = () => {
  const all = useLoaderData();
  const [coffees, setCoffees] = useState(all);
  const handleDelete = _id => {
    fetch(`http://localhost:3000/coffees/${_id}`,{
        method: 'DELETE',
    })
    .then( res => res.json() )
    .then( data => {
       if(data){
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Delete Success!",
            showConfirmButton: false,
            timer: 1500
          });
       }
       setCoffees((prevCoffees) => prevCoffees.filter((coffee) => coffee._id !== _id));
    })
  }
  return (
    <div className="flex mx-auto flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <h2 className="text-xl font-semibold">Your Products</h2>
      <ul className="flex flex-col divide-y dark:divide-gray-300">
        {coffees.map((coffee) => (
          <CoffeeListCard key={coffee._id} coffee={coffee} handleDelete={handleDelete}></CoffeeListCard>
        ))}
      </ul>

      <div className="flex justify-end space-x-4">
        <Link
          to="/"
          className="px-6 py-2 border rounded-md dark:border-violet-600"
        >
          Back
          <span className="sr-only sm:not-sr-only">to shop</span>
        </Link>
        <button
          type="button"
          className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600"
        >
          <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
        </button>
      </div>
    </div>
  );
};

export default CooffeeList;
