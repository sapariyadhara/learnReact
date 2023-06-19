import React from "react";
// import $ from 'jquery';.

function Boodoo(props) {
  return (
    <div>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                {" "}
                <img src="./assets/images/logo.png" alt />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">
                      Page
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <section id="hero">
            <div className="container">
              <div className="hero-data">
                <h1 className="cd-headline slide">
                  YOUR PATH TO <br /> UNDERSTANDING{" "}
                  <span className="cd-words-wrapper">
                    {" "}
                    <b className="is-visible">ZODIAC</b>
                    <b>ZODIAC</b>
                    <b>ZODIAC</b>
                  </span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur
                  sed tellus ut vehicula eu consectetur elit at. Nulla erat nunc
                  nisl dui sed cras semper vitae. odio ullamcorper non sed
                  dignissim eu.
                </p>
                <a href="#" className="btn-theme">
                  Get Started
                </a>
              </div>
            </div>
          </section>
          <section id="descover">
            <div className="container">
              <div className=" row  justify-content-between">
                <div className="discover-icons col-md-2">
                  <img src="./assets/images/017-god.png" alt />
                  <h3>LOOPKAD</h3>
                </div>
                <div className="discover-icons col-md-2">
                  <img src="./assets/images/023-sun.png" alt />
                  <h3>SUNSHINE</h3>
                </div>
                <div className="discover-icons col-md-2">
                  <img src="./assets/images/048-horseshoe.png" alt />
                  <h3>URNAME</h3>
                </div>
                <div className="discover-icons col-md-2">
                  <img src="./assets/images/020-lotus.png" alt />
                  <h3>LOTUSIN</h3>
                </div>
                <div className="discover-icons col-md-2">
                  <img src="./assets/images/042-peace.png" alt />
                  <h3>GEARING</h3>
                </div>
              </div>
              <div className="discover-with main-title row">
                <div className="col-md-6">
                  <div className="with-img row">
                    <div className="dis-img col-md-12">
                      <img src="./assets/images/as-1.jpg" alt />
                    </div>
                    <div className="col-md-10">
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Pellentesque
                        nascetur sed tellus ut vehicula eu consectetur elit at.
                        Nulla erat nunc nisl dui sed cras semper vitae. Tempor
                        odio ullamcorper non sed dignissim eu.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="with-data row">
                    <div className="col-md-12">
                      <h5>About</h5>
                      <h2>Discover Everything Yourself WITH BOODOO</h2>
                      <a href="#" className="btn-theme">
                        Let’s get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="imageine">
            <div className="container">
              <div className="super-imagine row">
                <div className="sp-img-1 col-md-5">
                  <h2>SUPER IMAGINE</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pellentesque
                    nascetur sed tellus ut vehicula eu consectetur elit at.
                    Nulla erat nunc nisl dui sed cras semper vitae tempor odio.
                  </p>
                </div>
                <div className="sp-img-2 col-md-7">
                  <div className="image-img">
                    <img src="./assets/images/imagine-3.jpg" alt />
                  </div>
                  <h2>BOODOO TEAM </h2>
                </div>
              </div>
            </div>
          </section>
          <section id="SERVICES">
            <div className="container">
              <div className="main-title">
                <h5>SERVICES</h5>
                <h2>
                  Get Latest Daily Zodiac Forecast and Analysis for Success
                </h2>
              </div>
              <div className="forecast row">
                <div className="forecast-data col-md-4 col-sm-3 border">
                  <img src="./assets/images/astrology-forecast.jpg" alt />
                  <h4>Astrological FORECAST</h4>
                  <p>
                    Lorem ipsum dolor sit amet consec Pellentesque nascetur sed
                    tellus ut vehicula eu consectetur elit at.{" "}
                  </p>
                </div>
                <div className="forecast-data col-md-4 col-sm-3 border">
                  <img src="./assets/images/astrology-report.jpg" alt />
                  <h4>Astrological Reports</h4>
                  <p>
                    Lorem ipsum dolor sit amet consec Pellentesque nascetur sed
                    tellus ut vehicula eu consectetur elit at.{" "}
                  </p>
                </div>
                {/* Force next columns to break to new line */}
                <div className="w-100" />
                <div className="forecast-data col-md-4 col-sm-3 border">
                  <img src="./assets/images/Horoscope reading.jpg" alt />
                  <h4>HOROSCOPE READING</h4>
                  <p>
                    Lorem ipsum dolor sit amet consec Pellentesque nascetur sed
                    tellus ut vehicula eu consectetur elit at.{" "}
                  </p>
                </div>
                <div className="forecast-data col-md-4 col-sm-3 border">
                  <img src="./assets/images/love_matches.png" alt />
                  <h4>LOVE COMPATIBILTY</h4>
                  <p>
                    Lorem ipsum dolor sit amet consec Pellentesque nascetur sed
                    tellus ut vehicula eu consectetur elit at.{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="why">
            <div className="container">
              <div className="main-title">
                <h5>WHY?</h5>
                <h2>WHY CHOOSE BOODOO</h2>
              </div>
              <div className="why-choose row">
                <div className="col-sm-3 ">
                  <img src="./assets/images/Vector-1.png" alt />
                  <h3>Great Experience</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pellentesque
                    nascetur sed tellus ut vehicula eu consec.
                  </p>
                </div>
                <div className="col-sm-3 align-self-center">
                  <img src="./assets/images/Vector-2.png" alt />
                  <h3>Data Privacy </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pellentesque
                    nascetur sed tellus ut vehicula eu consec.
                  </p>
                </div>
                <div className="col-sm-3 ">
                  <img src="./assets/images/Vector-3.png" alt />
                  <h3>Best Customer Support</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pellentesque
                    nascetur sed tellus ut vehicula eu consec.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="Horoscope">
            <div className="container">
              <div className="main-title">
                <h5>Horoscope</h5>
                <h2>understanding Science of Astrology</h2>
              </div>
              <div className="row ">
                <div className="col-12">
                  <div className="hs-row row justify-content-start">
                    <div className="hs-box col-3">
                      <div className="hs-img">
                        <img src="./assets/images/zodiac-1.png" alt />
                      </div>
                      <div className="hs-data">
                        <h3>ARIES</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                    <div className="hs-box col-3">
                      <div className="hs-img">
                        <img src="./assets/images/zodiac-2.png" alt />
                      </div>
                      <div className="hs-data">
                        <h3>TAURUS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                    <div className="hs-box col-3">
                      <div className="hs-img">
                        <img src="./assets/images/zodiac-3.png" alt />
                      </div>
                      <div className="hs-data">
                        <h3>GEMINI</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Force next columns to break to new line */}
                <div className="w-100" />
                <div className="col-12">
                  <div className="hs-row row justify-content-end">
                    <div className="hs-box col-3 ">
                      <div className="hs-img">
                        <img src="./assets/images/zodiac-4.png" alt />
                      </div>
                      <div className="hs-data">
                        <h3>CANCER</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                    <div className="hs-box col-3">
                      <div className="hs-img">
                        <img src="./assets/images/zodiac-5.png" alt />
                      </div>
                      <div className="hs-data">
                        <h3>LEO</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                    <div className="hs-box col-3">
                      <div className="hs-img">
                        <img src="./assets/images/zodiac-6.png" alt />
                      </div>
                      <div className="hs-data">
                        <h3>VIRGO</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn-theme">
                See more
              </a>
              <div className="client row ">
                <div className="col-md-auto">
                  <h5>Partner</h5>
                  <h2>189+</h2>
                </div>
                <div className="col-md-auto">
                  <h5>TEAMS</h5>
                  <h2>322+</h2>
                </div>
                <div className="col-md-auto">
                  <h5>HAPPY CLient</h5>
                  <h2>98K+</h2>
                </div>
                <div className="col-md-auto">
                  <h5>serviced</h5>
                  <h2>112k+</h2>
                </div>
              </div>
            </div>
          </section>
          <section id="Our-team">
            <div className="container">
              <div className="team-data row">
                <div className="col-md-4">
                  <div className="row">
                    <div className="main-title col-12">
                      <h5>Appointment</h5>
                      <h2>LET’S MEET WITH OUR TEAM</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="form-data col-md-6">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        FIRST NAME*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="First name"
                        placeholder="Enter Your First Name"
                        aria-label="First name"
                      />
                    </div>
                    <div className="form-data col-md-6">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        LAST NAME*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Last name"
                        placeholder="Enter Your Last Name"
                        aria-label="Last name"
                      />
                    </div>
                    <div className="form-data col-md-6">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        YOUR PHONE*
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="Mobile phone"
                        placeholder="+44 3737 838xxx"
                        aria-label="Your Phone"
                      />
                    </div>
                    <div className="form-data col-md-6">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        YOUR EMAIL*
                      </label>
                      <input
                        type="Email"
                        className="form-control"
                        id="Email"
                        placeholder="youremail@domain.com"
                        aria-label="Email"
                      />
                    </div>
                    <div className="form-data col-md-6">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        SERVICES*
                      </label>
                      <select
                        className="form-select "
                        aria-label="Default select example"
                      >
                        <option selected>Choose services</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="form-data col-md-6">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        DATE*
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        placeholder="Choose Date"
                        aria-label="date"
                      />
                    </div>
                    <div className="form-data col-md-6">
                      <a href="#" className="btn-theme">
                        BookNow
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="membership">
            <div className="container">
              <div className="mem-ship">
                <h2>LET’S BECOME MEMBERSHIP</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur
                  sed tellus ut vehicula eu consectetur elit at. Nulla erat nunc
                  nisl dui sed cras semper vitae. Tempor odio ullamcorper non
                  sed dignissim eu.
                </p>
                <a href="#" className="btn-theme">
                  Get started
                </a>
              </div>
            </div>
          </section>
          <section id="mem-price">
            <div className="container">
              <div className="main-title">
                <h5>Membership</h5>
                <h2>Membership Price</h2>
              </div>
              <div className="mp-data row justify-content-around">
                <div className="mp-data-box col-auto border">
                  <h3>STARTER PRICE</h3>
                  <h2>
                    $44/<span>Month</span>
                  </h2>
                  <p>
                    <i className="fa-solid fa-square-check" /> Lorem ipsum dolor
                    sit amet con
                  </p>
                  <p>
                    <i className="fa-solid fa-square-check" /> Lorem ipsum dolor
                    sit amet con
                  </p>
                  <p>
                    <i className="fa-solid fa-square-check" /> Lorem ipsum dolor
                    sit amet con
                  </p>
                  <p>
                    <i className="fa-solid fa-square-check" /> Lorem ipsum dolor
                    sit amet con
                  </p>
                  <a href="#" className="btn-theme">
                    Choose Now
                  </a>
                </div>
                <div className="mp-data-box col-auto border">
                  <h3>BEST VALUE</h3>
                  <h2>
                    $72/<span>Month</span>
                  </h2>
                  <p>
                    <i className="fa-solid fa-square-check" /> Lorem ipsum dolor
                    sit amet con
                  </p>
                  <p>
                    <i className="fa-solid fa-square-check" /> Lorem ipsum dolor
                    sit amet con
                  </p>
                  <p>
                    <i className="fa-solid fa-square-check" /> Lorem ipsum dolor
                    sit amet con
                  </p>
                  <p>
                    <i className="fa-solid fa-square-check" /> Lorem ipsum dolor
                    sit amet con
                  </p>
                  <a href="#" className="btn-theme">
                    Choose Now
                  </a>
                </div>
                <div className="mp-data-box col-auto border">
                  <h3>PREMIUM PRICE</h3>
                  <h2>
                    $112/ <span>Month</span>{" "}
                  </h2>
                  <p>
                    <i className="fa-solid fa-square-check" /> Lorem ipsum dolor
                    sit amet con
                  </p>
                  <p>
                    <i className="fa-solid fa-square-check" /> Lorem ipsum dolor
                    sit amet con
                  </p>
                  <p>
                    <i className="fa-solid fa-square-check" /> Lorem ipsum dolor
                    sit amet con
                  </p>
                  <p>
                    <i className="fa-solid fa-square-check" /> Lorem ipsum dolor
                    sit amet con
                  </p>
                  <a href="#" className="btn-theme">
                    Choose Now
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="say-about">
            <div className="container">
              <div className="main-title">
                <h2>OUR HAPPY CLIENT SAY ABOUT BOODOO</h2>
              </div>
              <div className="arrow-img">
                <img src="./assets/images/Arrow 2.png" alt />
              </div>
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="client-say">
                      <div className="client-img">
                        <img src="./assets/images/client-5.png" alt />
                      </div>
                      <div className="client-data">
                        <img src="./assets/images/“.png" alt />
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Pellentesque
                          nascetur sed tellus ut vehicula eu consectetur elit
                          at. Nulla erat nunc nisl dui sed cras semper vitae.
                          Tempor odio ullamcorper non sed dignissim eu egestas
                          fusce arcu.
                        </p>
                        <h4>Antonio H - Client</h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="client-say">
                      <div className="client-img">
                        <img src="./assets/images/client-4.jpg" alt />
                      </div>
                      <div className="client-data">
                        <img src="./assets/images/“.png" alt />
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Pellentesque
                          nascetur sed tellus ut vehicula eu consectetur elit
                          at. Nulla erat nunc nisl dui sed cras semper vitae.
                          Tempor odio ullamcorper non sed dignissim eu egestas
                          fusce arcu.
                        </p>
                        <h4>Jessica D - Client</h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="client-say">
                      <div className="client-img">
                        <img src="./assets/images/client-5.png" alt />
                      </div>
                      <div className="client-data">
                        <img src="./assets/images/“.png" alt />
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Pellentesque
                          nascetur sed tellus ut vehicula eu consectetur elit
                          at. Nulla erat nunc nisl dui sed cras semper vitae.
                          Tempor odio ullamcorper non sed dignissim eu egestas
                          fusce arcu.
                        </p>
                        <h4>Jessica D - Client</h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="client-say">
                      <div className="client-img">
                        <img src="./assets/images/client-4.jpg" alt />
                      </div>
                      <div className="client-data">
                        <img src="./assets/images/“.png" alt />
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Pellentesque
                          nascetur sed tellus ut vehicula eu consectetur elit
                          at. Nulla erat nunc nisl dui sed cras semper vitae.
                          Tempor odio ullamcorper non sed dignissim eu egestas
                          fusce arcu.
                        </p>
                        <h4>Antonio H - Client</h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="client-say">
                      <div className="client-img">
                        <img src="./assets/images/client-5.png" alt />
                      </div>
                      <div className="client-data">
                        <img src="./assets/images/“.png" alt />
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Pellentesque
                          nascetur sed tellus ut vehicula eu consectetur elit
                          at. Nulla erat nunc nisl dui sed cras semper vitae.
                          Tempor odio ullamcorper non sed dignissim eu egestas
                          fusce arcu.
                        </p>
                        <h4>Jessica D - Client</h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="client-say">
                      <div className="client-img">
                        <img src="./assets/images/client-4.jpg" alt />
                      </div>
                      <div className="client-data">
                        <img src="./assets/images/“.png" alt />
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Pellentesque
                          nascetur sed tellus ut vehicula eu consectetur elit
                          at. Nulla erat nunc nisl dui sed cras semper vitae.
                          Tempor odio ullamcorper non sed dignissim eu egestas
                          fusce arcu.
                        </p>
                        <h4>Antonio H - Client</h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="client-say">
                      <div className="client-img">
                        <img src="./assets/images/client-5.png" alt />
                      </div>
                      <div className="client-data">
                        <img src="./assets/images/“.png" alt />
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Pellentesque
                          nascetur sed tellus ut vehicula eu consectetur elit
                          at. Nulla erat nunc nisl dui sed cras semper vitae.
                          Tempor odio ullamcorper non sed dignissim eu egestas
                          fusce arcu.
                        </p>
                        <h4>Jessica D - Client</h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="client-say">
                      <div className="client-img">
                        <img src="./assets/images/client-4.jpg" alt />
                      </div>
                      <div className="client-data">
                        <img src="./assets/images/“.png" alt />
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Pellentesque
                          nascetur sed tellus ut vehicula eu consectetur elit
                          at. Nulla erat nunc nisl dui sed cras semper vitae.
                          Tempor odio ullamcorper non sed dignissim eu egestas
                          fusce arcu.
                        </p>
                        <h4>Antonio H - Client</h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="client-say">
                      <div className="client-img">
                        <img src="./assets/images/client-2.jpg" alt />
                      </div>
                      <div className="client-data">
                        <img src="./assets/images/“.png" alt />
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Pellentesque
                          nascetur sed tellus ut vehicula eu consectetur elit
                          at. Nulla erat nunc nisl dui sed cras semper vitae.
                          Tempor odio ullamcorper non sed dignissim eu egestas
                          fusce arcu.
                        </p>
                        <h4>Jessica D - Client</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
              </div>
            </div>
          </section>
          <section id="blog">
            <div className="container">
              <div className="main-title">
                <h5>BLOG</h5>
                <h2>Our blog for you</h2>
              </div>
              <div className="blog-data row">
                <div className="col col-sm-6 col-md-3 ">
                  <img src="./assets/images/blog-1.jpg" alt />
                  <h3>The Art of Astrology Decoding the...</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pellen sectetur elit
                    at erat nunc nisl <a href="#">see more</a>
                  </p>
                </div>
                <div className="col col-sm-6 col-md-3 ">
                  <img src="./assets/images/blog-2.jpg" alt />
                  <h3>The Art of Astrology Decoding the...</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pellen sectetur elit
                    at erat nunc nisl <a href="#">see more</a>
                  </p>
                </div>
                <div className="col col-sm-6 col-md-3 ">
                  <img src="./assets/images/blog-3.jpg" alt />
                  <h3>The Art of Astrology Decoding the...</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pellen sectetur elit
                    at erat nunc nisl <a href="#">see more</a>
                  </p>
                </div>
                <div className="col col-sm-6 col-md-3 ">
                  <img src="./assets/images/blog-4.jpg" alt />
                  <h3>The Art of Astrology Decoding the...</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pellen sectetur elit
                    at erat nunc nisl <a href="#">see more</a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer id="feedback">
          <div className="container">
            <hr />
            <div className="fb-data row">
              <div className="logo-blog col-auto col-sm-auto">
                <img src="./assets/images/logo.png" alt />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Pellen sectetur elit
                  at erat.
                </p>
              </div>
              <div className="col-auto col-sm-auto">
                <h3>SERVICES</h3>
                <a href="#">Astrological Forecasts</a>
                <a href="#">Astrological Report</a>
                <a href="#">Horoscope Readings</a>
                <a href="#">Love Compatibility</a>
              </div>
              <div className="col-auto col-sm-auto">
                <h3>LINK</h3>
                <a href="#">Term Of Use</a>
                <a href="#">Privacy Policy</a>
              </div>
              <div className="contact col-auto col-sm-5">
                <h3>CONTACT US</h3>
                <a href="#">
                  <i className="fa-solid fa-phone" />
                  +12 2629 7828
                </a>
                <a href="#">
                  <i className="fa-regular fa-envelope" />
                  boodoo@domain.com
                </a>
                <a href="#">
                  <i className="fa-solid fa-location-pin" />
                  112 Washtucna,Washington
                </a>
              </div>
              <div className="maps col-auto col-sm-5">
                <h3>MAPS</h3>
                <a href="#">
                  {" "}
                  <img src="./assets/images/maps-1.jpg" alt />
                </a>
              </div>
            </div>
            <p>
              <span>copyright@2023 Boodoo All Right Reserved</span>
            </p>
            <hr />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Boodoo;
