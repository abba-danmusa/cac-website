import { clip2, group } from '../../public/assests'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const Business = () => {
  return (
    <div className='bg-primary flex flex-col '>
    <Header />
    <div className="relative flex flex-col items-center overflow-hidden ">
    <div className="absolute top-[2rem] lg:top-[2rem] right-[-4rem] lg:right-[0rem]">
        <Image src={group} alt='group' />
      </div>
    <div className="flex flex-col  items-center mt-[10rem] mx-[2rem] md:mx-0 mb-[4rem]  md:my-[10rem]  ">
                <p className="md:text-[2.5rem] text-[20px]  z-30 text-black">Business Name Registrations</p>
                <a href='https://pre.cac.gov.ng' className="text-black underline text-center  z-30 font-normal text-[13px] md:text-[18px]">
                Step by step Guide
                </a>
                 <p className="text-black text-center mt-[4rem] z-30 font-normal text-[13px] md:text-[18px]">
                1. Check for availability of the Business Name (click here). Read more about name reservationand Reserve a new Name   (click here) <br />
           2. Complete pre-registration form – CAC-BNo1 and upload relevant registration documents(Online using Company Registration Portal) <br />
           3. Pay filing fee  Check the Fees for our Services here
            <br />
            <br />
            <br />
            Now registration is end-to-end on the COMPANY REGISTRATION PORTAL (CRP) with electronic Certificate of Registration and <br /> Certified Extract of registration information <br />
             Note: Individual/Proprietors can register business names without the services of the legal practitioner, chartered Accountant or <br /> Chartered Secretary.

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

export default Business