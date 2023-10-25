import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC623Nt2gkjpjE7NaKmC9Fgah_FzKc8lC0",
    authDomain: "eng-track-5b46c.firebaseapp.com",
    projectId: "eng-track-5b46c",
    storageBucket: "eng-track-5b46c.appspot.com",
    messagingSenderId: "336654844255",
    appId: "1:336654844255:web:65966cea898282779e36ea",
    measurementId: "G-GNDR8E4V7Y"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const auth = getAuth(app);
const storage = getStorage(app);

export {
    auth,
    storage,
    db
};