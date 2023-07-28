
import { Nav } from '../components/navComponent/Nav'

import { NavMobile } from '../components/navComponent/NavMobile'
import { DropdownLanguage } from './Dropdown/DropdownLanguage';

export function Header() {
    return (
        <header className='bg-current fixed h-[65px] w-full top-0 left-0 z-30 '>
            <div className="navbar sm:justify-start lg:justify-center md:justify-center justify-center">
                {/*Logo
                <div className="navbar-start" />
                */}
                <div className=''>
                    {/*Nav*/}
                    <div className='hidden lg:block md:block'>
                        <Nav />
                        {/*Translation Op*/}
                    </div>

                    {/*Nav Mobile*/}
                    <div className='navbar-end lg:hidden md:hidden'>
                        <NavMobile />
                    </div>
                </div>

                {/*Logo
                <div className="hidden lg:flex md:flex  navbar-end">
                    <DropdownLanguage />
                </div>*/}
            </div>
        </header>

    );
}

