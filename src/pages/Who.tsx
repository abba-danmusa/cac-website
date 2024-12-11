import { adminster, clip, effort, group, like, morale } from '@/assests'
import DoubleCycles from '@/components/DoubleCycles'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const Who = () => {
  return (
    <div className='bg-primary flex flex-col'>
        <Header />
        <section className='flex flex-col mt-[10rem] gap-4 mx-8  items-center py-4'>
            <div className="relative  ">
                <div className="flex flex-col  items-center ">
                    <p className="text-[2.5rem] z-30 text-black">Welcome to <span className=" text-secondary">CAC</span></p>
                    <p className="text-black z-30 font-normal text-[20px]">Nigeria's Corporate Registry</p>
                </div>
                <DoubleCycles   z='-20' />
            </div>
            <div className="flex gap-6 mt-[7rem] w-full">
              <div className="">
              <svg width="651" height="439" viewBox="0 0 651 439" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.45" d="M4 2H2V4V435V437H4H647H649V435V4V2H647H4Z" fill="#4D6C4A" stroke="#04E824" strokeWidth="4"/>
            </svg>
              </div>
              <div className="flex flex-col w-full pr-14">
                <p className="text-3xl font-normal  text-center mb-[5rem] text-black">Who we are </p>
                <p className="text-[20px] font-normal text-black">the corporate affairs commission was </p>
              </div>
            </div>
        </section>

        <section className='relative mt-14 flex flex-col ml-[7rem] mr-[5rem] gap-14'>
          <div className="absolute top-2 left-[-9rem]">
            <Image src={clip} alt='clip' />
          </div>
            <div className="flex flex-col">
              <p className="text-[2.5rem] mb-4 text-black font-semibold text-center">Functions of the Commission</p>
              <p className="text-[18px] text-black z-10"> The functions of the Commission as set out in section 7 of the Companies and Allied Matters Act, includes the following:</p>
              <ul className=' ml-16 list-disc pl-5 z-10'>
                <li className="text-[18px] text-black ">To administer the Act, including the regulation and supervision of the formation, incorporation, management and winding up of companies</li>
                <li className="text-[18px] text-black ">To establish and maintain companies registry and offices in all the states of the Federation suitably and adequately equipped to discharge its functions under the Act or any law in respect of which it is charged with responsibility</li>
                <li className="text-[18px] text-black ">Arrange and conduct an investigation into the affairs of any company where the interests of the shareholders and the public so demand</li>
                <li className="text-[18px] text-black ">To undertake such other activities as are necessary or expedient for giving full effect to the provisions of the Act.</li>
                <li className="text-[18px] text-black ">The Commission also registers Business Names, and Incorporated Trustees as well as provides a wide range of ancillary services</li>
              </ul>
            </div>

            <div className="relative mt-8 flex flex-1 justify-center mx-[15rem] gap-14">
            <div className="absolute -top-8 right-[-20rem]">
            <Image src={group} alt='group' />
          </div>
              <div className="border text-center w-[17.625rem] border-secondary rounded-md pt-8 pb-4 px-4 flex flex-col gap-8 ">
                <p className="text-xl text-secondary">Our Vision</p>
                <p className="text-base text-black text-center ">To be a world-class company’s registry providing excellent registration and regulatory services.</p>
              </div>
              <div className="border text-center z-10 w-[17.625rem] border-secondary rounded-md pt-8 pb-4 px-4 flex flex-col gap-8 ">
                <p className="text-xl text-secondary z-10">Our Mission </p>
                <p className="text-base text-black text-center z-10 ">Delivering reliable registration and regulatory services to meet stakeholder expectations and drive economic growth.</p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full mb-[8rem] ">
            <p className="text-[2.5rem] mb-4 text-black font-semibold text-center">Our core Values</p>
              <ul className="flex gap-[4rem] justify-center z-10">
                <li className="flex flex-col gap-4 items-center ">
                  <div className="w-[4.75rem] h-[4.75rem] flex justify-center items-center rounded-full border border-secondary">
                    <Image src={effort} alt='#' />
                  </div>
                  <p className="text-[2.5rem] text-black">Dedication</p>
                </li>
                <li className="flex flex-col gap-4 items-center ">
                  <div className="w-[4.75rem] h-[4.75rem] flex justify-center items-center rounded-full border border-secondary">
                    <Image src={like} alt='#' />
                  </div>
                  <p className="text-[2.5rem] text-black">Courtesy</p>
                </li>
                <li className="flex flex-col gap-4 items-center ">
                  <div className="w-[4.75rem] h-[4.75rem] flex justify-center items-center rounded-full border border-secondary">
                    <Image src={morale} alt='#' />
                  </div>
                  <p className="text-[2.5rem] text-black">Integrity </p>
                </li>
                <li className="flex flex-col gap-4 items-center ">
                  <div className="w-[4.75rem] h-[4.75rem] flex justify-center items-center rounded-full border border-secondary">
                    <Image src={adminster} alt='#' />
                  </div>
                  <p className="text-[2.5rem] text-black">Efficiency</p>
                </li>
              </ul>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default Who


// The functions of the Commission as set out in section 7 of the Companies and Allied Matters Act, includes the following:
//
//
//
//
//
//