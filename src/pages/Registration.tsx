import { clip2, group } from '../../public/assests'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const Registration = () => {
  return (
    <div className='bg-primary flex flex-col '>
    <Header />
    <div className="relative flex flex-col items-center overflow-hidden ">
    <div className="absolute top-[2rem] lg:top-[2rem] right-[-4rem] lg:right-[0rem]">
        <Image src={group} alt='group' />
      </div>
    <div className="flex flex-col  items-center mt-[10rem] mb-[4rem]  md:mt-[10rem] md:mb-[3rem]  ">
                <p className="md:text-[2.5rem] text-[25px]  z-30 text-black">Company Registration</p>
                <p className="text-black text-center z-30 font-normal text-[13px] md:text-[18px]">
                Step by step Guide
                </p>
                <div className="flex w-full lg:flex-row flex-col gap-8 px-[2rem] md:px-[7rem] lg:justify-between z-10 mt-[8rem] ">
                    <div className="md:w-[517px] text-center  border border-secondary rounded-lg flex-col px-[1rem] py-4">
                        <p className="text-[20px] md:text-[30px] text-secondary">How to Register a Private/ <br />public Company</p>
                        <p className="text-black text-[13px] mt-8 ">
                            1. Check for availability of proposed company name <a href="https://publicsearch.cac.gov.ng" className='underline font-bold'>(click here)</a>{" "}<a href="https://services.cac.gov.ng/login" className='underline font-bold'>Read more <br />
                             about name reservation</a> and Reserve a new Name   <a href="https://services.cac.gov.ng" className='underline font-bold'>(click here)</a> <br />
                            2. Complete pre-registration form and upload relevant documents <a href="https://services.cac.gov.ng" className='underline font-bold'>(Online <br /> using Company Registration Portal)</a> <br />
                           3. Pay filing and Stamp duty fees  <a href="https://cac.gov.ng/schedule-of-fees/" className='underline font-bold'>Check the fees for our Services here </a> <br />
                            Now registration is end-to-end on the <a href="https://services.cac.gov.ng" className='underline font-bold'>COMPANY REGISTRATION <br /> PORTAL (CRP)</a> <br />
                            with electronic Certificate of Registration and Certified Extract of <br /> Registration information</p>
                      
                    </div>
                    <div className="md:w-[517px]  border text-center border-secondary rounded-lg px-[1rem] py-4">
                    
                    <p className="text-[20px] md:text-[30px] text-secondary">How to Register a <br /> Limited Guarantee</p>
                    <p className="text-black text-[13px] mt-8 ">
                   1. Reserve a Name   <a href="https://services.cac.gov.ng" className='underline font-bold'>(click here)</a> <br />
                    2. Fill Registration Form and upload relevant documents <a href="https://services.cac.gov.ng" className='underline font-bold'>(Online using <br /> Company Registration Portal) </a> <br />
                   3. Pay filing fee and Stamp Duty <br />
                   4. The Commission is obliged to obtain approval of the Attorney General of <br /> the Federation before registration of the Company Limited by Guarantee.</p>
                    </div>
                </div>
        </div>
            </div>
            <section className='relative flex mb-[12.5rem] h-[20rem]'>
            <div className="absolute top-[5rem] lg:-top-[2rem] left-[-3rem]">
                        <Image src={clip2} alt='clip' />
                        </div>
           
            </section>
            <Footer />
    </div>
  )
}

export default Registration