'use client';
import React, {useState} from 'react';
import logo from '~/img/logo.png';

export default function Navigation() {
    const [isOpen, toggleMenu] = useState(false);

    return (
        <>
            <nav
                className="flex p-5 lg:px-8 items-center animate-fade-down animate-once">
                <div className="flex items-center">
                    <div className="flex-auto">
                        <a href="/">
                            <span className="txt">Modern UI</span>
                            <img src={logo} className="rounded-md" width="160px"></img>
                        </a>
                    </div>
                </div>
                <div className="flex-auto justify-end items-center lg:flex">
                    <PageLinks className='hidden' toggleMenu={toggleMenu} isOpen={isOpen}/>
                </div>
                <div className="flex-auto flex justify-end items-center lg:hidden">
                <svg className="h-10" onClick={() => toggleMenu(!isOpen)} xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                </div>
            </nav>
            <MobileMenu className={`${isOpen ? 'translate-y-0' : ''}`} toggleMenu={toggleMenu} isOpen={isOpen}/>
        </>
    );
}

interface MenuProps {
    className?: string;
    toggleMenu: (open: boolean) => void;
    isOpen: boolean;
}

function MobileMenu({className = '', toggleMenu, isOpen}: MenuProps) {
    return (
        <div
            className={`${className} block lg:hidden menu fixed top-0 left-0 w-full h-full bg-white z-10 transition-all duration-500 ease-in-out transform-gpu -translate-y-full border-b-2 border-black p-5`} style={{padding: '1.25em'}}>
            <div className='flex items-center justify-between'>
                <a href="/">
                    <span className="txt">Modern UI</span>
                    {/* <Image src="img/logo.png" width="160px" height="auto" alt="Modern UI" /> */}
                    <img src={logo} className="rounded-md" width="160px"></img>
                </a>
                <svg className="h-10" xmlns="http://www.w3.org/2000/svg" onClick={() => toggleMenu(false)} viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                {/* <img src="/close.svg" alt="close" className="h-10" onClick={() => toggleMenu(false)}/> */}
            </div>
            <PageLinks className='absolute left-0 top-[105px]' toggleMenu={toggleMenu} isOpen={isOpen}/>
        </div>
    );
}


function PageLinks({className= '', toggleMenu, isOpen}: MenuProps){
    function clickPos(elmID: string){
        if (isOpen){
            toggleMenu(false);
            setTimeout(function(){
                const element: HTMLElement = document.getElementById(elmID) || document.body;
                element.scrollIntoView({behavior: "smooth"});
                // alert("ARE YOU SURE ?")
            }, 30);
        }
        else{
            if(confirm("ARE YOU SURE ?") == true){
                const element: any = document.getElementById(elmID);
                element.scrollIntoView({behavior: "smooth"});
            }

        }
    }
    return (
        <div className={`${className} lg:w-max lg:h-0 lg:static lg:flex lg:gap-x-12`}>
            <a href="/#services" onClick={() => clickPos("services")} className="text-sm font-semibold leading-6 axu">Services</a>
            <a href="/#advantages" onClick={() => clickPos("advantages")} className="text-sm font-semibold leading-6 axu">Advantages</a>
            <a href="/#defence" onClick={() => clickPos("defence")} className="text-sm font-semibold leading-6 axu">Defence</a>
            <a href="/contact" onClick={() => toggleMenu(false)} className="text-sm font-semibold leading-6 axu">Contact</a>
        </div>
    )
}