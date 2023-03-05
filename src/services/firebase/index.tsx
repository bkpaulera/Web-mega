import { initializeApp } from "firebase/app";
import { getStorage, ref, getMetadata } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    storageBucket: 'gs://crystal-dynamics.appspot.com'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);


