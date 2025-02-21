import DharnishImg from '../Assests/dharnish.jpg';
export default function About(){
    return <section className='flex flec-col md:flex-row flex bg-primary px-5'>
        <div className='md:w-1/3'>
            <img src={DharnishImg}></img>
        </div>
        <div className='px-20 w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
                <b><h1 className='text-4xl text-white border-b-4 mb-4 w-[170px]'>About Me</h1></b>
                <p className='text-white'> Fast learner with strong problem-solving skills and a collaborative mindset,
                committed to delivering high-quality work efficiently. I am passionate about
                staying up-to-date with technological advancements and eager to bring my
                classroom learning and self-driven research into a real-world setting. Ready
                to contribute positively to your team, I aim to gain practical experience and
                make a meaningful impact throughout my internship.</p>
            </div>
            
        </div>
    </section>
}