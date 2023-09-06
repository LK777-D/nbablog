import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPTBwj4RQNH8q1hoo0_ZA25GPVfozdB_E",
  authDomain: "nba-50526.firebaseapp.com",
  projectId: "nba-50526",
  storageBucket: "nba-50526.appspot.com",
  messagingSenderId: "165904647694",
  appId: "1:165904647694:web:cdea632760e874afaf1e5f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
