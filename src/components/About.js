import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
        <section className="colorlib-about" data-section="about" >
          <div className="colorlib-narrow-content" style={{marginTop: -150}}>
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p><strong>Hi I'm Apurva Kemkar!</strong> I am very dynamic person with MS in computer science field. I constantly thrive to learn new technologies and find the best solutions to the problems. I believe in improving myself constantly and making an impact on others who are around me. Some of my strengths are attention to details, work best under pressure, focused, consistent.</p>
                      <p>I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me.</p>
                      <p>I am a nature and a coffee lover! I love good music, travelling, watching movies, painting and playing badminton. </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                    <div className="services color-1">
                      <span className="icon2"><i className="icon-bulb" /></span>
                      <h3>Software Development</h3>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                    <div className="services color-2">
                      <span className="icon2"><i className="icon-globe-outline" /></span>
                      <h3>Web Design</h3>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                    <div className="services color-3">
                      <span className="icon2"><i className="icon-data" /></span>
                      <h3>Data Mining</h3>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                    <div className="services color-4">
                      <span className="icon2"><i className="icon-phone3" /></span>
                      <h3>Application</h3>
                    </div>
                  </div>
                </div>
                 {/*<div className="row">
                 <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                    <div className="hire">
                      <h2>I am happy to know you <br />that 300+ projects done sucessfully!</h2>
                      <button className="btn-hire">Hire me</button>
                    </div>
    </div>
                </div>*/}
              </div>
            </div>
          </div>
        </section>
      )
    }
  }