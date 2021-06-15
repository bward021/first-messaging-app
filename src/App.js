import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  // your config here
  apiKey: "AIzaSyCX3AYP5tiMgCHDrxTrfIgdhRL_pRZAP48",
  authDomain: "first-messaging-app-edb0b.firebaseapp.com",
  projectId: "first-messaging-app-edb0b",
  storageBucket: "first-messaging-app-edb0b.appspot.com",
  messagingSenderId: "607507609857",
  appId: "1:607507609857:web:c961b3b4f527eb055dc300",
  measurementId: "G-WKCVCB8KN1"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
