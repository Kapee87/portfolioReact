import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import sectionArray from '../utils/sectionArray'


function Layout() {
    const [currentSection, setCurrentSection] = useState(1)
    const location = useLocation();
    const navigate = useNavigate();

    // Actualiza el estado de la sección actual cuando cambia la ubicación
    useEffect(() => {
        const currentSectionItem = sectionArray.find(section => section.route == location.pathname);
        setCurrentSection(currentSectionItem.id);
    }, [location.pathname, setCurrentSection]);
    useEffect(() => {
        console.log(currentSection, sectionArray.length);
    }, [currentSection])
    const handleNextSection = () => {
        // console.log(currentSection);
        // console.log(sectionArray[currentSection]);
        // navigate(sectionArray[currentSection].route)

        // Verifica si estás en la última sección
        if (currentSection == sectionArray.length) {
            // Si es la última sección, vuelve al principio
            navigate(sectionArray[0].route);
            setCurrentSection(1)
        } else {
            // De lo contrario, avanza a la siguiente sección
            navigate(sectionArray[currentSection].route);
        }
    }
    const handlePrevSection = () => {
        console.log(sectionArray[currentSection - 1]);
        // navigate(sectionArray[currentSection].route)

        // Verifica si estás en la última sección
        if (currentSection == 1) {
            // Si es la última sección, vuelve al principio
            navigate(sectionArray[sectionArray.length - 1].route);
        } else {
            // De lo contrario, avanza a la siguiente sección
            navigate(sectionArray[currentSection - 2].route);
        }
    }

    return (
        <>
            <Navbar />
            <main className="w-full min-h-screen bg-hero-background bg-fixed h-fit ">
                <div className="hero-overlay bg-opacity-40 bg-black h-fit pb-20">
                    <Outlet />
                </div>

            </main>
            <Footer />
            <div className="fixed flex justify-between transform -translate-y-1/2 left-5 right-5 top-[20vh]">
                <button onClick={handlePrevSection} className="btn btn-circle rotate-90">❮</button>
                <button onClick={handleNextSection} className="btn btn-circle rotate-90">❯</button>
            </div>
        </>
    )
}

export default Layout