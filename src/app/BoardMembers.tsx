
const BoardMembers = () => {

  return (
    <section className="page-section" id="portfolio">
    <div className="container">
        
        <div className="row mb-60 mb-md-40">
            
            <div className="col-lg-5"> 
                                           
                <h2 className="section-caption mb-xs-10">Board Members</h2>
                
                <h3 className="section-title mb-0"><span className="wow charsAnimIn" data-splitting="chars">Meet Our Board</span></h3>                                
            
            </div>                            
            
            <div className="col-lg-7">
                
                {/* <div className="works-filter text-md-left text-lg-end mt-50 mt-md-30">
                    <a href="#" className="filter active" role="button" aria-pressed="true" data-filter="*">All Members</a>
                    <a href="#branding" className="filter" role="button" aria-pressed="false" data-filter=".branding">RG</a>
                    <a href="#design" className="filter" role="button" aria-pressed="false" data-filter=".design">Chairman</a>
                    <a href="#development" className="filter" role="button" aria-pressed="false" data-filter=".development">Minister</a>
                </div>                                 */}
                                             
            </div>
            
        </div>                       
        
        <ul className="works-grid work-grid-3 work-grid-gut-lg masonry" id="work-grid">
            
            <li className="work-item mt-90 mt-md-0 mix development">
                <a href="images/portfolio/masonry/full-project-1.jpg" className="work-lightbox-link mfp-image">
                    <div className="work-img">
                        <div className="work-img-bg wow-p scalexIn"></div>
                        <img src="images/chief-of-staff.png" alt="Work Description" className="wow-p fadeIn" data-wow-delay="1s" />
                    </div>
                    <div className="work-intro text-start">
                        <h3 className="work-title">Chief Of Staff</h3>
                        <div className="work-descr">
                            Muhammad Sadiq Ali 
                        </div>
                    </div>
                </a>
            </li>
            
            <li className="work-item mix branding design">
                <a href="main-portfolio-single-1.html" className="work-ext-link">
                    <div className="work-img">
                        <div className="work-img-bg wow-p scalexIn"></div>
                        <img src="images/rg-cac.png" alt="Work Description" className="wow-p fadeIn" data-wow-delay="1s" />
                    </div>
                    <div className="work-intro text-start">
                        <h3 className="work-title">Registrar General/CEO</h3>
                        <div className="work-descr">
                            Ishaq Hussaini Magaji SAN
                        </div>
                    </div>
                </a>
            </li>
            
            <li className="work-item mt-90 mt-md-0 mix branding">
                <a href="main-portfolio-single-1.html" className="work-ext-link">
                    <div className="work-img">
                        <div className="work-img-bg wow-p scalexIn"></div>
                        <img src="images/minister-of-trade.png" alt="Work Description" className="wow-p fadeIn" data-wow-delay="1s" />
                    </div>
                    <div className="work-intro text-start">
                        <h3 className="work-title">Minister Of Trade FMITI</h3>
                        <div className="work-descr">
                            Dr. Jumoke Oduwole
                        </div>
                    </div>
                </a>
            </li>
            
            <li className="work-item mix design development">
                <a href="main-portfolio-single-1.html" className="work-ext-link">
                    <div className="work-img">
                        <div className="work-img-bg wow-p scalexIn"></div>
                        <img src="images/chairman-cac.png" alt="Work Description" className="wow-p fadeIn" data-wow-delay="1s" />
                    </div>
                    <div className="work-intro text-start">
                        <h3 className="work-title">Chairman</h3>
                        <div className="work-descr">
                            Hon. Ademola Seriki
                        </div>
                    </div>
                </a>
            </li>
          
            
        </ul>
        
    </div>
</section>
  );
};

export default BoardMembers;