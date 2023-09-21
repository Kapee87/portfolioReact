import React, { useEffect, useState } from 'react'
import miPic from '../assets/perfilLinkedin.jpg'
import AboutBtn from './hero-micro-components/AboutBtn'
import { skills } from '../utils/skillsArray.json'

function Hero() {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Avanzar al siguiente logo
            setCurrentIndex((prevIndex) =>
                prevIndex === skills.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000); // Cambia cada 2 segundos (ajusta el valor según tus necesidades)

        return () => {
            clearInterval(interval);
        };
    }, []);
    const duplicatedLogos = [...skills, ...skills, ...skills]

    return (
        <div className="hero min-h-screen bg-hero-background items-start md:items-center" >
            <div className="hero-overlay bg-opacity-60 h-screen w-screen  bg-black">
                {/* {
                    skills.map((skill) => (
                        <img src={skill.url} alt={skill.name} className='animate-logo inline-block m-5' />
                    ))
                } */}

                <div className="flex items-center h-screen overflow-hidden flex-col justify-end md:justify-between py-5">
                    {/* Renderiza los logos */}
                    <div
                        className="hidden md:flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(+${currentIndex * (30 / skills.length)}%)`,
                            width: `${duplicatedLogos.length * (100 / skills.length)}%`,
                        }}
                    >
                        {duplicatedLogos.map((skill, index) => (
                            <img
                                key={(Math.random() * index).toString(36).substring(2, 10)}
                                src={skill.url}
                                alt={skill.name}
                                className="mx-2 w-full"
                            />
                        ))}
                    </div>
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / skills.length)}%)`,
                            width: `${duplicatedLogos.length * (100 / skills.length)}%`,
                        }}
                    >
                        {duplicatedLogos.map((skill, index) => (
                            <img
                                key={(Math.random() * index).toString(36).substring(2, 10)}
                                src={skill.url}
                                alt={skill.name}
                                className="mx-2 w-full"
                            />
                        ))}
                    </div>
                </div>

            </div>
            <div className="rounded-[40px] bg-indigo-600 bg-opacity-50 backdrop-blur-sm glass rotate-2 hover:-rotate-3 transition-transform duration-1000 shadow-2xl">
                <div className="hero-content flex-col md:flex-row text-center text-indigo-100">
                    <div className="avatar">
                        <div className="max-w-xs w-44 sm:max-w-none sm:w-72 mask mask-squircle">
                            <img src={miPic} />
                        </div>
                    </div>
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hola!, soy Nahuel</h1>
                        <p className='border-b-2'>Desarrollador web Fullstack MERN</p>
                        <p className="mb-5">
                            Amante de la vida, y de muchísimas cosas, entre las que enumero: familia, música, fútbol, tecnología(hoy en día no nos podemos limitar a las computadoras), cerveza, y mucho más
                        </p>

                        <AboutBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero