
import { useState } from "react";

import { navigation } from "../../data/data";

import { motion } from 'framer-motion';
import { Link} from 'react-scroll';

import { CiAlignRight ,CiAlignLeft } from "react-icons/ci";

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
                className='w-4 h-4 rounded-full bg-rose-500 fixed top-0 right-0'>

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
                    onClick={() => setIsOpen(false)}
                    className='cursor-pointer absolute top-8 right-8'
                >
                    <CiAlignLeft className="w-16 h-8"/>
                </div>

                {navigation.map((item, index)=> {
                    return(
                        <li key={index} className='mb-8'
                        >
                            <Link to={item.href} smooth={true}
                            duration={500} offset={-70} className='text-x1 cursor-pointer capitalize'>
                                {item.name}
                            </Link>
                        </li>
                    )
                })

                }

            </motion.ul>
        </nav>
    );
}
