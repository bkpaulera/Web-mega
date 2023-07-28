
import { useEffect, useState } from "react";

import { skills } from "../data/data";
import { Pics } from "../types/pictures";
import * as ServicePics from '../services/picturesService/Pictures';
import { SwiperHero } from "./Carrossel/SwiperHero";

export function SkillsSection() {
    const [loading, setLoading] = useState(false);
    const [pictures, setPictures] = useState<Pics[]>([]);

    useEffect(() => {
        const getWallpapper = async () => {
            setLoading(true);
            setPictures(await ServicePics.getSkillPic());
            setLoading(false);
        }
        getWallpapper();
    }, []);

    return (
        <section className="bg-primary rounded m-5 py-3">
            <div className="container mx-auto">
                {loading &&
                    <progress className="progress w-56" />
                }
                {!loading && pictures.length > 0 &&
                    <div className="grid grid-cols-4 max-xl:grid-cols-5  max-lg:grid-cols-5 max-md:grid-cols-6 max-sm:grid-cols-4">
                        {pictures.map((skills, index) => {
                            return (
                                <div className="card shadow-xl border border-primary-content m-2 rounded-lg 50 hover:bg-secondary
                            space-x-1.5 px-4 py-1.5 duration-100" key={index}>
                                    <img className="mask mask-squircle" src={skills.src} />
                                </div>
                            );
                        })}
                    </div>
                }
               
            </div>
        </section>
    );
}