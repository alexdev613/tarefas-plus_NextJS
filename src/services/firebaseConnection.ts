import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZkS5MEY1UwK2vLAZoM-bqCDLqfLS3NYA",
  authDomain: "tarefasplusnextjs.firebaseapp.com",
  projectId: "tarefasplusnextjs",
  storageBucket: "tarefasplusnextjs.appspot.com",
  messagingSenderId: "858542922885",
  appId: "1:858542922885:web:a5adec08d5c4ab5fbaddec"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
