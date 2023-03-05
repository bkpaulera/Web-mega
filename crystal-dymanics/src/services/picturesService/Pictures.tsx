
import { Pics } from "../../types/pictures"
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const getWallpapper = async () => {
    let list: Pics[] = [];

    const imagesRef = ref(storage, '/wallpapper');

    const picList = await listAll(imagesRef);

    for (let i in picList.items) {

        let picUrl = await getDownloadURL(picList.items[i])

        list.push({
            name: picList.items[i].name,
            src: picUrl,
        });
    }
    return list;
}


export const getHeroPic = async () => {

    let cover: Pics = { name: '', src: '' };
    let list: Pics[] = [];
    cover.name = '';
    const imagesRef = ref(storage, '/wallpapper');

    const picList = await listAll(imagesRef);

    for (let i in picList.items) {
        let picUrl = await getDownloadURL(picList.items[i])
        let name = picList.items[i].name;

        if (name = 'profile.jpeg') {
            cover.name = name;
            cover.src = picUrl;
        }
    }
    return cover;
}

export const getSkillPic = async () => {
    let list: Pics[] = [];

    const imagesRef = ref(storage, '/IconSkills');

    const picList = await listAll(imagesRef);

    for (let i in picList.items) {

        let picUrl = await getDownloadURL(picList.items[i])

        list.push({
            name: picList.items[i].name,
            src: picUrl,
        });
    }
    return list;
}
export const getLanguagesPic= async () => {
    let list: Pics[] = [];

    const imagesRef = ref(storage, '/Iconlanguages');

    const picList = await listAll(imagesRef);

    for (let i in picList.items) {

        let picUrl = await getDownloadURL(picList.items[i])

        list.push({
            name: picList.items[i].name,
            src: picUrl,
        });
    }
    return list;
}