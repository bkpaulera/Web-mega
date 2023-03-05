import { I18nContext, useTranslation } from "react-i18next";
import { useEffect, useState } from 'react'

import i18next from "i18next";
import { lang } from '../../data/data';
import { Pics } from "../../types/pictures";
import * as ServicePics from '../../services/picturesService/Pictures';

export function DropdownLanguage() {

    const { t } = useTranslation()

    const [loading, setLoading] = useState(false);
    const [pictures, setPictures] = useState<Pics[]>([]);

    useEffect(() => {
        const getWallpapper = async () => {
            setLoading(true);
            setPictures(await ServicePics.getLanguagesPic());
            setLoading(false);
        }
        getWallpapper();
    }, []);

    return (
        <div className="flex ">
            {loading &&
                <progress className="progress w-56" />
            }
            {!loading && pictures.length > 0 &&
                <div>
                    <label tabIndex={0} className=" swap swap-flips avatar ">
                        <input type="checkbox" />
                        <div className="swap-on w-10 h-10" onClick={() => i18next.changeLanguage(lang[0].nativeName)}>
                            <img src={i18next.language === pictures[0].name ? pictures[0].src : pictures[1].src} /></div>
                        <div className="swap-off w-10 h-10" onClick={() => i18next.changeLanguage(lang[1].nativeName)}>
                            <img src={i18next.language === pictures[1].name ? pictures[1].src : pictures[0].src} /></div>
                    </label>
                    ))
                </div>
            }

        </div>
    );
}
