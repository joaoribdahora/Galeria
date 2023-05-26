import {initializeApp} from 'firebase/app';
import { getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: 'gallery-jv-project.appspot.com',
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export const storage = getStorage(firebaseApp);