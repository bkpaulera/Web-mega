
import { Link } from 'react-router-dom';
import { navigation } from '../../data/data';

import LanguageSwitch from '../LanguageSwitch'

export function Nav() {

    return (
        <nav className='transition-opacity my-10'>
            <ul className='flex space-x-8 capitalize text-[15px] md:space-x-4'>
                {navigation.map((item, index) => {
                    return(
                        <li className='text-black hover:text-pink-600 cursor-pointer' key={index}>
                            <Link
                                onClick={() => console.log(item.href)} 
                                to={item.href}
                                className='transition-all duration-300 px-2 py-2 bg-white rounded-full'
                            >
                                {item.name}
                                
                            </Link>
                        </li>
                    );
                })
                }
                <li><LanguageSwitch /></li>
            </ul>
        </nav>
    )
}