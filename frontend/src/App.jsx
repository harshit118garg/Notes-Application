import React from "react";

import {Routes, Route} from 'react-router-dom';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage.jsx/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";

function App() {
  return (
    <>
      <section>
        <Header />
        <div className="main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="notes" element={<MyNotes />} />
        </Routes>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default App;
