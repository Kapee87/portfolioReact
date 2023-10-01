import React, { useState } from 'react'
import sectionArray from '../utils/sectionArray'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    //Abre o cierra el menú de navegación
    const handleNavOpen = () => {
        setIsNavOpen(prev => !prev)
    }
    //scrollea al top cuando el usuario elije "inicio"
    const handleNavLink = (e) => {
        console.log(e.target.pathname);
        if (e.target.pathname == '/') {
            console.log('doing scroll');
            window.scrollTo(0, 0)
        }
    }

    return (
        <header className={`${isNavOpen ? 'top-0 md:top-10 [&_nav_ul]:w-fit' : '-top-20 md:-top-16'} w-full fixed transition-all duration-1000 z-50 `}>
            <nav>
                <ul
                    className={`flex mx-auto rounded-[40px]  md:p-4 text-slate-300 justify-center 
                 [&_li_a]:backdrop-blur-xl w-36 ${isNavOpen ? 'flex-wrap w-fit' : '[&>li>a]:hidden'}
                 [&_li_a]:text-xs [&_li_a]:sm:text-base [&_li_a]:p-1
                 `}>
                    {sectionArray.map((item) => (
                        <li key={item.id}>
                            <Link to={item.route} className="btn" onClick={handleNavLink}>
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
                            <li className='btn' onClick={handleNavOpen}>
                                <p>❌</p>
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