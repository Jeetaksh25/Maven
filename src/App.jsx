import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./pages/Common/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Book from "./pages/Book.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Guide from "./pages/Guide.jsx";
import Disorders from "./pages/Disorders.jsx";
import Quiz from "./pages/Quiz.jsx";
import Footer from "./pages/Common/Footer.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    duration: 600, 
  });

  return(
    <>
      <Router>   
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/guide" element={<Guide/>}/>
            <Route path="/disorders" element={<Disorders/>}/>
            <Route path="/booking" element={<Book/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/quiz" element={<Quiz/>}/>
            <Route path="/guide" element={<Guide />} />
          </Routes>
        <Footer/>
      </Router>

    </>
  );
}

export default App;