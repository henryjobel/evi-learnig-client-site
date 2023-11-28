import { motion } from 'framer-motion';
import { ImSpinner9 } from "react-icons/im";


import { Link, useNavigate } from 'react-router-dom';
import learningImg from '../../assets/Book-Club-8-480p-4fa264dd-e035-unscreen.gif'

import SocialLogin from '../Shared/SocialLogin.jsx/SocialLogin';

import { imageUpload } from '../../api/utils';
import useAuth from '../../Hoocks/useAuth';
import { getToken, saveUsers } from '../../api/auth';
import toast from 'react-hot-toast';
import NavBar from '../Shared/NavBar/NavBar';



const Register = () => {
  const { createUser, updateUserProfile, loading } = useAuth()
  const navigate = useNavigate()
  const handleRegister = async event => {

    event.preventDefault()

    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const image = form.image.files[0]

    try {
      const imageData = await imageUpload(image)
      console.log(imageData)

      const res = await createUser(email, password)

      await updateUserProfile(name, imageData?.data?.display_url)

      // todo save data in database
      const dbRes = await saveUsers(res?.user)
      console.log(dbRes)

      // todo get token from jwt 

      await getToken(res?.user?.email)
      navigate('/')
      toast.success('Sing Up Successfully')

    } catch (error) {
      console.log(error)
      toast.error(error?.message)
    }
    console.log(name, email, password)
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

  const text = 'Get One Free Month of EvoLearn Get More For New Registers';

  return (
    <div>
      <NavBar></NavBar>
      <div className='pt-40 pb-20 text-white bg-slate-800' data-aos="zoom-in">
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
          <div className="flex-col gap-12 hero-content lg:flex-row-reverse">
            <div className="text-center lg:text-left" data-aos="zoom-out-down">

              <img className='w-[700px]' src={learningImg} alt="" />
              <h1 className='text-3xl font-semibold'><span className='text-blue-500'>Unlocking Possibilities:</span> Registering on Our Website for an Enhanced Learning Experience</h1>
              <p className='pt-3 font-sans'>In the fast-paced world of online learning, where knowledge knows no boundaries, our website stands as a beacon, offering a diverse range of courses to help you acquire new skills and broaden your horizons. To embark on this educational journey, the first step is to register on our user-friendly platform. In this article, we will guide you through the simple process of creating an account, unlocking a world of opportunities for personal and professional growth.</p>
            </div>
            <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
              <form onSubmit={handleRegister} className="card-body" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <div className="font-bold text-black divider divider-secondary">Register Now</div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="Name" name='name' className="text-black input input-bordered" required />
                </div>
                <div className="form-control">
                  <label htmlFor='image' className='block mb-2 text-sm text-black'>
                    Select Image:
                  </label>
                  <input
                    required
                    id='image'
                    name='image'
                    accept='image/*'
                    type="file"
                    className="file-input file-input-bordered file-input-primary w-full max-w-xs text-black" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" name='email' className="text-black input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" name='password' className="text-black input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>

                <div className="mt-6 form-control">
                  <button className="btn btn-primary" type='submit'>{loading ? <ImSpinner9 className='animate-spin m-auto'></ImSpinner9> : 'Register'}</button>
                </div>
                <div className="text-black divider divider-accent">Or</div>
                <SocialLogin></SocialLogin>
                <div>
                  <p className='text-black'>Do you have an account Please <span className='font-bold text-blue-700'> <Link to='/login'>Login here</Link></span> </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;