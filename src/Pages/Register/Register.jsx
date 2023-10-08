import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import Navbar from "../../Shared/Navbar/Navbar";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [success,setSuccess] = useState('')
    const [error, setError] = useState('')
    const [viewPassword, setViewPassword] = useState(false)

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');


        if(password.length < 6){
            swal("warning!", "Password should be at least 6 characters", "error");
            return;
        }
        else if(!/[A-Z]/.test(password)){
            swal("Oops!", "Password should have at least one uppercase letter", "error")
            return;
        }
        else if(!/[!@#$%^&*()]/.test(password)){
            swal("Oops!", "Password should have at least one special character", "error")
            return;
        }

        setSuccess("")
        setError("")
        
        
        
        createUser(email, password)
        .then(result =>{
             
            // setSuccess("You have successfully registered!")
            swal("Good job!", "You have successfully registered!", "success")
            
        })
        .catch(error =>{
            
            swal("Oops!", "This account already in used!", "error")

        })
    }
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div className="hero">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-slate-500">Register Now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-gradient-to-t from-cyan-500 to-blue-500">
                    {
                         success && 
                            <p 
                                className="text-black-600 font-semibold text-center">
                                {success}
                            </p>
                    }
                    {
                        error &&
                        <p className="text-black-600 font-semibold text-center">
                            {error}
                        </p>
                    }
                    <form onSubmit={handleRegister} className="card-body w-96">
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
                            type={viewPassword ? "text" : "password"}
                            placeholder="password"
                            name="password"
                            className="input input-bordered relative"
                            required
                        />
                        <span className="absolute right-20 mt-[52px]" onClick={() => setViewPassword(!viewPassword)}>
                            {
                                viewPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                        
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                    
                    <div className="text-center mb-10">
                        <p>Already have an account? <span className="font-semibold text-slate-300">
                                <Link to="/login">Login</Link>
                            </span></p>
                    </div>
                    
                    
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Register;