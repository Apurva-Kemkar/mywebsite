import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Work from './components/Work'
import Contact from './components/Contact'
import Sidebar from './components/Sidebar'
function App() {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Home></Home>
            <About></About>
            <Services></Services>
            <Skills></Skills>
            <Education></Education>
            <Experience></Experience>
            <Work></Work>
            {/*<Blog></Blog>*/}
            <Contact></Contact>
          </div>
      	</div>
      </div>
  );
}

export default App;
