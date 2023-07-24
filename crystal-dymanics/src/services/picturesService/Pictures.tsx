import { Pics } from "../../types/pictures"
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const getWallpapper = async () => {
    try {
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
    catch (error) {
        return [];
    }
}
export const getHeroPic = async () => {
    try {
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
    catch (error) {
        console.log(error)
        return ;
    }
}
export const getSkillPic = async () => {
    try {
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
    catch (error) {
        console.log(error)
        return [];
    }
}
export const getLanguagesPic = async () => {
    try {
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
    catch (error) {
        console.log(error)
        return [];
    }
}