const Heading = ({ title, subtitle, center }) => {
    return (
      <div data-aos="fade-right" className={center ? 'text-center' : 'text-start'}>
        <div className='text-2xl font-bold text-white'>{title}</div>
        <div className='font-light text-white mt-2'>{subtitle}</div>
      </div>
    )
  }
  
  export default Heading
  