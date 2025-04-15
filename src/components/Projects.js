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
    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-secondary text-black">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl text-black border-b-4 border-black mb-4 w-[135px] font-bold">Projects</h1>
                    <p className='text-black text-lg'>These are my projects, I have built these with python, java, Angular and Springboot. Check them out</p>
                </div>
            </div>
            <div className="w-full">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10'>
                    {config.projects.map((project, index) => ( 
                        <div key={index} className='relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'>
                            <img 
                                className='h-[250px] w-full object-cover transition-transform duration-300 group-hover:scale-110' 
                                src={project.image} 
                                alt={`Project ${index + 1}`}
                            />
                            <div className='absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4'>
                                <p className='text-white text-center text-sm md:text-base mb-4'>{project.description}</p>
                                <a 
                                    className='bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300' 
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                    href={project.link}
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}