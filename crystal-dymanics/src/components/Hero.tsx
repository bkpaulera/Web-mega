
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { people } from '../data/data';
import * as ServicePics from '../services/picturesService/Pictures';
import { Pics } from '../types/pictures';
import { TfiAlert } from "react-icons/tfi";

export function Hero() {
    const [loading, setLoading] = useState(false);
    const [pictures, setPictures] = useState<Pics>();

    useEffect(() => {
        const getWallpapper = async () => {
            setLoading(true);
            setPictures(await ServicePics.getHeroPic());
            setLoading(false);
        }
        getWallpapper();
    }, []);
    const { t } = useTranslation()

    return (
        <section className='hero shadow-2xl'>
            <div className='hero-content max-w-[90%] bg-primary p-5 rounded flex-col lg:flex-row-reverse lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
                {loading &&
                    <progress className="progress w-56" />
                }
                {!loading && pictures?.src &&
                    <div>
                        <div>
                            <img src={pictures.src} alt="mockup" className="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                    </div>
                }
                {!loading && pictures?.src === '' &&
                    <div>
                        <div className="alert alert-warning shadow-lg">
                            <div>
                                <TfiAlert className=" h-6 w-6" />
                                <span>Warning</span>
                            </div>
                        </div>
                    </div>
                }
                <div>
                    <h1 className="text-primary-content max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        {t('home.message')}
                    </h1>
                    <p className="text-secondary-content max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
                        {t('home.heroText')}
                    </p>
                </div>
            </div>
        </section>
    );
}