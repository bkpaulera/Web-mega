import { useEffect } from "react";
import { themeChange } from 'theme-change'


export function About() {

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    return (
        <div className="">
            <button className="btn glass" data-set-theme="synthwave" data-act-class="ACTIVECLASS">synthwave</button>
            <button className="btn glass" data-set-theme="light" data-act-class="ACTIVECLASS">light</button>
            <button className="btn glass" data-set-theme="dracula" data-act-class="ACTIVECLASS">dracula</button>
        </div>
    )
}