
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CiAlignBottom } from "react-icons/ci";
import { useTranslation } from "react-i18next";

import i18next from "i18next";
import { lang } from '../../data/data';

export function ModalTranslation() {

    const { t } = useTranslation()

    return (
        <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn m-1">Click</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {lang.map((item) => (
                    <li className={`${i18next.language === item.nativeName ? 'hidden' : 'text-black-500'}
                    flex w-full rounded-md px-2 py-2 mb-1`}
                        key={item.nativeName}
                        onClick={() => i18next.changeLanguage(item.nativeName)}
                    >
                        <div className="avatar">
                            <div className="w-5 h-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={item.src} />
                            </div>
                            <h1 className='text-primary-content'>{t(item.name)}</h1>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
