import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import Navigation from './config/routes';
import ContextProvider from './context/context';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyBe3zISdCtSac85dA7HobbmuFasShIJ9xg",
  authDomain: "khanaapp-61a25.firebaseapp.com",
  projectId: "khanaapp-61a25",
  storageBucket: "khanaapp-61a25.appspot.com",
  messagingSenderId: "543852762975",
  appId: "1:543852762975:web:d10718ac77d7485c9848ea",
  measurementId: "G-FSVM7L8ML7"
};

initializeApp(firebaseConfig)

function App() {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
}

export default App;
