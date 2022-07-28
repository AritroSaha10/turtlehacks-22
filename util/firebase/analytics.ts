import { initializeApp, getApps } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

if (getApps().length === 0) {
    try {
        // Initialize Firebase
        initializeApp({
            apiKey: "AIzaSyBDjYkEW8nAtGREUB7_-HNxBrJHSzeAqyw",
            authDomain: "turtlehacks-3bca5.firebaseapp.com",
            projectId: "turtlehacks-3bca5",
            storageBucket: "turtlehacks-3bca5.appspot.com",
            messagingSenderId: "688318104712",
            appId: "1:688318104712:web:78d6054b1290845508cb3d",
            measurementId: "G-R0SXW0KXXW"
        });
    } catch (error) {
        console.error("Firebase initialization error: ", error.stack);
    }
}

export default getAnalytics;