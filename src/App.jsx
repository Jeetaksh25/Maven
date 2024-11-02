import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './pages/Common/AuthContext.jsx';
import Header from "./pages/Common/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Book from "./pages/Book.jsx";
import Login from "./pages/Login.jsx";
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
    <AuthProvider>
      <Router>   
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/guide" element={<Guide/>}/>
          <Route path="/disorders" element={<Disorders/>}/>
          <Route path="/booking" element={<Book/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
        </Routes>
        <Footer/>
      </Router>
    </AuthProvider>
  );
}

export default App;
