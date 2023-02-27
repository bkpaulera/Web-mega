
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { navigation } from '../../data/data';

export function Nav() {

    const { t } = useTranslation()

    return (
        <nav className='transition-opacity my-10 flex'>
            <ul className='flex space-x-8 capitalize md:space-x-4'>
                {navigation.map((item, index) => {
                    return (
                        <li className='btn' key={index}>
                            <Link
                                to={item.href}
                                className=''
                            >
                                {t(item.name)}

                            </Link>
                        </li>
                    );
                })
                }
            </ul>
        </nav>
    )
}