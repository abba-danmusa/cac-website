import { clip2, group } from '../../public/assests'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const IncorporatedTR = () => {
    
  return (
    <div className='bg-primary flex flex-col'>
    <Header />
    <div className="relative flex flex-col items-center overflow-hidden ">
    <div className="absolute top-[2rem] lg:top-[2rem] right-[-4rem] lg:right-[0rem]">
        <Image src={group} alt='group' />
      </div>
    <div className="flex flex-col  items-center mt-[10rem] mx-[2rem] md:mx-0 mb-[4rem]  md:my-[10rem]  ">
                <p className="md:text-[2.5rem] text-[20px]  z-30 text-black">Incorporated Trustees Registration</p>
                <p className="text-black text-center  z-30 font-normal text-[13px] md:text-[18px]">
                Step by step Guide
                </p>
                 <p className="text-black text-center mt-[4rem] z-30 font-normal text-[13px] md:text-[18px]">
                1. Check for availability of proposed company name <a href="https://publicsearch.cac.gov.ng" className='underline font-bold'>(click here) </a><a href="https://services.cac.gov.ng/login" className='underline font-bold'>Read more about name reservation</a> and Reserve a new Name   <a href="https://services.cac.gov.ng" className='underline font-bold'>(click <br /> here)</a> <br />
                2. Complete pre-registration form and upload relevant documents <a href="https://services.cac.gov.ng" className='underline font-bold'>(Online using Company Registration Portal)</a> <br />
              3.  Pay filing and Stamp duty fees  <a href="https://cac.gov.ng/schedule-of-fees/" className='underline font-bold'>Check the fees for our Services here</a> <br />
                Now registration is end-to-end on the <a href="https://services.cac.gov.ng" className='underline font-bold'>COMPANY REGISTRATION PORTAL (CRP)</a> <br />
                with electronic Certificate of Registration and Certified Extract of Registration information
                </p>
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

export default IncorporatedTR