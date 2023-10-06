import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginBg from '../../assets/endless.svg'

const Register = () => {
    return (
        <div>
            <div  style={{backgroundImage: `url(${loginBg})`}}>
                <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-white">Register Now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-t from-cyan-500 to-blue-500">
                    <form className="card-body w-96">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="your name"
                            name="name"
                            className="input input-bordered"
                        
                        />
                        </div>
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
                        
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p>Already have an account? <span className="font-semibold text-slate-300">
                                <Link to="/login">Login</Link>
                            </span></p>
                    </div>
                    
                    <div className="text-center card-body">
                    <hr />
                        <p className="text-white">-----------<span>OR</span>-----------</p>
                        <div className="flex justify-center gap-4 items-center  bg-white rounded-xl py-2">
                            <FaGoogle></FaGoogle>
                            <h2>Continue with Google</h2>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Register;