import React, { useEffect, useState } from 'react'
import AboutBtn from './hero-micro-components/AboutBtn'
import { skills } from '../utils/skillsArray.json'
import { profileArray } from '../assets/profileArray';

function Hero() {

    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     console.log(currentIndex % 5);
    // }, [currentIndex])

    useEffect(() => {
        const interval = setInterval(() => {
            // Avanzar al siguiente logo
            setCurrentIndex((prevIndex) =>
                prevIndex === skills.length - 1 ? 0 : prevIndex + 1
            )
        }, 2000); // Cambia cada 2 segundos (ajusta el valor según tus necesidades)

        return () => {
            clearInterval(interval);
        };
    }, []);
    const duplicatedLogos = [...skills, ...skills, ...skills]

    return (
        <section className="hero min-h-screen items-start md:items-center overflow-hidden" >
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


            <div className="rounded-[40px] bg-indigo-600 bg-opacity-50 backdrop-blur-sm glass rotate-2 hover:-rotate-3 transition-transform duration-1000 shadow-2xl p-5 mt-20 sm:mt-8">
                <div className="hero-content flex-col md:flex-row text-center text-indigo-100">
                    <div className="avatar">
                        <div className="max-w-xs w-36 sm:max-w-none sm:w-72 mask mask-squircle transition-opacity duration-1000">
                            <img
                                src={profileArray[currentIndex % 6]}
                                className={`opacity-${100 - currentIndex * (100 / skills.length)}`}
                            />
                        </div>
                    </div>
                    <div className="max-w-md">
                        <h1 className="mb-1 md:mb-5 text-3xl md:text-5xl font-bold border-b-2 border-[#641AE6]">¡Hola!, soy Nahuel.</h1>

                        <p className="mb-2 md:mb-5 text-sm md:text-lg">
                            Desarrollador fullstack MERN y otras yerbas, Hombre de familia, Estudiante de la vida, Músico & Productor, Guardia de Seguridad, Delivery, Mister Simpatía, Gamer noob semi manco, Tomador de mate serial en rehabilitación por problemas de acidez, Team player, pero por sobre todas las cosas, buena persona.
                        </p>

                        <AboutBtn />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero