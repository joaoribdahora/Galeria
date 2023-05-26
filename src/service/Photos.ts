import { Photo } from "../types/Photo";
import {storage} from '../service/firebase';
import {ref, listAll, getDownloadURL, uploadBytes} from 'firebase/storage';

export const GetAll = async() => {
    let list: Photo[] = [];

    const imageFolder = ref(storage, 'images');
    const photoList = await listAll(imageFolder);
    
    for(let i in photoList.items) {
    
        let photoURL = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoURL
        })
    }

    return list;
}

export const addPhoto = async (file: File, name: string) => {

    if(['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)){

        let photoRef = ref(storage, `images/${name}`)

        let uploadPhoto = await uploadBytes(photoRef, file);
        let urlPhoto = await getDownloadURL(uploadPhoto.ref);
    
        return( { name: uploadPhoto.ref.name, url: urlPhoto} as Photo)

    }else{
        return new Error('Arquivo não permitido');
    }

}