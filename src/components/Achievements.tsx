
const Achievements = () => {

  return (
    <section
    className="page-section bg-dark-1 bg-dark-alpha-90 parallax-5 light-content"
    style={{ backgroundImage: 'url(images/hero.png)' }}
  >
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-4 mb-md-60 mb-xs-50">
          <h2 className="section-title mb-20 wow fadeInUp">Let&apos;s Guide You Through The Processes</h2>
          <p className="section-descr mb-40 wow fadeInUp" data-wow-delay="0.1s">
            We provide the effective ideas that grow businesses of our clients.
          </p>
          <div className="local-scroll wow fadeInUp" data-wow-delay="0.2s">
            <a href="#contact" className="btn btn-mod btn-w btn-large btn-round btn-hover-anim">
              <span>Learn more</span>
            </a>
          </div>
        </div>
        <div className="col-lg-7 offset-lg-1">
          {/* Numbers Grid */}
          <div className="row mt-n50 mt-xs-n30">
            {/* Number Item */}
            <div className="col-sm-6 col-lg-5 mt-50 mt-xs-30 wow fadeScaleIn" data-wow-delay="0.4s">
              <div className="number-title mb-10">88.9%</div>
              <div className="number-descr">Of all services are delivered in 48 hours or less.</div>
            </div>
            {/* End Number Item */}

            {/* Number Item */}
            <div className="col-sm-6 col-lg-5 offset-lg-2 mt-50 mt-xs-30 wow fadeScaleIn" data-wow-delay="0.6s">
              <div className="number-title mb-10">384k+</div>
              <div className="number-descr">Average annual Businesses Registered.</div>
            </div>
            {/* End Number Item */}

            {/* Number Item */}
            <div className="col-sm-6 col-lg-5 mt-50 mt-xs-30 wow fadeScaleIn" data-wow-delay="0.8s">
              <div className="number-title mb-10">100%</div>
              <div className="number-descr">Online registration for all our services</div>
            </div>
            {/* End Number Item */}

            {/* Number Item */}
            <div className="col-sm-6 col-lg-5 offset-lg-2 mt-50 mt-xs-30 wow fadeScaleIn" data-wow-delay="1s">
              <div className="number-title mb-10">48hrs</div>
              <div className="number-descr">On Average for Resolving Complaints.</div>
            </div>
            {/* End Number Item */}
          </div>
          {/* End Numbers Grid */}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Achievements;
