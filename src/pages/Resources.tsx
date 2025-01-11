'use client'
import {  clip2, group, pdf } from '../../public/assests'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React, { useState } from 'react'

const list = ['Companies Regulations 2021', 'CAMA 2020  ', 'Service Charter', 'Companies Regulations 2021', 'CAMA 2020  ', 'Service Charter']

const Resources = () => {
    const [isActive, setIsActive] = useState('first')
  return (
    <div className='bg-primary flex flex-col'>
        <Header />
        <section className="flex flex-col mt-[8rem] items-center">
            <div className="relative flex">
            <div className="absolute -top-7 hidden lg:block  -left-5 rounded-full bg-accent w-[80px] h-[80px]"/>
            <div className=" flex z-20">
            <p className="text-[20px] md:text[4rem] font-bold text-black ">Resources</p>
            </div>
            </div>
            <div className="mt-[4rem] w-full overflow-hidden flex flex-col items-center  lg:flex-row self-start px-[3rem] relative">
            <div className="absolute top-[2rem] md:top-4 right-[0rem] md:right-[-10rem] lg:right-[0rem]">
                    <Image src={group} alt='group' />
                    </div>
                <div className="flex lg:flex-col flex-row z-10 mb-16 lg:mb-0 gap-2 md:gap-4 pb-8 lg:pb-0 md:pr-8 border-b border-b-[#4D6C4A] lg:border-b-0 lg:border-r border-r-[#4D6C4A]  ">
                    <div onClick={() => setIsActive('first')} className={`rounded-md gradient-hover  group  cursor-pointer ${isActive === 'first' ? 'border bkls text-white' : ''} border-secondary md:w-[16.4375rem] md:h-[244px] px-2 md:px-8 py-4`}>
                        <p className={`"text-[13px] md:text-[20px] text-black  group-hover:text-white font-medium md:font-bold ${isActive === 'first' ? ' text-white' : ''}`}>Corporate Governance and Regulatory Framework: Key Legal and Operational Documents</p>
                    </div>
                    <div onClick={() => setIsActive('second')} className={`rounded-md gradient-hover  group  cursor-pointer ${isActive === 'second' ? 'border bkls text-white' : ''} border-secondary md:w-[16.4375rem] md:h-[244px] px-2 md:px-8 py-4`}>
                        <p className={`"text-[13px] md:text-[20px] text-black  group-hover:text-white font-medium md:font-bold ${isActive === 'second' ? ' text-white' : ''}`}>Corporate Administration and Compliance Forms: Applications, Notices, and Returns</p>
                    </div>
                </div>
                <div className="md:ml-8  z-10  flex flex-col">
                    <div className="grid grid-cols-3 gap-y-16  ">
                        {list.map((item: string, index: number) => (
                            <div key={index} className="flex flex-col gap-4 cursor-pointer  items-center">
                                <Image src={pdf} alt='' width={202} />
                                <p className="md:text-[18px] text-[13px] text-center text-black">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-8 ">
                        <div className="w-[12px] h-[11px] bg-[#D9D9D9] rounded-full"/>
                        <div className="w-[12px] h-[11px] bg-[#4D6C4A] rounded-full"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="relative flex flex-col mt-[5rem] mx-[3rem]">
        <div className="absolute -top-16 lg:-top-8 left-[-3rem]">
            <Image src={clip2} alt='clip' />
          </div>
            <p className="lg:text-[2.5rem] text-[25px] md:text-[30px] z-10 text-black">Procedures for <br /> New Service Delivery</p>
            <p className="lg:text-[18px] text-[13px] md:text-[15px] z-10 lg:w-[870px] mt-8 text-black">Pursuant to the earlier notice on the implementation of the new service delivery framework dated 6th August 2020, the general public and our esteemed customers are reminded that the physical presence of customers will be dispensed within the following offices: <br />
            Lagos (Alausa), Wuse Zone 5 as well as the Head office  with effect from the 31  st <br /> August 2020 except on appointment.</p>
            <button className='md:text-[24px] text-[14px] z-10 text-black w-[174px] lg:h-[42px] rounded-[8px] mt-8  lg:self-center border-[#4D6C4A] border-2 gradient-hover   '>Procedures</button>
        </section>

        <section className="text-black z-10 my-[10rem] flex flex-col mx-[3rem] items-center lg:mx-[5rem]">
        <p className="lg:text-[2.5rem] text-[25px] md:text-[30px] z-10 text-black">Important Links</p>
            <div className="md:grid flex flex-col gap-8 grid-cols-3 lg:gap-[8rem] justify-between">
                <a className="lg:text-[20px] underline cursor-pointer hover:text-red-500  md:text-[18px] text-[13px] lg:w-[258px]">2022 National Inherent Risk  Assessment (NIRA) of Legal Persons & Legal Arrangements in Nigeria</a>
                <a className="lg:text-[20px] underline  cursor-pointer hover:text-red-500 md:text-[18px] text-[13px] lg:w-[258px]">Publication of Nigeria NIRA reports on Money Laundering, Terrorist Financing, Proliferation Financing, Legal Persons & Legal Arrangements and Money Laundering & Terrorist Financing in the Extractive Sector</a>
                <a className="lg:text-[20px] underline cursor-pointer hover:text-red-500  md:text-[18px] text-[13px] lg:w-[258px]">Registration Reports</a>
            </div>
            <div className="mt-[5rem]  border text-center rounded-md border-secondary w-[334px] h-[212px] flex flex-col justify-between py-4 px-2">
                <p className="text-[18px] md:text-[20px]">Same day Post <br /> Incorporation</p>
                <p className="md:text-[18px] text-[14px] text-center">Desk Officer: Abdulrazak A. Galadima <br />
                    email: samedaypost@cac.gov.ng <br />
                    Phone: 08090555542</p>
            </div>
        </section>

        <Footer />
        </div>
  )
}

export default Resources