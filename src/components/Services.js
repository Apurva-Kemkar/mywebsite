import React, { Component } from 'react'

export default class Services extends Component {
  render() {
    return (
        <section className="colorlib-services" data-section="services" style={{marginTop: -150}}>
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Innovative Ideas</h3>
                    <p>Innovation is about taking risks and learning from failure.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Software Development</h3>
                    <p>I like the idea of developing software and be a part of each stage in SDLC </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Project Management</h3>
                    <p>I love to manage the team, I have been the Head of various projects and Tech Team </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-layers2" />
                  </span>
                  <div className="desc">
                    <h3>Data Analysis</h3>
                    <p> I inspect, clean, transform, and model data for discovering useful information</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Data Mining</h3>
                    <p>I like finding anomalies, patterns and correlations within large data sets</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Application Development</h3>
                    <p>I like to build front-end and back-end application code and deploy it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }