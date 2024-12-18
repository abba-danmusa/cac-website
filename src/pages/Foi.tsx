import { clip2, group } from '@/assests'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const Foi = () => {
  return (
    <div className='bg-primary flex flex-col '>
    <Header />
    <div className="relative flex flex-col items-center overflow-hidden ">
    <div className="absolute top-[2rem] lg:top-[2rem] right-[-4rem] lg:right-[0rem]">
        <Image src={group} alt='group' />
      </div>
    <div className="flex flex-col  items-center mt-[10rem] mb-[4rem] px-4 md:px-0  md:my-[10rem]  ">
                <p className="md:text-[2.5rem] text-[25px]  z-30 text-black">Freedom Of Information Act </p>
                <p className="text-black text-center mt-[2rem] z-30 font-normal text-[13px] md:text-[18px]">
                The Freedom of Information Act is an Act to make public records and information more freely available, provide for <br /> public access to public records and information, protect public records and information to the extent consistent with <br /> public interest and protection of personal privacy, protect serving public officers from adverse consequences of <br /> disclosing certain information without authorization and establish procedures for the achievement of those purposes <br /> and, for matters related therewith. <br />
                For any inquiries please contact: <br />

                Head of Freedom of Information Act Unit (Assistant Director, Compliance) <br />
                Mr. Nurudeen Ismail <br />
                e-mail: foi@cac.gov.ng
                </p>
        </div>
            </div>
            <section className='relative flex mb-[12.5rem]'>
            <div className="absolute top-[5rem] lg:-top-[2rem] left-[-3rem]">
                        <Image src={clip2} alt='clip' />
                        </div>
            <div className="flex w-full lg:flex-row flex-col gap-8 px-[2rem] md:px-[7rem] lg:justify-between z-10 mt-[8rem] mb-[2rem]">
                    <div className="md:w-[517px] text-center h-[191px] lg:h-auto border border-secondary rounded-lg flex-col px-[1rem] py-4">
                        <p className="text-[18px] md:text-[30px] text-secondary">2020 Procurement plan</p>
                      
                    </div>
                    <div className="md:w-[517px]  border text-center border-secondary rounded-lg px-[1rem] py-4">
                    <p className="text-[16px] md:text-[20px] text-secondary">EXPRESSION OF INTEREST: DESIGN, DEVELOPMENT & IMPLEMENTATION OF ENTERPRISE REGISTRY SOFTWARE AND PROVISION OF MANAGED DEDICATED INFRASTRUCTURE FOR THE HOSTING OF THE COMMISSION ONLINE SERVICES</p>
                    </div>
                </div>
            </section>
            <Footer />
    </div>
  )
}

export default Foi