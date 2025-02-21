import DharnishImg from '../Assests/dharnish.jpg';
export default function About(){
    const config ={
        line1:'Fast learner with strong problem-solving skills and a collaborative mindset,committed to delivering high-quality work efficiently.',
        line2:'I am passionate about staying up-to-date with technological advancements and eager to bring my classroom learning and self-driven research into a real-world setting.',
        line3:'Ready to contribute positively to your team, I aim to gain practical experience and make a meaningful impact throughout my internship. '
    }
    return <section className='flex flec-col md:flex-row flex bg-primary px-5 'id='about'>
        <div className='md:w-1/3'>
            <img src={DharnishImg}></img>
        </div>
        <div className='px-20 w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
                <b><h1 className='text-4xl text-white border-b-4 mb-4 w-[170px]'>About Me</h1></b>
                <p className='text-white'>{config.line1} </p><br></br>
                <p className='text-white'>{config.line2}</p><br></br>  
                <p className='text-white'>{config.line3}</p><br></br>
            </div>
            
        </div>
    </section>
}