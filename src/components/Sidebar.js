import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
        <div>
            <div>
                <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                    <div className="text-center">
                    <div className="author-img" style={{backgroundImage: 'url(images/new.jpeg)'}} />
                    <h1 id="colorlib-logo"><a href="index.html">Apurva Kemkar</a></h1>
                    <span className="position"><a href="#">Software Developer</a></span>
                    <span className="email" style={{marginTop: "-250px"}}><i className="icon-mail"></i> kemkarapurva@gmail.com</span>
                    <span className="position"></span>
                    </div>
                    <nav id="colorlib-main-menu" role="navigation" className="navbar">
                    <div id="navbar" className="collapse">
                        <ul>
                        <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                        <li><a href="#" data-nav-section="about">About</a></li>
                        <li><a href="#" data-nav-section="services">Services</a></li>
                        <li><a href="#" data-nav-section="skills">Skills</a></li>
                        <li><a href="#" data-nav-section="education">Education</a></li>
                        <li><a href="#" data-nav-section="experience">Experience</a></li>
                        <li><a href="#" data-nav-section="work">Work</a></li>
                        <li><a href="#" data-nav-section="contact">Contact</a></li>
                        </ul>
                    </div>
                    </nav>
                    <nav id="colorlib-main-menu">
                    <ul>
                    <li><a href="www.linkedin.com/in/apurva-kemkar/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                    <li><a href="https://github.com/Apurva-Kemkar/" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                    <li><a href="https://twitter.com/ApurvaKemkar" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                    <li><a href="https://www.facebook.com/apurva.kemkar/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                    <li><a href="https://www.instagram.com/apurva2415/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>    
                    </ul>
                    </nav>
                    <div className="colorlib-footer">
                    <p><small>© {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}  <span>Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash.com</a></span></small></p>
                    <ul>
                        <li><a href="#"><i className="icon-facebook2" /></a></li>
                        <li><a href="#"><i className="icon-twitter2" /></a></li>
                        <li><a href="#"><i className="icon-instagram" /></a></li>
                        <li><a href="#"><i className="icon-linkedin2" /></a></li>
                    </ul>
                    </div>
                </aside>
            </div>
        </div>
    )
    }
  }