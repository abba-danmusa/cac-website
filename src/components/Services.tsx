'use client';

import { useState } from 'react';

const ServicesSection = () => {
    const [activeTab, setActiveTab] = useState("services-item-1");

    return (
        <section className="page-section" id="services">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-lg-6 mb-md-60 mb-sm-30" data-aos="fade-up-right">
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
                                { id: "services-item-1", label: "Business Names", number: "01" },
                                { id: "services-item-2", label: "Companies", number: "02" },
                                { id: "services-item-3", label: "Inc. Trustees", number: "03" },
                                { id: "services-item-4", label: "Pre-Incorporation", number: "04" },
                                { id: "services-item-5", label: "Post-Inc.", number: "05" }
                            ].map((tab) => (
                                <li role="presentation" key={tab.id}>
                                    <a
                                        href={`#${tab.id}`}
                                        className={activeTab === tab.id ? "active" : ""}
                                        aria-controls={tab.id}
                                        role="tab"
                                        aria-selected={activeTab === tab.id}
                                        data-bs-toggle="tab"
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        {tab.label} <span className="number">{tab.number}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-6 d-flex wow fadeInLeft" data-wow-delay="0.55s" data-wow-offset="275"  data-aos="fade-up-left">
                        <div className="tab-content services-content">
                            {[
                                {
                                    id: "services-item-1",
                                    title: "Business Name Reg. Steps",
                                    steps: [
                                        "Check Name Availability.",
                                        "Complete Registration Form.",
                                        "Upload Required Documents.",
                                        "Make Payment Online.",
                                        "Get Registration Certificate."
                                    ],
                                    image: "images/cac.png",
                                    alt: "Head Office, Corporate Affairs Commission"
                                },
                                {
                                    id: "services-item-2",
                                    title: "Company Registration Steps",
                                    steps: [
                                        "Check Name Availability.",
                                        "Reserve the Company Name.",
                                        "Complete the Pre-Registration Form (CAC1.1).",
                                        "Upload Required Documents.",
                                        "Pay the Applicable Filing Fee.",
                                        "Get Certificate of Incorporation."
                                    ],
                                    image: "images/services-company.png",
                                    alt: "A Warm Business Handshake"
                                },
                                {
                                    id: "services-item-3",
                                    title: "Incorporated Trustee Steps",
                                    steps: [
                                        "Check Name Availability.",
                                        "Reserve the Name.",
                                        "Complete the Application Form.",
                                        "Upload Required Documents.",
                                        "Pay the Applicable Filing Fee.",
                                        "Get Certificate of Incorporation."
                                    ],
                                    image: "images/services-incorporation.png",
                                    alt: "Image Description"
                                },
                                {
                                    id: "services-item-4",
                                    title: "Pre-Incorporation Services",
                                    steps: [
                                        "Business Advisory & Consultation.",
                                        "Name Availability Search.",
                                        "Drafting Legal Documents.",
                                        "Obtaining Necessary Approvals."
                                    ],
                                    image: "images/services-preincorporation.png",
                                    alt: "Image Description"
                                },
                                {
                                    id: "services-item-5",
                                    title: "Post-Incorporation Services",
                                    steps: [
                                        "Tax Identification Number (TIN) Registration.",
                                        "Business Bank Account Opening.",
                                        "Regulatory & Compliance Filings.",
                                        "Licensing & Permits Acquisition.",
                                        "Corporate Governance & Secretarial Services."
                                    ],
                                    image: "images/services-postincorporation.png",
                                    alt: "Image Description"
                                }
                            ].map((content) => (
                                <div
                                    key={content.id}
                                    className={`tab-pane services-content-item fade ${activeTab === content.id ? 'show active' : ''}`}
                                    id={content.id}
                                    role="tabpanel"
                                >
                                    <div className="services-text">
                                        <div className="services-text-container">
                                            <h4 className="services-title">{content.title}</h4>
                                            <p className="text-gray mb-0">
                                                {content.steps.map((step, index) => (
                                                    <span key={index}>{step}<br /></span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                    <img className="services-image" src={content.image} alt={content.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
  