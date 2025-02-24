import ResumeImg from '../Assests/resume.jpg';
export default function Resume(){
    const config = {
        link: 'src\files\Dharnishan Manoharan.pdf'
    }
    return <section id='resume' className='flex flec-col md:flex-row flex bg-primary px-5'>
        <div className='py-5 md:w-1/2 flex justify-end'>
            <img className='w-[500px]' src={ResumeImg}></img>
        </div>
        <div className='px-20 w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
                <b><h1 className='text-4xl text-white border-b-4 mb-4 w-[135px]'>Resume</h1></b>
                <p className='text-white'>You can view my resume <a className='btn' href={config.link} download="Dharnishan Manoharan.pdf">Download</a> </p>
            </div>
            
        </div>
    </section>
}