import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../js/custom.js'; // Import custom JS
import logo from '../assets/images/LOGO1.png';
import sliderImg from '../assets/images/slider-img.png';
import heroBg from '../assets/images/hero-bg.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const LandingPage = () => (
  <div className="hero_area">

    <div className="hero_bg_box">
      <div className="bg_img_box">
        <img src={heroBg} alt="" />
      </div>
    </div>

    {/* header section starts */}
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container fixed-top">
          <a className="navbar-brand" href="index.html">
            <span>
              TekRafiki
            </span>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about"> About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">Team</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    {/* end header section */}
    
    {/* slider section */}
    <section id="home" className="slider_section">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      TekRafiki
                    </h1>
                    <p>
                      TekRafiki aims to support the implementation of the new syllabus in the Department of Computing. It involves leveraging LLMs to develop an AI-driven platform that will assist in curriculum design by suggesting relevant topics, subtopics, and detailed content coverage. It will also analyze current technological trends and educational standards to ensure the syllabus remains cutting-edge and comprehensive.
                    </p>
                    <Link to="/Homepage" className="btn btn-primary mt-4">Get Started</Link> {/* Add button here */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src={sliderImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      TekRafiki
                    </h1>
                    <p>
                      A robust AI-driven platform that streamlines curriculum design processes and enhances educational content.
                    </p>
                    <Link to="/home" className="btn btn-primary mt-4">Get Started</Link> {/* Add button here */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src={sliderImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      TekRafiki
                    </h1>
                    <p>
                      Improved alignment of the computing syllabus with the current technological trends and industry standards.
                    </p>
                    <Link to="/home" className="btn btn-primary mt-4">Get Started</Link> {/* Add button here */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src={sliderImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>
    </section>
    {/* end slider section */}

    {/* about section */}
    <section id="about" className="about_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            About <span>Us</span>
          </h2>
          <p>
            A robust AI-driven platform that streamlines curriculum design processes and enhances educational content
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <h3>
                We Are TekRafiki
              </h3>
              <p>
                The project aims to support the implementation of the new syllabus in the Department of Computing. It involves leveraging LLMs to develop an AI-driven platform that will assist in curriculum design by suggesting relevant topics, subtopics, and detailed content coverage. It will also analyze current technological trends and educational standards to ensure the syllabus remains cutting-edge and comprehensive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end about section */}

    {/* team section */}
    <section id="team" className="team_section layout_padding">
      <div className="container-fluid">
        <div className="heading_container heading_center">
          <h2 className="">
            Our <span> Team</span>
          </h2>
        </div>

        <div className="team_container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src="" className="img1" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    DR. Lawrence Nderu
                  </h5>
                  <p>
                    Project Administrator
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src="" className="img1" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Teresiah Njeri
                  </h5>
                  <p>
                    Project Manager
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src="" className="img1" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Vanessa Kalondu
                  </h5>
                  <p>
                    Front-end developer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src="" className="img1" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Viona Njenga
                  </h5>
                  <p>
                    Back-end Developer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src="" className="img1" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Nimrod Mutisya
                  </h5>
                  <p>
                    Product Manager
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src="" className="img1" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Joel Ng'ang'a
                  </h5>
                  <p>
                    Web developer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src="" className="img1" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Richard Karanu
                  </h5>
                  <p>
                    Backend developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end team section */}

    {/* info section */}
    <section className="info_section layout_padding2">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 info_col">
          </div>
          <div className="col-md-6 col-lg-3 info_col">
            <div className="info_detail">
              <h4>
                Info
              </h4>
              <p>
                Enhanced student engagement and learning outcomes through personalized learning support and interactive content.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 mx-auto info_col">
            <div className="info_link_box">
              <h4>
                Links
              </h4>
              <div className="info_links">
                <a className="active" href="home">
                  Home
                </a>
                <a className="" href="about">
                  About
                </a>
                <a className="" href="#team">
                  Team
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 info_col">
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default LandingPage;
