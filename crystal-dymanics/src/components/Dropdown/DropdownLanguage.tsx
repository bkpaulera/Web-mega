
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CiAlignBottom } from "react-icons/ci";
import { useTranslation } from "react-i18next";

import i18next from "i18next";
import { lang } from '../../data/data';

export function ModalTranslation() {

    const { t } = useTranslation()

    return (
        <div>
            {/*Menu trigger*/}
            <Menu as="div" className="">
                <Menu.Button
                    className="flex w-full justify-center rounded border-2 border-violet-500 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    {t('nav.language')}
                    <CiAlignBottom
                        className="ml-2 -mr-1 h-5 w-5 text-violet-900 hover:text-violet-100"
                        aria-hidden="true"
                    />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            {lang.map((item) => (
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                    } group flex w-full items-center rounded-md px-2 py-2 texts`}
                                                key={item.nativeName} onClick={() => i18next.changeLanguage(item.nativeName)} disabled={i18next.resolvedLanguage === item.nativeName}
                                            >
                                                <img className="mx-2 h-8 w-8 bg-white border border-black border-opacity-10 rounded-full" src={item.src} />
                                                {item.nativeName}
                                            </button>
                                        )}
                                    </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
