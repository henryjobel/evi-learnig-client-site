import learnigImg from '../../assets/image-processing20210831-9058--unscreen.gif';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='bg-slate-800 text-white' data-aos="zoom-in">
            <div  className='text-center pt-14'>
                <h1 className='text-5xl font-bold'>Get <span className='text-blue-500
                '>One Free Month</span> of EvoLearn </h1>
                <p className='text-2xl'>Explore thousends of hands-on classes with one inspirng membership.</p>
                <h1 className="text-5xl font-bold pt-16 pb-10">Login Now</h1>
            </div>
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left" data-aos="zoom-out-down">
      
      <img className='w-[700px]'  src={learnigImg} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
      <div className="form-control mt-6">
          <button className="btn btn-outline"><FcGoogle className='text-3xl'></FcGoogle> Continue with Google</button>
        </div>
      <div className="form-control">
          <button className="btn btn-outline bg-blue-500 text-white"><FaFacebook className='text-3xl'></FaFacebook> Continue with Google</button>
        </div>
      <div className="form-control">
          <button className="btn btn-outline bg-gray-700 text-white"><FaGithub className='text-3xl'></FaGithub> Continue with GitHub</button>
        </div>
        <div className="divider divider-accent">Or</div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div>
            <p className='text-black'>You dont have an account Please <span className='text-blue-700 font-bold'> <Link to='/register'>Register</Link></span> </p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;