// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
class FirebaseManager {
    constructor() {
        this.firebaseConfig = {
            apiKey: "AIzaSyCpOC47ECGpFAWPL_6FUytFZlUiY56ksms",
            authDomain: "test-db-a96b8.firebaseapp.com",
            projectId: "test-db-a96b8",
            storageBucket: "test-db-a96b8.appspot.com",
            messagingSenderId: "218798315733",
            appId: "1:218798315733:web:a1f71ef7532d3216d2aa5c"
        };
        // Initialize Firebase
        this.app = initializeApp(this.firebaseConfig)
        this.db = getFirestore(this.app)
    }
}
export default new FirebaseManager();
/* FIREBASE CDN URLS
"https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js"
"https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js"
"https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js"
"https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
*/