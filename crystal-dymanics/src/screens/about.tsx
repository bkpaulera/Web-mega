import { useEffect } from "react";
import { themeChange } from 'theme-change'

import {themes} from '../data/data'

export function About() {

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    
    return (
        <div className="menu menu-vertical">
            {themes.map((item) =>
                <button className="btn " data-set-theme={item.theme} data-act-class="ACTIVECLASS">{item.theme}</button>
                )
            }
        </div>
    )
}