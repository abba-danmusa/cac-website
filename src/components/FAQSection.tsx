'use client';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "01. What do I do if I made a mistake with my reserved name?",
      answer:
        "You may wait for the name approval to expire after 60 days or proceed with the registration with the reserved name and apply for a change of name after registration.",
    },
    {
      question: "02. How do I get a refund?",
      answer:
        "To request a refund, submit an application stating the reason clearly. Include your name, phone number, account number, and active email for communication. Attach proof of payment (Remita Retrieval Reference), including all receipts for multiple payments. A 5% administrative fee applies if the refund is due to the applicant’s fault. Pre-incorporation and post-incorporation refunds go to the Payer and Principal, respectively. Send applications to audit@cac.gov.ng.",
    },
    {
      question: "03. Why do I find it difficult to upload picture, signature or documents?",
      answer:
        "This usually occurs if the format and size of the picture/signature/documents you want to upload are not in the prescribed format. The format for pictures and signatures is jpeg/PNG while the format for documents is PDF. The maximum size for file upload is 5MB.",
    },
    {
      question: "04. What should I do if CAC asked me to my issued share capital?",
      answer:
        "This happens where the company’s issued share capital is lower than the prescribed issued share capital for the proposed object(s). You may resolve this by either expunging the specific object(s) or increasing the issued share capital to meet the prescribed minimum issued share capital. Where the issued share capital is increased to meet the prescribed minimum issued share capital, filing fees and stamp duties should be paid on the increase through remita.net and stampduty.gov.ng respectively. After payment, receipts for the payments should be uploaded as 'OTHERS' under the upload options.",
    },
  ];

  return (
    <section className="page-section">
      <div className="container position-relative">
        <div className="row">
          {/* Images */}
          <div className="col-lg-7 d-flex align-items-start mb-md-60 mb-xs-30">                                                               
                <div className="call-action-2-images">
                    
                    <div className="call-action-2-image-1" data-rellax-y data-rellax-speed="0.5" data-rellax-percentage="0.7">
                        <img src="images/FAQ-1.png" alt="Image Description" className="wow scaleOutIn" data-wow-duration="1.2s" data-wow-offset="255" />
                    </div>
                    
                    <div className="call-action-2-image-2">
                        <img src="images/FAQ-2.png" alt="Image Description" className="wow scaleOutIn" data-wow-duration="1.2s" data-wow-offset="134" />
                    </div>
                    
                    <div className="call-action-2-image-3" data-rellax-y data-rellax-speed="-0.5" data-rellax-percentage="0.5">
                        <img src="images/FAQ-3.png" alt="Image Description" className="wow scaleOutIn" data-wow-duration="1.2s" data-wow-offset="0" />
                    </div>
                    
                </div>                                                                              
            </div>
          {/* End Images */}

          {/* Text */}
          <div className="col-lg-5 d-flex align-items-center">
            <div className="wow fadeInUp" data-wow-duration="1.2s" data-wow-offset="255">
              <h2 className="section-title mb-50 mb-sm-20">Frequently Asked Questions</h2>
              <div className="call-action-2-text mb-50 mb-sm-40">
                {/* Accordion */}
                <dl className="accordion">
                  {faqItems.map((item, index) => (
                    <div key={index}>
                      <dt className="d-flex justify-content-between align-items-center p-3  rounded" onClick={() => toggleAccordion(index)}>
                        <a href="#" onClick={(e) => e.preventDefault()}>{item.question}</a>
                        <FaChevronDown className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                      </dt>
                      <dd className={`text-gray p-3 ${openIndex === index ? 'd-block' : 'd-none'}`}>
                        {item.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
                {/* End Accordion */}
              </div>
              <div className="local-scroll">
                <a href="/fqs" target="_blank" className="btn btn-mod btn-large btn-round btn-hover-anim">
                  <span>Ask for more information</span>
                </a>
              </div>
            </div>
          </div>
          {/* End Text */}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
