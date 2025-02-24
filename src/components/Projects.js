import financeTracking from '../Assests/finance.png';
import ticketManagement from '../Assests/ticket_management.png';
import studentManagement from '../Assests/student-management.jpg';
export default function Projects(){
    const config = {
        projects:[
            {
                image:financeTracking,
                description:'Developed a Personal Finance Tracker in Python using Tkinter for a GUI and a command-line interface (CLI) to manage transactions, store data in JSON, and generate financial summaries.',
                link:'https://github.com/Dharnishan/Finance-Tracking-Application'
            },
            {
                image:ticketManagement,
                description:' Designed and implemented a full-stack ticket management system using Angular for the front end and Spring Boot for the back end.',
                link:'https://github.com/Dharnishan/Ticket-booking-system'
            },
            {
                image:studentManagement,
                description:'Developed a Java-based Student Management System for university staff, featuring student registration, seat management, academic tracking, and error handling, showcasing my Java programming skills',
                link:'https://github.com/Dharnishan/Student-management-system'
            }
            
        ]
    }
    return<section id='projects' className="flex flex-col py-20 px-5 justify-center bg-secondary text-black">
        <div className="w-full" >
        <div className="flex flex-col px-10 py-5">
            <h1 className="text-4xl text-black border-b-4 border-black mb-4 w-[135px] font-bold">Projects</h1>
            <p className='text-black'>These are my projects, I have built these with python, java, Angular and Springboot. Check them out</p>
        </div>
            
        </div>
        <div  className="w-full">
            <div className='flex px-10 gap-5'>
                {config.projects.map((project)=> ( 
                   
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={project.image}></img>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5 text-white'>{project.description}</p>
                        <div className='flex justify-center text-white'>
                            <a className='btn' target='_blank' href={project.link}>View Project</a>
                        </div>
                    </div>
                    
                </div>
                
                
                ))}
                
             
                
                
           
            </div>
            
        </div>
    </section>
}