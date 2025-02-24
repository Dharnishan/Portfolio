import ResumeImg from '../Assests/resume.jpg';
export default function Contact(){
    const config = {
        email : 'dharnishan@gmail.com',
        phone : '+94 740331730'
    }
    return <section id='contact'className='flex flex-col  bg-secondary px-5 py-32'>
        <div className=' flex flex-col items-center'>
           
            <b><h1 className='text-4xl text-black border-black border-b-4 mb-4 w-[135px]'>Contact</h1></b>
            <p className='text-black'>If you wants discuss more in detail, please contact me. </p>
            <p className='py-2'><span className='font-bold'>Email:</span>{config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone:</span>{config.phone}</p>
            
            
            
        </div>
    </section>
}