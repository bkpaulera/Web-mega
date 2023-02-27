
import { I18nContext, useTranslation } from "react-i18next";
import { useEffect, useState } from 'react'
import i18next from "i18next";
import { lang } from '../../data/data';
import { CiForkAndKnife } from "react-icons/ci";

export function DropdownLanguage() {

    useEffect(() => {
    return () => {
        
    }
    }, [])
    
    
    return (
        <div className="flex ">
            <label tabIndex={0} className=" swap swap-flips avatar ">
                <input type="checkbox"/>
                <div className="swap-on w-10 h-10" onClick={() => i18next.changeLanguage(lang[0].nativeName)}>
                    <img src={i18next.language === lang[0].nativeName ? lang[0].src : lang[1].src}/></div>
                <div className="swap-off w-10 h-10" onClick={() => i18next.changeLanguage(lang[1].nativeName)}>
                    <img src={i18next.language === lang[1].nativeName ? lang[1].src : lang[0].src}/></div>
            </label>
        </div>
    );
}
