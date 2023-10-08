import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const Login = () => {
  const {user, logOut} = useContext(AuthContext)
  const [userName, setUserName] = useState(null);
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogOut = () =>{
    logOut()
    .then(result =>{
      console.log("logged out")
    })
    .catch(error =>{
      console.error(error)
    })
}

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const confirmedUser = result.user;
        setUserName(confirmedUser);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((result) => {
        swal(
          "Congratulations!",
          "You have successfully registered! Now You can visit our webpage",
          "success"
        );

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        swal("Oops!", "Wrong email/password!", "error");
      });
  };

  return (
    <div>
      <div className="navbar p-8 sticky top-2">
        <div className="navbar-start">
          <Link to="/"  className="text-cyan-600 hover:text-blue-800 font-bold normal-case text-2xl">
              Tech Robot
          </Link>
          
        </div>
        <div className="navbar-end">
        
          {
            userName && <h2 className="text-xl font-semibold text-blue-600 mr-4">{userName?.displayName}</h2>
          }


          {
              user ?
              <button onClick={handleLogOut} className="btn btn-white">LogOut</button>
              :
              <Link>
              <button className="btn btn-white">Login</button>
            </Link>
           }
        </div>
      </div>
      <div>
        
        <div className="hero">
          <div className="hero-content flex-col ">
            <strong className="text-blue-600">
              To see everything in details you need to Login first!
            </strong>
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
                <p>
                  Do not have any account?{" "}
                  <span className="font-semibold text-slate-300">
                    <Link to="/register">Register</Link>
                  </span>
                </p>
              </div>

              <div className="text-center card-body">
                <hr />
                <p className="text-white">
                  -----------<span>OR</span>-----------
                </p>
                {/* <div className="flex justify-center gap-4 items-center  bg-white rounded-xl py-2">
                    <FaGoogle></FaGoogle>
                    <h2 onClick={handlGoogle}>Sign in with Google</h2>
                </div> */}
                <button onClick={handleGoogleLogin} className="btn btn-primary">
                  Google signin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
