
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "../../../Hoocks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa6";



const SocialLogin = () => {
    const {signInWithGoogle} = useAuth();
    const location = useLocation();
    const naviGates = useNavigate();
    const handlegoogleLogin = (socialMedia) =>{
        socialMedia()
        .then(result=>{
            console.log(result)
            naviGates(location?.state ? location.state: '/');
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="mt-6">
            <div className=" form-control">
          <button onClick={()=>handlegoogleLogin(signInWithGoogle)} className="btn btn-outline"><FcGoogle className='text-3xl'></FcGoogle> Continue with Google</button>
        </div>
      <div className="form-control">
          <button className="text-white bg-blue-500 btn btn-outline"><FaFacebook className='text-3xl'></FaFacebook> Continue with Google</button>
        </div>
      <div className="form-control">
          <button className="text-white bg-gray-700 btn btn-outline"><FaGithub className='text-3xl'></FaGithub> Continue with GitHub</button>
        </div>
        </div>
    );
};

export default SocialLogin;