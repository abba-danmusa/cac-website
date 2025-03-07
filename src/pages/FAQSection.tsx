// import React from 'react';
'use client'
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function FAQPage() {
    const [openItems, setOpenItems] = useState<any>([]);


  const toggleItem = (index: any) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item: any) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };


  const faqItems = [
    {
      question:
        'How do i resolve duplication of Directors/Propritor/Partners/Trustee details?',
      answer: (
        <dd className="black">
          <span className="black">
            This may occur in applications submitted using the Public User
            Account. To resolve this, follow the steps below:
          </span>
          <ul>
            <li>
              Edit your profile information by clicking on “Profile” at the top
              right corner of the page
            </li>
            <li>Select Edit</li>
            <li>Complete all the fields</li>
            <li>Save and exit page</li>
            <li>Go back to the dashboard</li>
            <li>Select delete on the duplicated entry</li>
          </ul>
        </dd>
      ),
    },
    {
      question: 'Hhy do I find it difficult to upload picture, signature or document? ',
      answer: (
        <dd className="black">
          This usually occurs if the format and size of the
          picture/signature/documents you want to upload are not in the
          prescribed format. The format for pictures and signatures is jpeg/PNJ
          while the format for documents is PDF. The maximum size for file
          upload is 5MB.
        </dd>
      ),
    },
    {
      question:
        'Why is my payment of filing fees or stamp duty not reflected on the portal, even though i have been debited by my bank?',
      answer: (
        <dd className="black">
          This may be due to a number of factors. To resolve, log in to the
          portal and click on the “Check Payment Status” or “Check Status/Pay
          Stamp Duty” button(s) against the application. In the event that the
          payment is still not reflected, please contact support@remita.net,
          copy dogara@systemspec.com or support@stampduty.gov.ng or your bank.
        </dd>
      ),
    },
    {
      question: 'What do I do if i make a mistake on my reserved name?',
      answer: (
        <dd className="black">
          You may wait for the name approval to expire after 60 days or you may
          proceed with the registration in the reserved name and apply for a
          change of name after registration.
        </dd>
      ),
    },
    {
      question:
        'Why do I get the error report "Invalid Username or Password" when I want to log in to my portal?',
      answer: (
        <dd className="black">
          This may occur when using the wrong credential to log in to your
          portal. To resolve this, use either your e-mail address, phone number
          or accreditation number submitted while creating the account as the
          username for login. If you have forgotten your password, click on
          the “Forgotten Password” button and follow the link sent to your
          e-mail address to change your password.
        </dd>
      ),
    },
    {
      question:
        'What should I do if CAC asks me to change the approved name for the entity after I have submitted the application for registration?',
      answer: (
        <dd className="black">
          Where the CAC asks you to change the approved name for the entity
          after the application has been submitted for registration, you should
          reserve another name and select ‘Name substitution’ as a reason for
          the name reservation. If the new name is approved, then login to CRP
          and click on the ‘resolve query’ on your dashboard.
        </dd>
      ),
    },
    {
      question: 'What should I do if my login credential is showing? ',
      answer: (
        <dd className="black">
          Please ensure that there is steady internet connection on your device
          or use different internet browser or clear your browser’s cache. Also,
          avoid many login attempts with the wrong password or username as the
          system will lock your account. If the issue persists, lodge a
          complaint on the Support Center. In addition, you can log in with your
          email address or accreditation number, or phone number as a
          substitute for a username.
        </dd>
      ),
    },
    {
      question:
        'What should I do if CAC asks me to increase my issued share capital? ',
      answer: (
        <dd className="black">
          This happens where the company’s issued share capital is lower than
          the prescribed issued share capital for the proposed object(s). You
          may resolve this by either expunging the specific object(s) or
          increasing the issued share capital to meet the prescribed minimum
          issued share capital. Where the issued share capital is increased to
          meet the prescribed minimum issued share capital, filing fees and
          stamp duties should be paid on the increase through remita.net and
          stampduty.gov.ng respectively. After payment, receipts for the
          payments should be uploaded as “OTHERS” under the upload options.
        </dd>
      ),
    },
    {
      question: "Did you know the Commission''s Refund Policy?",
      answer: (
        <dd className="black">
          <ul>
            <li>An application for refund stating clearly the reason for refund.</li>
            <li>
              Such application must carry the name, telephone number, account
              number and an active email address, for ease of communication with
              the applicant/beneficiary.
            </li>
            <li>
              Applicant must attach evidence of payment(s) made (i.e. Remita
              Retrieval Reference).
            </li>
            <li>
              Where there are multiple payments in a transaction, all the
              receipts must be attached to the application.
            </li>
            <li>
              Where the reason for refund is as a result of the applicant’s
              fault, a deduction of 5% administrative charge is applicable.
            </li>
            <li>
              Where refund relates to Pre-incorporation and Post-incorporation
              applications, payments shall be made to the Payer and Principal
              respectively.
            </li>
            <li>
              Application for refund shall be forwarded to audit@cac.gov.ng.
            </li>
          </ul>
        </dd>
      ),
    },
    {
      question:
        'How do I ratify the changes in the personal data of director, shareholders, trustee, or proprietor in the process of registration of an entity on the Companies Registration Portal (CRP)?',
      answer: (
        <dd className="black">
          This occur when there is a glitch or internet failure on the device of
          the CRP User, and the cursor is on the wrong information it was
          submitted. Ensure the accuracy of the content of the information
          entered at the PREVIEW step before submitting it.
        </dd>
      ),
    },
    {
      question:
        'How do I upload a document that is requested when the application is queried and is not listed in the document upload?',
      answer: (
        <dd className="black">
          Any document that is relevant and is not listed in the list of
          documents upload platform could be uploaded under OTHERS.
        </dd>
      ),
    },
    {
      question:
        'What should I do if the information on my entity is incorrect on the paid service https://search.cac.gov.ng?',
      answer: (
        <dd className="black">
          What should I do if the information on my entity is incorrect on the
          paid service https://search.cac.gov.ng?
        </dd>
      ),
    },
  ];
  return (
    <>
      <section
        className="page-section pb-100 pb-sm-60 bg-gray-light-1  parallax-5"
        style={{ backgroundImage: 'url(images/hero.png)' }}
      >
        <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white"></div>
        <div className="container position-relative pt-50">
          <div className="text-center">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h2
                  className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  FAQ
                </h2>
                <h1 className="hs-title-1 mb-0">
                  <span className="wow charsAnimIn" data-splitting="chars">
                    Frequently Asked Questions
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container position-relative">
          <div className="row wow fadeInUp">
          <div className="col-md-8 offset-md-2">
      <dl className="toggle">
        {faqItems.map((item, index) => (
          <React.Fragment key={index}>
            <dt onClick={() => toggleItem(index)} className='d-flex justify-content-between border-b border-[#eee] align-items-center p-3'>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                {item.question}
              </button>
            <FaChevronDown className={`transition-transform ${openItems === index ? 'rotate-180' : ''}`} />
            </dt>
            {openItems.includes(index) && item.answer}
          </React.Fragment>
        ))}
      </dl>
    </div>
          </div>
        </div>
      </section>

      <hr className="mt-0 mb-0" />

      <section className="page-section">
        <div className="container position-relative">
          <div className="position-relative">
            <div
                className="decoration-21 d-none d-lg-block"
                data-rellax-y
                data-rellax-speed="0.7"
                data-rellax-percentage="0.5"
              >
                <img src="images/decoration-3.svg" alt="" />
              </div>
            </div>

            <div className="row wow fadeInUp">
              <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 text-md-start mb-sm-30">
                <p className="section-descr mb-0">
                  Looking for exclusive digital services? Contact us, and we&apos;ll start productive cooperation.
                </p>
              </div>

              <div className="col-md-4 col-lg-3 text-md-end">
                <div className="local-scroll">
                  <a
                    href="/contact"
                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                  >
                    <span>Contact us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  export default FAQPage;