
import { Nav } from '../components/navComponent/Nav'

import { NavMobile } from '../components/navComponent/NavMobile'

import { CiSettings } from "react-icons/ci";
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className='bg-gray-900/70 fixed w-full top-0 left-0 z-30'>
            <div className="navbar">
                {/*Logo*/}
                <div className="navbar-start">
                    <span className="btn btn-ghost normal-case text-xl">Paulera</span>
                </div>

                {/*Nav*/}
                <div className='hidden lg:block md:block navbar-center'>
                    <Nav />
                    {/*Translation Op*/}
                </div>

                {/*Nav Mobile*/}
                <div className='navbar-end lg:hidden md:hidden'>
                    <NavMobile />
                </div>

                {/*Logo*/}
                <div className="hidden lg:flex md:flex  navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <Link to={"/settings"}>
                            <CiSettings className='h-10 w-10'/>
                        </Link>
                    </button>
                </div>
            </div>
        </header>

    );
}

