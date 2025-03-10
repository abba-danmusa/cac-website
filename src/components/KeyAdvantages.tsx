const KeyAdvantages = () => {
    return (
      <section className="page-section">
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-12 col-lg-3 mb-md-50" data-aos="fade-left">
              <h2 className="section-caption mb-xs-10">Key Advantages</h2>
              <h3 className="section-title-small mb-40">Why Register with Us?</h3>
              <div className="section-line"></div>
            </div>
            
            {[ 
              { title: "Simplified Registration", description: "Experience a streamlined and user-friendly registration process, making CAC compliance easier than ever." },
              { title: "Compliance", description: "Ensure your business operates legally and transparently with official registration through the Corporate Affairs Commission." },
              { title: "Business Legitimacy", description: "Gain credibility and trust with customers, partners, and investors by having your business officially registered." }
            ].map((item, index) => (
              <div data-aos="fade-right" key={index} className="col-md-4 col-lg-3 d-flex align-items-stretch mb-sm-30">
                <div className="alt-features-item border-left mt-0">
                  <div className="alt-features-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <h4 className="alt-features-title">{item.title}</h4>
                  <div className="alt-features-descr">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default KeyAdvantages;
  