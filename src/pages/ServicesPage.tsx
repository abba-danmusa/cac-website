import React from 'react'

const ServicesPage = () => {
  return (
    <div> 
        <section className="page-section bg-gray-light-1 parallax-5" style={{ backgroundImage: 'url(images/hero.png)' }} id="services">
    <div className="container position-relative pt-50 pb-100 pb-sm-20">
      {/* Section Content */}
      <div className="text-center">
        <div className="row">
          {/* Page Title */}
          <div className="col-md-8 offset-md-2">
            <h2 className="section-caption-border mb-30 mb-xs-20 wow fadeInUp" data-wow-duration="1.2s">
              Our Services
            </h2>
            <h1 className="hs-title-1 mb-30">
              <span className="wow charsAnimIn" data-splitting="chars">
                Effortless business registration, compliance, & beyond.
              </span>
            </h1>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <p className="section-descr mb-0 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1.2s">
                  From registration to compliance, we make business processes smooth, fast, and hassle-free.
                </p>
              </div>
            </div>
          </div>
          {/* End Page Title */}
        </div>
      </div>
      {/* End Section Content */}
    </div>
  </section>
  {/* End Header Section */}

  {/* Services Section */}
  <section className="page-section pt-0 px-2 px-lg-0">
    <div className="container position-relative pt-30 bg-white round mt-n120 mt-sm-n60">
      {/* Nav Tabs */}
      <ul className="nav nav-tabs tpl-alt-tabs mb-20 mb-xs-0 wow fadeInUp" data-wow-offset="0" role="tablist">
        {[
          {
            id: 'service-branding',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
                <path d="M32,8C18.1,8,6,18.1,6,32s12.1,24,26,24s26-12.1,26-26S45.9,8,32,8z M32,52c-11,0-20-9-20-20s9-20,20-20s20,9,20,20S43,52,32,52z M32,18c-7.7,0-14,6.3-14,14s6.3,14,14,14s14-6.3,14-14S39.7,18,32,18z M32,40c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S36.4,40,32,40z M32,28c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S34.2,28,32,28z" />
              </svg>
            ),
            title: 'Business Names',
          },
          {
            id: 'service-ui-ux-design',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
                <path d="M52,12H12C8.7,12,6,14.7,6,18v28c0,3.3,2.7,6,6,6h40c3.3,0,6-2.7,6-6V18C58,14.7,55.3,12,52,12z M52,46H12V18h40V46z M20,24h24v4H20V24z M20,32h16v4H20V32z" />
              </svg>
            ),
            title: 'Companies',
          },
          {
            id: 'service-animation',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
                <path d="M32,8C18.1,8,6,18.1,6,32s12.1,24,26,24s26-12.1,26-26S45.9,8,32,8z M32,14c9.9,0,18,8.1,18,18s-8.1,18-18,18S14,41.9,14,32S22.1,14,32,14z M32,20c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S38.6,20,32,20z M32,26c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S35.3,26,32,26z M32,30c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S33.1,30,32,30z" />
              </svg>
            ),
            title: 'Incorporated Trustees',
          },
          {
            id: 'service-development',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
                <path d="M32,10c-12.1,0-22,9.9-22,22s9.9,22,22,22s22-9.9,22-22S44.1,10,32,10z M32,16c9.9,0,18,8.1,18,18s-8.1,18-18,18S14,43.9,14,34S22.1,16,32,16z M26,24h12v4H26V24z M26,30h12v4H26V30z M26,36h8v4H26V36z" />
              </svg>
            ),
            title: 'Limited Partnerships',
          },
          {
            id: 'service-photography',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
                <path d="M32,10c-12.1,0-22,9.9-22,22s9.9,22,22,22s22-9.9,22-22S44.1,10,32,10z M32,16c9.9,0,18,8.1,18,18s-8.1,18-18,18S14,43.9,14,34S22.1,16,32,16z M24,24l5,5l-5,5M40,24l-5,5l5,5M32,40l0,8" />
              </svg>
            ),
            title: 'Limited Liability Partnerships',
          },
        ].map((tab, index) => (
          <li className="nav-item" role="presentation" key={index}>
            <a
              href={`#${tab.id}`}
              className={`nav-link ${index === 0 ? 'active' : ''}`}
              data-bs-toggle="tab"
              role="tab"
              aria-selected={index === 0}
            >
              <div className="alt-tabs-icon">{tab.icon}</div>
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      {/* End Nav Tabs */}

      {/* Tab Panes */}
      <div className="tab-content tpl-tabs-cont">
        {[
          {
            id: 'service-branding',
            title: 'Key aspects of Business Names registration.',
            content: [
              'Under the Companies and Allied Matters Act (CAMA) 2020, the Corporate Affairs Commission (CAC) oversees the registration of Business Names in Nigeria. This process is essential for sole proprietors, partnerships, and firms operating under a business name to gain legal recognition and operate seamlessly within the Nigerian market.',
              '1. Mandatory Registration: Individuals, firms, or corporations conducting business under a name other than their own must register that business name with the CAC within 28 days of commencing business. This requirement ensures legal recognition and compliance with Nigerian business laws.',
              '2. Required Information: The registration statement must include:',
              '3. Prohibited and Restricted Names: Certain names are restricted or prohibited to prevent misrepresentation and protect public interest. Names that are identical to existing registered names, suggest governmental patronage, or are deemed undesirable are not permitted.',
              '4. Legal Implications of Non-Registration: Operating a business without the required registration is unlawful. Unregistered businesses may face legal penalties and lack the legal standing to enforce contracts or seek legal remedies.',
              'By adhering to these guidelines, businesses ensure compliance with Nigerian laws, gain legal recognition, and build trust with clients and stakeholders.',
            ],
          },
          {
            id: 'service-ui-ux-design',
            title: 'Key Aspects of Company Incorporation',
            content: [
              'Under the Companies and Allied Matters Act (CAMA) 2020, the Corporate Affairs Commission (CAC) oversees the incorporation and regulation of companies in Nigeria. This framework ensures that companies operate within legal parameters, promoting transparency and accountability.',
              'Types of Companies:',
              '1. Private Company Limited by Shares: Requires a minimum of one shareholder and restricts the transfer of shares.',
              '2. Public Company Limited by Shares: Requires a minimum of two shareholders and can offer shares to the public.',
              '3. Unlimited Company: Shareholders have unlimited liability for the company\'s debts.',
              '4. Company Limited by Guarantee: Primarily for non-profit purposes, where members\' liability is limited to a predetermined amount.',
              '2. Minimum Share Capital:',
              '3. Single Shareholder/Director Provision:',
              '4. Statement of Compliance:',
              '5. Company Name Reservation and Registration:',
              '6. Articles of Association:',
              '7. Filing Requirements:',
              '8. Beneficial Ownership Disclosure:',
              'Adherence to these provisions ensures that companies in Nigeria operate legally and maintain good corporate governance practices.',
            ],
          },
          {
            id: 'service-animation',
            title: 'Key Aspects of Incorporated Trustees:',
            content: [
              'Under the Companies and Allied Matters Act (CAMA) 2020, the Corporate Affairs Commission (CAC) oversees the incorporation and regulation of Incorporated Trustees in Nigeria. This legal framework facilitates the formal registration of non-profit organizations, such as religious, educational, literary, scientific, social, developmental, cultural, sporting, or charitable bodies, granting them corporate status and legal recognition.',
              '1. Eligibility for Incorporation:',
              '2. Application Requirements:',
              '3. Effect of Incorporation:',
              '4. Common Seal:',
              '5. Constitution:',
              '6. Alteration of Constitution:',
              '7. Dissolution:',
              'By adhering to these provisions, non-profit organizations in Nigeria can achieve legal recognition, ensuring transparency, accountability, and the ability to effectively pursue their objectives.',
            ],
          },
          {
            id: 'service-development',
            title: 'Key Features of Limited Partnerships',
            content: [
              'A Limited Partnership (LP) is a business arrangement where at least one partner has unlimited liability (General Partner), and the others have liability limited to their contributions (Limited Partners).',
              '1. Key Features of Limited Partnerships:',
              '2. Registration Process:',
              '3. Legal Status & Operations:',
              '4. Dissolution of a Limited Partnership:',
              'This structure allows businesses to attract investors while ensuring clear liability limitations, making it a preferred model for investment-focused enterprises.',
            ],
          },
          {
            id: 'service-photography',
            title: 'Limited Liability Partnership (LLP) Under CAMA 2020',
            content: [
              'A Limited Liability Partnership (LLP) is a business structure that combines the flexibility of a partnership with the legal protection of limited liability.',
              '1. Key Features of LLP:',
              '2. Registration Process:',
              '3. Legal Status & Operations:',
              '4. Dissolution of an LLP:',
              'LLPs provide a modern and flexible alternative to traditional partnerships and companies, making them an attractive option for professional firms, consulting businesses, and joint ventures.',
            ],
          },
        ].map((service, index) => (
          <div
            className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
            id={service.id}
            role="tabpanel"
            key={index}
          >
            <div className="row">
              <div className="col-lg-4 mb-md-40 mb-xs-30 wow linesAnimIn" data-splitting="lines">
                <blockquote className="mt-0 mb-0">
                  <h4 className="services-title">{service.title}</h4>
                  <p className="text-gray mb-0">{service.content[0]}</p>
                </blockquote>
              </div>
              <div className="col-md-6 col-lg-4 mb-sm-30 wow linesAnimIn" data-splitting="lines">
                {service.content.slice(1, 3).map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
              <div className="col-md-6 col-lg-4 wow linesAnimIn" data-splitting="lines">
                {service.content.slice(3).map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End Tab Panes */}
    </div>
  </section>
  {/* End Services Section */}

  {/* Divider */}
  <hr className="mt-0 mb-0" />
  {/* End Divider */}

  {/* Benefits Section */}
  <section className="page-section">
    <div className="container position-relative">
      <div className="row">
        {/* Section Text */}
        <div className="col-lg-5 col-xl-5 d-flex align-items-center mb-md-60 mb-sm-40">
          <div className="w-100">
            <h2 className="section-caption mb-30 mb-xs-10">Our Expertise</h2>
            <h3 className="section-title mb-30">Corporate Structuring</h3>
            <p className="section-descr mb-50 mb-sm-30">
              Expertise in registering Business Names, Companies, Incorporated Trustees, Limited Partnerships (LP), and Limited Liability Partnerships (LLP).
            </p>
            <div className="row mt-sm-n10">
              <div className="col-md-6 mt-sm-10">
                <div className="number-3-title black">Dispute Resolution</div>
                <div className="number-3-descr">Settling disputes related to company registration</div>
              </div>
              <div className="col-md-6 mt-sm-10">
                <div className="number-3-title black">Corporate Enforcement</div>
                <div className="number-3-descr">Imposing penalties and enforcement actions</div>
              </div>
            </div>
          </div>
        </div>
        {/* End Section Text */}

        {/* Image Column */}
        <div className="col-lg-7 col-xl-6 offset-xl-1 d-flex align-items-center">
          <div className="position-relative">
            {/* Image */}
            <div className="position-relative overflow-hidden">
              <img src="images/services-image.jpg" className="image-fullwidth relative" alt="Image Description" />
            </div>
            {/* End Image */}
          </div>
        </div>
        {/* End Image Column */}
      </div>
    </div>
  </section>
  {/* End Benefits Section */}

  {/* Parallax Image Section */}
  <section className="page-section bg-gray-light-1 bg-scroll pb-0 mb-100 mb-md-70 mb-sm-50 z-index-1" style={{ backgroundImage: 'url(images/hero.png)' }}>
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
          <h2 className="section-caption mb-xs-10 wow fadeInUp">Our Values</h2>
          <h3 className="section-title mb-60 mb-sm-40">
            <span className="wow charsAnimIn" data-splitting="chars">
              Utilizing digital transformation to enhance service delivery.
            </span>
          </h3>
          <div className="overflow-hidden mb-n100 mb-md-n70 mb-sm-n50">
            <img src="images/about-image-2.jpg" className="wow scaleOutIn" data-wow-offset="50" alt="Image Description" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Parallax Image Section */}

  {/* Steps Section */}
  <section className="page-section">
    <div className="container position-relative">
      <div className="row mb-60 mb-sm-40">
        <div className="col-md-8 col-lg-6">
          <h2 className="section-title mb-0">Streamlining Your CAC Processes</h2>
        </div>
        <div className="col-lg-6 pt-20 pt-md-30">
          <p className="text-gray mb-0">
            We simplify the complexities of dealing with the Nigerian Corporate Affairs Commission (CAC). Our services cover all stages, from pre-incorporation to post-incorporation, ensuring your business remains compliant and efficient.
          </p>
        </div>
      </div>

      <div className="row mt-n30">
        {[
          {
            step: 'Step 1',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 22v-16h14v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-5.362zm16-7.614v-10.386h-18v20h8.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-4v-1h4v1zm6-4h-10v1h10v-1zm0-3h-10v1h10v-1zm1-7h-17v19h-2v-21h19v2z" />
                  </svg>
                ),
                title: 'Pre-Incorporation Services',
                description:
                  'From company name availability checks to preparing all necessary documents, we guide you through the initial stages of business registration with the CAC.',
              },
              {
                step: 'Step 2',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-6-6h-9.667l-5.333 4v-4h-3v-14.001h18v14.001zm-9-4.084h-5v1.084h5v-1.084zm5-2.916h-10v1h10v-1zm0-3h-10v1h10v-1z" />
                  </svg>
                ),
                title: 'Incorporation & Registration',
                description:
                  'We handle the complete registration process, including filing all necessary documents and obtaining your certificate of incorporation from the CAC.',
              },
              {
                step: 'Step 3',
                icon: (
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-6-6h-9.667l-5.333 4v-4h-3v-14.001h18v14.001zm-9-4.084h-5v1.084h5v-1.084zm5-2.916h-10v1h10v-1zm0-3h-10v1h10v-1z" />
                  </svg>
                ),
                title: 'Post-Incorporation Compliance',
                description:
                  'We assist with all post-incorporation requirements, including annual returns, changes in company structure, and other regulatory filings with the CAC.',
              },
            ].map((step, index) => (
              <div className="col-md-6 col-lg-4 d-flex align-items-stretch mt-30 wow fadeIn" data-wow-duration="1.2s" data-wow-delay={`${index * 0.15}s`} key={index}>
                <div className="features-2-item pt-sm-40 pb-sm-40">
                  <div className="features-2-label">{step.step}</div>
                  <div className="features-2-icon">{step.icon}</div>
                  <h4 className="features-2-title">{step.title}</h4>
                  <div className="features-2-descr">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Steps Section */}

      {/* Divider */}
      <hr className="mt-0 mb-0" />
      {/* End Divider */}

      {/* Call Action Section */}
      <section className="page-section">
        <div className="container position-relative">
          {/* Decorative Waves */}
          <div className="position-relative">
            <div className="decoration-21 d-none d-lg-block" data-rellax-y data-rellax-speed="0.7" data-rellax-percentage="0.5">
              <img src="images/decoration-3.svg" alt="" />
            </div>
          </div>
          {/* End Decorative Waves */}

          <div className="row text-center wow fadeInUp">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <p className="section-descr mb-50 mb-sm-30">
                From pre-incorporation to post-incorporation, we provide comprehensive CAC solutions that drive business growth and success.
              </p>
              <div className="local-scroll">
                <a href="/contact" className="btn btn-mod btn-large btn-round btn-hover-anim">
                  <span>Contact us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
            
            </div>
  )
}

export default ServicesPage