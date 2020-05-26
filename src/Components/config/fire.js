import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDGv2mqsOhXBB25ciJXNLNLWRyA1RiNVAA",
    authDomain: "spa-olshop.firebaseapp.com",
    databaseURL: "https://spa-olshop.firebaseio.com",
    projectId: "spa-olshop",
    storageBucket: "spa-olshop.appspot.com",
    messagingSenderId: "735854278999",
    appId: "1:735854278999:web:31568207fba0bbef4c2612",
    measurementId: "G-4DJH7N6JB1"
});
export default app;