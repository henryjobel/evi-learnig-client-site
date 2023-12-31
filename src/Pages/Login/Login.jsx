import learnigImg from '../../assets/image-processing20210831-9058--unscreen.gif';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../Hoocks/useAuth';
import toast from 'react-hot-toast';
import { getToken, saveUsers } from '../../api/auth';
import SocialLogin from '../Shared/SocialLogin.jsx/SocialLogin';
import NavBar from '../Shared/NavBar/NavBar';


const Login = () => {
  const {signIn} = useAuth()
   const location = useLocation()
    const navigate = useNavigate();
  const handleSubmit = async e =>{

    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    const from = location.state?.from?.pathname || "/";
    console.log(email,password)

    try{
      
      const res = await signIn(email,password)
      // todo save data in database
      const dbRes = await saveUsers(res?.user)
      console.log(dbRes) 
      // todo get token from jwt
      await getToken(res?.user?.email)
      navigate(from,{ replace : true})
      toast.success('Login Up Successfully')
    }catch(error){
      console.log(error)
    }




  }
    const allTextare = {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.5,
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      };
    
      const wordsAre = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };
    
      const text = 'Hey Learners Do You Want to Be Skilled Login & Stay With US';

    return (
        <div>
          <div>
            <NavBar></NavBar>
          </div>
          <div className='pt-40 pb-32 text-white bg-slate-800' data-aos="zoom-in">
          <Helmet><title>Evo Learn || Login</title></Helmet>
            <motion.div
      variants={allTextare}
      initial='initial'
      animate='animate'
      className='pb-10 text-center pt-14'
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={wordsAre} className={`text-4xl font-bold ${char === ' ' ? 'ml-1' : ''}`}>
          {char}
        </motion.span>
      ))}
      <motion.p variants={wordsAre} className='text-2xl'>
        Explore thousands of hands-on classes with one inspiring membership.
      </motion.p>
    </motion.div>
            <div className="hero">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left" data-aos="zoom-out-down">
      
      <img className='w-[700px]'  src={learnigImg} alt="" />
    </div>
    <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
      <form onSubmit={handleSubmit} className="card-body"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <div className="font-bold text-black divider divider-secondary">Login Now</div>
      <SocialLogin></SocialLogin>
        <div className="text-black divider divider-accent">Or</div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="text-black input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        
        <div className="mt-6 form-control">
          <input className='btn btn-primary' type="submit" value="Login" />
        </div>
        <div>
            <p className='text-black'>You dont have an account Please <span className='font-bold text-blue-700'> <Link to='/register'>Register</Link></span> </p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Login;