import React from "react";

import {Routes, Route} from 'react-router-dom';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage.jsx/LandingPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import RegisterPage from "./screens/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <section>
        <Header />
        <div className="main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="notes" element={<MyNotes />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default App;
