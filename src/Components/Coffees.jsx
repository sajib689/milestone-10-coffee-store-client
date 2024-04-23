import { useContext, useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "./Loader";

const Coffees = () => {
  const [coffees, setCoffees] = useState([]);
  const {user, loading} = useContext(AuthContext)
  useEffect(() => {
    fetch("http://localhost:3000/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);
  if(loading) return <Loader/>
  return (
    <div className="grid mb-24 mt-24 grid-cols md:grid-cols-3 gap-5 bg-[#ECEAE3] p-10 rounded-lg">
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee._id} coffee={coffee} user={user}></CoffeeCard>
      ))}
    </div>
  );
};

export default Coffees;
