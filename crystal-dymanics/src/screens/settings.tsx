import { useEffect, useState } from "react";
import * as ServicePics from '../services/picturesService/Pictures'
import { Pics } from '../types/pictures';

export function Settings() {

    const [loading, setLoading] = useState(false);
    const [pictures, setPictures] = useState<Pics[]>([]);

    useEffect(() => {
        const getWallpapper = async () => {
            setLoading(true);
            setPictures(await ServicePics.getWallpapper());
            setLoading(false);
        }
        getWallpapper();
    }, []);


    return (
        <div className="mt-24">
            {loading &&
                <progress className="progress w-56" />
            }
            {!loading && pictures.length > 0 &&
                <div>
                    {pictures.map((index) => (
                        <div>

                            <h1>{index.name}</h1>

                            <img src={index.src} />
                        </div>
                    ))
                    }
                </div>
            }
        </div>
    )
}