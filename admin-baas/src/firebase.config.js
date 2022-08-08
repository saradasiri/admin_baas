import { getAuth} from "firebase/auth";
import firebase from "firebase/compat/app";


const firebaseConfig = {
    apiKey: "AIzaSyBC2Dyq1WcBwyfYsBbXZLDxLNyjjuQXV_4",
    authDomain: "baas-353709.firebaseapp.com",
    projectId: "baas-353709",
    storageBucket: "baas-353709.appspot.com",
    messagingSenderId: "105800068926",
    appId: "1:105800068926:web:0fbe9b7f39f3da65ba066f",
    measurementId: "G-VERFPFK68H",
  };
const app=firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export {firebase}