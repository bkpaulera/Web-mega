
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { navigation } from '../../data/data';

export function Nav() {
    const {t}  = useTranslation()
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
                                {t(item.name)} 
                                
                            </Link>
                        </li>
                    );
                })
                }
                <div className="border-gray-200">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
                
            </ul>
        </nav>
    )
}