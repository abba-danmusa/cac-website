'use client';

const ServicesSection = () => {
    return (
      <section className="page-section" id="services">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-6 mb-md-60 mb-sm-30">
              <h2 className="section-caption mb-xs-10">Our Services</h2>
              <h3 className="section-title mb-30">
                <span className="wow charsAnimIn" data-splitting="chars">
                  All the services you need, in one place
                </span>
              </h3>
              <div className="row">
                <div className="col-lg-10">
                  <p className="section-descr mb-50 mb-sm-30 wow fadeInUp" data-wow-delay="0.4s">
                    From registration to compliance, we simplify every step of your business journey.
                  </p>
                </div>
              </div>
              <ul className="nav nav-tabs services-tabs wow fadeInUp" data-wow-delay="0.55s" role="tablist">
                {[
                  "Business Names",
                  "Companies",
                  "Inc. Trustees",
                  "Pre-Incorporation",
                  "Post-Inc."
                ].map((item, index) => (
                  <li role="presentation" key={index}>
                    <a
                      href={`#services-item-${index + 1}`}
                      className={index === 0 ? "active" : ""}
                      aria-controls={`services-item-${index + 1}`}
                      role="tab"
                      aria-selected={index === 0 ? "true" : "false"}
                      data-bs-toggle="tab"
                    >
                      {item} <span className="number">0{index + 1}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 d-flex wow fadeInLeft" data-wow-delay="0.55s" data-wow-offset="275">
              <div className="tab-content services-content">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className={`tab-pane services-content-item fade ${index === 0 ? "show active" : ""}`}
                    id={`services-item-${index + 1}`}
                    role="tabpanel"
                  >
                    <div className="services-text">
                      <div className="services-text-container">
                        <h4 className="services-title">{getServiceTitle(index)}</h4>
                        <p className="text-gray mb-0">{getServiceSteps(index)}</p>
                      </div>
                    </div>
                    <img
                      className="services-image"
                      src={getServiceImage(index)}
                      alt="Service Image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  const getServiceTitle = (index: any) => {
    const titles = [
      "Business Name Reg. Steps",
      "Company Registration Steps",
      "Incorporated Trustee Steps",
      "Pre-Incorporation Services",
      "Post-Incorporation Services",
      "Marketing"
    ];
    return titles[index] || "";
  };
  
  const getServiceSteps = (index: any) => {
    const steps = [
      `1. Check Name Availability.<br/>2. Complete Registration Form.<br/>3. Upload Required Documents.<br/>4. Make Payment Online.<br/>5. Get Registration Certificate.`,
      `1. Check Name Availability.<br/>2. Reserve the Company Name.<br/>3. Complete the Pre-Registration Form (CAC1.1).<br/>4. Upload Required Documents.<br/>5. Pay the Applicable Filing Fee.<br/>6. Get Certificate of Incorporation.`,
      `1. Check Name Availability.<br/>2. Reserve the Name.<br/>3. Complete the Application Form.<br/>4. Upload Required Documents.<br/>5. Pay the Applicable Filing Fee.<br/>6. Get Certificate of Incorporation.`,
      `1. Business Advisory & Consultation.<br/>2. Name Availability Search.<br/>3. Drafting Legal Documents.<br/>4. Obtaining Necessary Approvals.`,
      `1. Tax Identification Number (TIN) Registration.<br/>2. Business Bank Account Opening.<br/>3. Regulatory & Compliance Filings.<br/>4. Licensing & Permits Acquisition.<br/>5. Corporate Governance & Secretarial Services.`,
      `The core identity reflects consistent associations with the brand whereas the extended identity involves the intricate details of the brand that help generate a constant motif.`
    ];
    return steps[index] || "";
  };
  
  const getServiceImage = (index: any) => {
    const images = [
      "images/cac.png",
      "images/services-company.png",
      "images/services-incorporation.png",
      "images/services-preincorporation.png",
      "images/services-postincorporation.png",
      "images/services/service-6.jpg"
    ];
    return images[index] || "";
  };
  
  export default ServicesSection;
  
  