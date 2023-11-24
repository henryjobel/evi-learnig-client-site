import { motion } from 'framer-motion';
import { FaFacebook, FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import learningImg from '../../assets/Book-Club-8-480p-4fa264dd-e035-unscreen.gif'

const Register = () => {
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
    
      const text = 'Get One Free Month of EvoLearn Get More For New Registers';

    return (
        <div className='bg-slate-800 text-white pb-20' data-aos="zoom-in">
            <motion.div
      variants={allTextare}
      initial='initial'
      animate='animate'
      className='text-center pt-14 pb-10'
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
  <div className="hero-content flex-col lg:flex-row-reverse gap-12">
    <div className="text-center lg:text-left" data-aos="zoom-out-down">
      
      <img className='w-[700px]'  src={learningImg} alt="" />
      <h1 className='text-3xl font-semibold'><span className='text-blue-500'>Unlocking Possibilities:</span> Registering on Our Website for an Enhanced Learning Experience</h1>
      <p className='pt-3 font-sans'>In the fast-paced world of online learning, where knowledge knows no boundaries, our website stands as a beacon, offering a diverse range of courses to help you acquire new skills and broaden your horizons. To embark on this educational journey, the first step is to register on our user-friendly platform. In this article, we will guide you through the simple process of creating an account, unlocking a world of opportunities for personal and professional growth.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <div className="divider divider-secondary text-black font-bold">Register Now</div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input type="text" placeholder="photoUrl" className="input input-bordered" required />
        </div>
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
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div className="divider divider-accent text-black">Or</div>
        <div className="form-control mt-6">
          <button className="btn btn-outline"><FcGoogle className='text-3xl'></FcGoogle> Continue with Google</button>
        </div>
      <div className="form-control">
          <button className="btn btn-outline bg-blue-500 text-white"><FaFacebook className='text-3xl'></FaFacebook> Continue with Google</button>
        </div>
      <div className="form-control">
          <button className="btn btn-outline bg-gray-700 text-white"><FaGithub className='text-3xl'></FaGithub> Continue with GitHub</button>
        </div>
        <div>
            <p className='text-black'>Do you have an account Please <span className='text-blue-700 font-bold'> <Link to='/login'>Login here</Link></span> </p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;