import { useEffect } from "react";
import { themeChange } from 'theme-change'

import { themes } from '../data/data'

export function About() {

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])


    return (
        <div className="grid grid-cols-3 mt-10 " >
            {themes.map((item) =>
                <div className="card m-5 shadow-md" data-theme={item.theme} >
                    <div className="card-body">
                        <button className="btn" data-set-theme={item.theme} data-act-class="ACTIVECLASS">{item.theme}</button>
                    </div>
                </div>
            )}
        </div>
    )
}