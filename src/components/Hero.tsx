"use client";

import React from "react";
import NigeriaMap from "./Maps";
import NewsSlider from "./NewsSlider";
import SocialMediaBar from "./SocialMediaBar";
import CorporateRegistry from "./CorporateRegistry";

const newsItems = [
  {
    icon: "fa fa-codepen",
    caption: "COMMENCEMENT OF STRIKING OFF 100,000 COMPANIES FROM THE REGISTER OF COMPANIES",
    text: " The General Public is hereby informed that the Commission has compiled, for striking off, a list of 100,000 (one hundred thousand) companies which it has reasonable cause to believe are not carrying on business or have not been in operation for 10 years or have not complied with the provisions of the Companies and Allied Matters Act for a consecutive period of 10 years, including the requirement of filing of Annual Returns. The affected companies are advised to activate their status by filing the requisite annual returns with details of Persons with Significant Control and sending activation emails to activation@cac.gov.ng (where applicable) within 90 days of this publication to avoid being struck off.\nPlease note that it shall be unlawful for any company struck off the Register of Companies to carry on business unless it is first restored to the Register by an order of the Federal High Court.\nTo check the list of companies for striking off, please click on the link below:\nhttps://www.cac.gov.ng/wp-content/uploads/2024/12/List-of-Companies.xlsx\nSigned:\nManagement\nCAC… Committed to Prompt and Efficient Service Delivery",
    date: "30th December 2024",
  },
  {
    icon: "fa fa-newspaper-o",
    caption: "NOTICE OF STRIKING OFF COMPANIES FROM THE REGISTER OF COMPANIES",
    text: "The General public may recall that the Commission issued Notice of Intention to strike off names of Companies which the Commission has reasonable cause to believe are not carrying out business or are otherwise dormant by reason of not filing Annual Returns fora period of 10 years.Statutory Period of 90 days was given to such companies to file the requisite Annual Returns and send activation email to activation@cac.gov.ng. Companies that have complied with the advisory have been removed from the list. The Commission pursuant to its powers granted in Section 692 (4) of the Companies and Allied Matters Act No. 3 of 2020 has stricken-off the names of the companies that have failed or refused to update the Annual returns.\nCompanies stricken-off the register are deemed to have been dissolved from the date of publication.It is illegal to enter into any transaction or deal with a company that has been dissolved.\nClick the below link to view the detailed list\nhttps://www.cac.gov.ng/wp-content/uploads/2024/11/ANNUAL_RETURNS-Complied-Defaulters.xlsx\nSigned\nManagement",
    date: "25th November 2024",
  },
  {
    icon: "fa fa-television",
    caption: "CONGRATULATIONS TO THE NEWLY APPOINTED HONORABLE MINISTER INDUSTRY TRADE AND INVESTMENT",
    text: "The Corporate Affairs Commission (CAC) extends its heartfelt congratulations to Dr. Jumoke Oduwole on her appointment as the new Minister of Industry, Trade and Investment. We are confident that her wealth of experience and dedication to public service will greatly contribute to the growth and development of Nigeria's industrial and trade sectors. We look forward to working closely with her to achieve our shared goals of economic prosperity and sustainable development. Congratulations once again, Dr. Oduwole!",
    date: "20th November 2024",
  },
  // {
  //   icon: "fa fa-diamond",
  //   caption: "GUIDELINES FOR RECAPITALIZATION OF BANKS AND OTHER FINANCIAL INSTITUTIONS",
  //   text: "Unlock exclusive premium content with our special subscription.",
  // },
];

const HeroSection: React.FC = () => {
  return (
    <section className="bg-primary w-full  min-h-screen flex flex-col md:flex-row gap-4 md:items-center ">
      <SocialMediaBar />
      {/* Map Container */}
      <div className="mt-[3rem]  md:mt-0 flex-1 flex  ">
        <NigeriaMap />
      </div>

      {/* News Slider Container */}
      <div className=" w-full  md:w-1/2 lg:pr-[8rem] px-4">
        <CorporateRegistry />
        {/* <NewsSlider items={newsItems} /> */}
      </div>
    </section>
  );
};

export default HeroSection;