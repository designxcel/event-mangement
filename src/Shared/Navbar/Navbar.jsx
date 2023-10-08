import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
      logOut()
      .then(result =>{
        console.log("logged out")
      })
      .catch(error =>{
        console.error(error)
      })
  }
    const menus = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/courses">Courses</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/login">Login/Register</NavLink></li>
    </>
  return (
    <div className="navbar p-8 sticky top-2">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52">
          {menus}
        </ul>
      </div>
      <a className="text-cyan-600 font-bold normal-case text-2xl">Tech Robot</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu bg-white rounded-lg menu-horizontal px-8 text-black">
        {menus}
      </ul>
    </div>
    <div className="navbar-end">
      {
        user ?
        <button onClick={handleLogOut} className="btn btn-white">LogOut</button>
        :
        <Link to="/login">
        <button className="btn btn-white">Login</button>
      </Link>
      }
    </div>
  </div>
  );
};

export default Navbar;
