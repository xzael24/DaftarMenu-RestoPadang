import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBBHau-HArFWXavpL26CrBJj08B8W3lsj0",
    authDomain: "qr-menu-padang.firebaseapp.com",
    projectId: "qr-menu-padang",
    storageBucket: "qr-menu-padang.firebasestorage.app",
    messagingSenderId: "962331009902",
    appId: "1:962331009902:web:ac4ab1ade106b4a147177f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);