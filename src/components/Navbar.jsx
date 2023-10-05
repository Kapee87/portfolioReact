import React, { useState } from 'react'
import sectionArray from '../utils/sectionArray'
import { Link } from 'react-router-dom'
import handleScrollTop from '../utils/scrollTop'

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    //Abre o cierra el menú de navegación
    const handleNavOpen = () => {
        setIsNavOpen(prev => !prev)
    }
    //scrollea al top cuando el usuario elije "inicio"


    return (
        <header className={`${isNavOpen ? 'top-2 md:top-10 [&_nav_ul]:w-fit' : '-top-14 md:-top-14'} w-full fixed transition-all duration-1000 z-50 `}>
            <nav>
                <ul
                    className={`flex mx-auto rounded-2xl md:p-4 text-slate-300 justify-center gap-1 md:gap-3 items-center
                    [&_li]:rounded-lg [&_li]:outline [&_li]:outline-indigo-700 [&_li]:outline-2 :outline-offset-2 [&_li]:shadow-2xl [&_li]:shadow-indigo-600    
                [&_li_a]:backdrop-blur-xl w-36 ${isNavOpen ? 'flex-wrap w-fit' : '[&>li>a]:hidden'}
                [&_li_a]:text-[.65rem] [&_li_a]:sm:text-sm [&_li_a]:p-1
                 `}>
                    {sectionArray.map((item) => (
                        <li key={item.id}>
                            <Link to={item.route} className="btn" onClick={handleScrollTop}>
                                {item.text}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a href="#footer" className='btn'>
                            Contacto
                        </a>
                    </li>
                    {
                        isNavOpen
                            ?
                            <li onClick={handleNavOpen}>
                                <p className='btn'>❌</p>
                            </li>
                            :
                            <li
                                className='mt-52 md:mt-60 absolute self-center bg-slate-900 rounded-2xl px-5 py-2 text-center transition-all duration-[3000] text-2xl'
                                onClick={handleNavOpen}>
                                <p className='cursor-pointer'>
                                    🔽
                                </p>
                            </li>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Navbar