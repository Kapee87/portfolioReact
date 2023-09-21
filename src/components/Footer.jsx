import React from 'react'
import GhubSvg from './footer-micro-components/GhubSvg'
import LinkedinSvg from './footer-micro-components/LinkedinSvg'
import MailSvg from './footer-micro-components/MailSvg'
import WapSvg from './footer-micro-components/WapSvg'

function Footer() {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <aside>
                <img src="https://tsuramii.github.io/ADN-Solutions-Mockup/assets/logo-ico.png" alt="" className='h-10' />
                <p>Avalado por ADN solutions.</p>
            </aside>
            <nav>
                <header className="footer-title">Social</header>
                <div className="flex gap-4 items-center [&_a:hover]:scale-110">
                    <GhubSvg />
                    <LinkedinSvg />
                    <MailSvg />
                    <WapSvg />
                </div>
            </nav>
        </footer>
    )
}

export default Footer