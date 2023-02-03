
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { navigation } from '../../data/data';
import { ModalTranslation } from '../Dropdown/DropdownLanguage';

export function Nav() {

    const {t}  = useTranslation()

    return (
        <nav className='transition-opacity my-10'>
            <ul className='flex space-x-8 capitalize text-[15px] md:space-x-4'>
                {navigation.map((item, index) => {
                    return(
                        <li className='w-full justify-center rounded bg-violet-500 text-white px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75' key={index}>
                            <Link
                                onClick={() => console.log(item.href)} 
                                to={item.href}
                                className='transition-all duration-300 px-2 py-2 s rounded-full'
                            >
                                {t(item.name)} 
                                
                            </Link>
                        </li>
                    );
                })
            }
                <li>
                    <ModalTranslation />
                </li>
            </ul>
        </nav>
    )
}