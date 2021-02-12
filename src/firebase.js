import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBUz0nTDTW7cSCuLNavfRsruEeMvRUCXho",
  authDomain: "fir-auth-test-66578.firebaseapp.com",
  projectId: "fir-auth-test-66578",
  storageBucket: "fir-auth-test-66578.appspot.com",
  messagingSenderId: "689221309625",
  appId: "1:689221309625:web:4c634131472e789c01b768",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
