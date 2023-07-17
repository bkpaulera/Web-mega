
import { useState } from "react";

import { navigation } from "../../data/data";

import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { CiAlignRight ,CiAlignLeft } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { DropdownLanguage } from "../Dropdown/DropdownLanguage";

export function NavMobile() {

    const [isOpen, setIsOpen] = useState(false);

    //Frame Motion
    const circleVariants = {
        hidden:{
            scale:0
        },
        visible:{
            scale:100,
            transition:{
                type:'string',
                stiffness:160,
                damping:60,
            },
        },
    };

    const ulVariants = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                delay:0.1,
            },
        },
    };
    const {t} = useTranslation()
    return (
        <nav className="relative my-5 mx-5">
            {/*Iccon*/}
            <div
                onClick={() => setIsOpen(true)}
                className="cursor-pointer text-white">
                <CiAlignRight className="w-16 h-8"/>
            </div>
            {/*Circle*/}
            <motion.div 
                variants={circleVariants} 
                initial='hidden'
                animate={isOpen ? 'visible': 'hidden'}
                className='w-4 h-4 rounded-full backdrop-blur-[0.1px] fixed top-0 right-0'>

            </motion.div>

            {/*Menu*/}
            <motion.ul variants={ulVariants}
                initial='hidden' 
                animate={isOpen ? 'visible' : ''} 
                className={`${isOpen ? 'right-0' : 'right-full'} 
                fixed top-0 bottom-0 w-full flex flex-col
                justify-center items-center transition-all duration-300 overflow-hidden`}>
                {/*Close Icon*/}
                <div 
                    className='cursor-pointer absolute top-8 right-8'
                    onClick={() => setIsOpen(false)}
                >
                    <CiAlignLeft className="w-16 h-8"/>
                </div>
                
                {navigation.map((item, index)=> {
                    return(
                        <li key={index} className='mb-8'
                            onClick={() => setIsOpen(false)}
                        >
                            <Link 
                            to={item.href} 
                            className='text-x1 cursor-pointer capitalize
                            flex w-full justify-center rounded border-2 border-primary bg-secondary-content px-4 py-2 text-sm font-medium text-primary hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                            {t(item.name)}
                            </Link>
                        </li>
                    )
                })
                }
            </motion.ul>
        </nav>
    );
}
