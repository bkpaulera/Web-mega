
import { Nav } from '../components/navComponent/Nav'

import { NavMobile } from '../components/navComponent/NavMobile'

export function Header() {
    return (
        <header className={`$flex item-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
            <div className="container mx-auto h-full flex items-center justify-between">
                {/*Logo*/}
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <span className="font-semibold text-xl tracking-tight">Paulera</span>
                </div>

                {/*Nav*/}
                <div className='hidden lg:block md:block'>
                    <Nav />
                </div>

                {/*Nav Mobile*/}
                <div className='lg:hidden md:hidden'>
                    <NavMobile />
                </div>
            </div>
        </header>
    );
}

