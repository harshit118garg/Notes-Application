import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage.jsx/LandingPage";

function App() {
  return (
    <>
      <section>
        <Header />
        <LandingPage />
        <Footer />
      </section>
    </>
  );
}

export default App;
