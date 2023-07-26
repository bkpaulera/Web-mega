import { Pics } from "../../types/pictures";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

// Armazene as listas de imagens aqui
let wallpapperList: Pics[] = [];
let heroPic: Pics = { name: '', src: '' };
let skillPicList: Pics[] = [];
let languagesPicList: Pics[] = [];

export const fetchImages = async () => {
  try {
    // Verifique se as listas já foram obtidas anteriormente
    if (wallpapperList.length === 0) {
      const wallpapperRef = ref(storage, '/wallpapper');
      const wallpapperPicList = await listAll(wallpapperRef);
      for (let i in wallpapperPicList.items) {
        let picUrl = await getDownloadURL(wallpapperPicList.items[i]);
        wallpapperList.push({
          name: wallpapperPicList.items[i].name,
          src: picUrl,
        });
      }
    }

    if (heroPic.name === '') {
      const heroRef = ref(storage, '/wallpapper');
      const heroPicList = await listAll(heroRef);
      for (let i in heroPicList.items) {
        let picUrl = await getDownloadURL(heroPicList.items[i]);
        let name = heroPicList.items[i].name;
        if (name === 'profile.jpeg') {
          heroPic.name = name;
          heroPic.src = picUrl;
        }
      }
    }

    if (skillPicList.length === 0) {
      const skillRef = ref(storage, '/IconSkills');
      const picList = await listAll(skillRef);
      for (let i in picList.items) {
        let picUrl = await getDownloadURL(picList.items[i]);
        skillPicList.push({
          name: picList.items[i].name,
          src: picUrl,
        });
      }
    }

    if (languagesPicList.length === 0) {
      const languagesRef = ref(storage, '/Iconlanguages');
      const PicList = await listAll(languagesRef);
      for (let i in PicList.items) {
        let picUrl = await getDownloadURL(PicList.items[i]);
        languagesPicList.push({
          name: PicList.items[i].name,
          src: picUrl,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const getWallpapper = () => {
  return wallpapperList;
};

export const getHeroPic = () => {
  return heroPic;
};

export const getSkillPic = () => {
  return skillPicList;
};

export const getLanguagesPic = () => {
  return languagesPicList;
};
