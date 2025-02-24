import HeroImg from '../Assests/hero.png';
import { BsLinkedin,BsFacebook,BsInstagram } from "react-icons/bs";
export default function Hero(){
  const config = {
    subtitle:'Im a full-stack Developer',
    social:{
      linkedin:'https://www.linkedin.com/in/manoharan-dharnishan/',
      instagram:'https://www.instagram.com/dharnish_0410?igsh=MXExMmM1NnZhcjNxNQ%3D%3D&utm_source=qr',
      facebook:''
    }
  }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
    <div className=' md:w-1/2 flex flex-col'>
      <h1 className='text-black text-4xl font-hero-font'>
        Hi,<br></br>Im Dharnishan
        <p className='text-2xl'>{config.subtitle}</p>
      </h1>
      <div className='flex py-10'>
        <a className='pr-5 hover:text-white' href={config.social.linkedin}><BsLinkedin size={25}/></a>
        <a className='pr-5 hover:text-white' href={config.social.facebook}><BsFacebook size={25}/></a>
        <a className='hover:text-white' href={config.social.instagram}><BsInstagram size={25}/></a>
      </div>
    </div>

    <div className='w-1/3 flex justify-end'>
      <img className=' md:w-full' src={HeroImg} alt="Dharnishan" />
    </div>
  </section>
}