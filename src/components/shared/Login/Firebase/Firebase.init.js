import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeFirebaseAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeFirebaseAuthentication;