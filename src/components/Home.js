import React, { Component } from 'react'
export default class Home extends Component {
  render() {
    return (
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/IMG_34051.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />I'm Apurva</h1>
                          {/*<h2>100% html5 bootstrap templates Made by colorlib.com</h2>*/}
                          <p><a class="btn btn-primary btn-learn" href="https://drive.google.com/open?id=1Ei0H1cABH5sfvGb2dD90ZP0zRnygx5uv" target="_blank" rel="noopener noreferrer">View CV <i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/IMG_34031.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I am <br />a Software Developer</h1>
                          <p><a href="#work" data-nav-section="work" class="btn btn-primary btn-learn">View Portfolio <i className="icon-briefcase3" /></a></p>
                          {/*<h2>100% html5 bootstrap templates Made by colorlib.com</h2>
                          <p><a href = "#Work" class="btn btn-primary btn-learn" target="_self" >View Portfolio Section <i className="icon-briefcase3" /></a></p>
                          <p><button  className="btn btn-primary btn-learn">View Portfolio <i className="icon-briefcase3" /></button></p>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      )
  }
}













