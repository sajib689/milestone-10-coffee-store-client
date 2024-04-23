import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
  const {user,logout} = useContext(AuthContext)
  const userOut = () =>{
    logout()
    .then( () => {

    })
    .catch(err => {
      console.log(err)
    })
  }
  const links = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      {
        user?
        <>
        <li>
        <Link to='/add'>Add Coffee</Link>
      </li>
      <li>
        <Link to='/coffeelist'>Coffee List</Link>
      </li>
        </>
        :
        ''
      }
      <li>
        <Link to='/'>Contact Us</Link>
      </li>
      <li>
        <Link to='/'>About Us</Link>
      </li>

    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-rancho">Sajib Coffee</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {
          user?
          <>
          {user?.displayName}
          <Link onClick={userOut} className="btn">Sign Out</Link>
          </>
          :
          
          <>
          <Link to='/login' className="btn">Login</Link>
          
          
          </>
        }
        
       {
        user ?
        <Link className="btn rounded ms-2"  to='/carts'><BsCart4 className="text-[25px]" /></Link>
        :
        ''
       }
      </div>
    </div>
  );
};

export default Navbar;
