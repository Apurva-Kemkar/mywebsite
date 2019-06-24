import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
        <section className="colorlib-experience" data-section="experience" style={{marginTop: -130}}>
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Experience</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><button>Software Developer - Unimar Inc, North Syracuse, NY</button> <span>July 2018-Dec 2018</span></h2>
                        <p>• Developed and documented Data Retrieval Application for the employers and customers of the business in Java for retrieval of large data from local data server and stored it locally using NoSQL</p>
                        <p>• Researched cloud storage and AWS and redesigned old architecture for migrating data to cloud</p>
                        <p>• Designed the automated scripts for MongoDB to retrieve data as per the client requirements</p>
                        <p> • Used agile software development process to develop, diagnose, debug and manage faults occurred during testing</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><button>Software Developer - Techovarya Solutions, Gujarat, India</button> <span>June 2016-June 2017</span></h2>
                        <p>• Designed and Implemented a RESTful PHP server and an interactive dashboard with HTML, AngularJS, CSS and XML</p>
                        <p>• Collaborated with cross-functional teams for the peer code reviews to ensure quality and adherence to coding standards</p>
                        <p>• Incorporated client-side features and minimized the server-side validations, improving the application performance by 25%</p>
                      </div>
                    </div>
                  </article>
                  {/*<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><button>System Analyst</button> <span>2017-2018</span></h2>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><button>Creative Designer</button> <span>2017-2018</span></h2>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><button>UI/UX Designer at Envato</button> <span>2017-2018</span></h2>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
    </article>*/}
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }