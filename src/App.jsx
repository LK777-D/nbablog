import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase-config";
import Home from "./pages/Home";
import PlayerInfo from "./components/PlayerInfo";
import Footer from "./components/Footer";
import Quiz from "./pages/Quiz";
import Game from "./pages/Game";
import Blog from "./pages/Blog";
import Login from "./pages/Login";

function App() {
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        logInEmail,
        logInPassword
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
    navigate("/auth");
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (user?.email) {
      navigate("/");
    }
  }, [user]);
  return (
    <>
      <Navbar logout={logout} user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams/:team" element={<PlayerInfo />} />
        <Route path="/nbaquiz" element={<Quiz />} />
        <Route path="/game" element={<Game />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/auth"
          element={
            <Login
              setLogInEmail={setLogInEmail}
              setLogInPassword={setLogInPassword}
              setRegisterEmail={setRegisterEmail}
              setRegisterPassword={setRegisterPassword}
              register={register}
              logout={logout}
              login={login}
              user={user}
              registerEmail={registerEmail}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
