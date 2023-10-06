import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

import { FaGoogle } from 'react-icons/fa';
import loginBg from '../../assets/endless.svg'

const Login = () => {
  return (
    <div style={{backgroundImage: `url(${loginBg})`}}>
      <div>
      <div className="navbar p-8 sticky top-2">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        
      </div>
      <Link to="/">
        <h2 className="text-white normal-case text-xl">Tech Robot</h2>
      </Link>
      
    </div>
    <div className="navbar-center hidden lg:flex">
      
    </div>
    <div className="navbar-end">
      <Link>
        <button className="btn">Button</button>  
    </Link>
    </div>
  </div>
      </div>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-white">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-t from-cyan-500 to-blue-500">
              <form className="card-body w-96">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="text-center">
                <p>Do not have any account? <span className="font-semibold text-slate-300">
                        <Link to="/register">Register</Link>
                    </span></p>
              </div>
              
              <div className="text-center card-body">
              <hr />
                <p className="text-white">-----------<span>OR</span>-----------</p>
                <div className="flex justify-center gap-4 items-center  bg-white rounded-xl py-2">
                    <FaGoogle></FaGoogle>
                    <h2>Sign in with Google</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
