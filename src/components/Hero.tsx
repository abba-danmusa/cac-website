import React from "react";
// import Image from "next/image";
// import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="home-section bg-gray-light-1 bg-light-alpha-50 parallax-5 parallax-mousemove-scene"
      style={{ backgroundImage: "url(/images/hero.png)" }}
      id="home"
    >
      <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
        {/* Home Section Content */}
        <div className="home-content text-start">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-6 d-flex align-items-center mb-sm-60">
              <div>
                <h2 className="section-caption mb-30 mb-xs-10 wow fadeInUp" data-wow-duration="1.2s">
                  Corporate Affairs Commission
                </h2>
                <h1 className="hs-title-1 mb-30">
                  <span className="wow charsAnimIn" data-splitting="chars">
                    Start smart, register your business
                  </span>
                </h1>
                <p className="section-descr mb-50 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1.2s">
                  Smart businesses start with legal recognition—register with ease.
                </p>
                <div
                  className="local-scroll mt-n10 wow fadeInUp wch-unset"
                  data-wow-delay="0.7s"
                  data-wow-duration="1.2s"
                  data-wow-offset="0"
                >
                  <a
                    href="https://pre.cac.gov.ng"
                    className="btn btn-mod btn-large btn-round btn-hover-anim align-middle me-2 me-sm-5 mt-10"
                  >
                    <span>Start Your Application</span>
                  </a>
                  <a
                    href="/news"
                    className="link-hover-anim align-middle lightbox mfp-iframe mt-10"
                    data-link-animate="y"
                  >
                    <i className="icon-play size-13 me-1"></i> Latest News
                  </a>
                </div>
              </div>
            </div>
            {/* End Home Section Text */}

            {/* Stack Images */}
            <div className="col-md-5 offset-md-1 d-flex align-items-center">
              <div className="stack-images">
                <div className="stack-images-1 parallax-mousemove" data-offset="30">
                  <div className="wow clipRightIn" data-wow-delay="1.2s" data-wow-duration="1.75s">
                    <img src="images/stack-image-1.png" alt="Image Description" />
                  </div>
                </div>
                <div className="stack-images-2 parallax-mousemove" data-offset="60">
                  <div className="wow clipRightIn" data-wow-delay="1.7s" data-wow-duration="1.75s">
                    <img src="images/stack-image-2.png" alt="Image Description" />
                  </div>
                </div>
                <div className="stack-images-3 parallax-mousemove" data-offset="90">
                  <div className="wow clipRightIn" data-wow-delay="2.2s" data-wow-duration="1.75s">
                    <img src="images/stack-image-3.png" alt="Image Description" width="600" />
                  </div>
                </div>
              </div>
            </div>
            {/* End Stack Images */}
          </div>
        </div>
        {/* End Home Section Content */}

        {/* Scroll Down */}
        <div className="local-scroll scroll-down-wrap-type-1 wow fadeInUp" data-wow-offset="0">
          <div className="container">
            <a href="#services" className="scroll-down-1">
              <div className="scroll-down-1-icon">
                <i className="mi-arrow-down"></i>
              </div>
              <div className="scroll-down-1-text">Scroll Down</div>
            </a>
          </div>
        </div>
        {/* End Scroll Down */}
      </div>
    </section>
  );
};

export default HeroSection;
