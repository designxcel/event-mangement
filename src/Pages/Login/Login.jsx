import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    
    signIn(email, password)
    .then(result =>{
      console.log("successfully logged in")

      navigate(location?.state? location.state : "/")
    })
    .catch(error =>{
      console.error(error)
    })
  }
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="hero">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-slate-500">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-t from-cyan-500 to-blue-500">
              <form onSubmit={handleLogin} className="card-body w-96">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
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
                    name="password"
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
