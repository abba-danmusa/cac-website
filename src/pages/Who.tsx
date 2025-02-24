import { adminster, clip, effort, group, like, morale } from '../../public/assests'
import DoubleCycles from '@/components/DoubleCycles'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const Who = () => {
  return (
    <div className='bg-primary flex flex-col overflow-hidden md:pt-[4rem]'>
        <Header />
        <section className='flex flex-col mt-[10rem] gap-4 mx-8  items-center py-4'>
            <div className="relative  ml-[-5rem] md:ml-0 ">
                <div className="flex flex-col  items-center ">
                    <p className="md:text-[2.5rem] text-[25px]  z-30 text-black">Welcome to <span className=" text-secondary">CAC</span></p>
                    <p className="text-black z-30 font-normal text-base md:text-[20px]">Nigeria&apos;s Corporate Registry</p>
                </div>
                <DoubleCycles   />
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6 mt-[7rem] w-full">
              <div className="">
              <svg className='md:w-[451px]  md:h-[439] h-full w-full'  viewBox="0 0 651 439" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.45" d="M4 2H2V4V435V437H4H647H649V435V4V2H647H4Z" fill="#4D6C4A" stroke="#04E824" strokeWidth="4"/>
            </svg>
              </div>
              <div className="flex flex-col w-full pr-14">
                <p className="md:text-3xl text-[20px] font-normal  text-center mb-3 md:mb-[5rem] text-black">Who we are </p>
                <p className="md:text-[20px] pl-8 md:pl-0 text-[13px] font-normal text-black">the corporate affairs commission was </p>
              </div>
            </div>
        </section>

        <section className='relative mt-14 flex flex-col ml-8 md:ml-[7rem] mr-8 md:mr-[5rem] gap-14'>
          <div className="absolute -top-16 md:top-2 left-[-9rem]">
            <Image src={clip} alt='clip' />
          </div>
            <div className="flex flex-col">
              <p className="md:text-[2.5rem] z-10 text-[25px] mb-4 text-black font-semibold text-center">Functions of the Commission</p>
              <p className="text-[13px] md:text-[18px] text-black z-10"> The functions of the Commission as set out in section 7 of the Companies and Allied Matters Act, includes the following:</p>
              <ul className=' ml-10 md:ml-16 list-disc pl-5 z-10'>
                <li className="text-[13px] md:text-[18px] text-black ">To administer the Act, including the regulation and supervision of the formation, incorporation, management and winding up of companies</li>
                <li className="text-[13px] md:text-[18px] text-black ">To establish and maintain companies registry and offices in all the states of the Federation suitably and adequately equipped to discharge its functions under the Act or any law in respect of which it is charged with responsibility</li>
                <li className="text-[13px] md:text-[18px] text-black ">Arrange and conduct an investigation into the affairs of any company where the interests of the shareholders and the public so demand</li>
                <li className="text-[13px] md:text-[18px] text-black ">To undertake such other activities as are necessary or expedient for giving full effect to the provisions of the Act.</li>
                <li className="text-[13px] md:text-[18px] text-black ">The Commission also registers Business Names, and Incorporated Trustees as well as provides a wide range of ancillary services</li>
              </ul>
            </div>

            <div className="relative mt-[1px] md:mt-8 flex flex-col md:flex-row flex-1 justify-center px-8 md:px-0 gap-14">
            <div className="absolute top-[2rem] md:-top-8 right-[-4rem] md:right-[-20rem]">
            <Image src={group} alt='group' />
          </div>
              <div className="border text-center gradient-hover group z-20 w-[17.625rem] border-secondary rounded-md pt-8 pb-4 px-4 flex flex-col gap-8 ">
                <p className="text-xl text-secondary group-hover:text-white">Our Vision</p>
                <p className="text-base text-black text-center  group-hover:text-white">To be a world-class company’s registry providing excellent registration and regulatory services.</p>
              </div>
              <div className="border text-center gradient-hover group z-20 w-[17.625rem] border-secondary rounded-md pt-8 pb-4 px-4 flex flex-col gap-8 ">
                <p className="text-xl text-secondary z-10 group-hover:text-white">Our Mission </p>
                <p className="text-base text-black text-center z-10 group-hover:text-white ">Delivering reliable registration and regulatory services to meet stakeholder expectations and drive economic growth.</p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full mb-[8rem] ">
            <p className="text-[32px] md:text-[2.5rem] mb-4 text-black font-semibold text-center">Our core Values</p>
              <ul className="md:flex grid grid-cols-2 gap-4 md:gap-[0.5rem] justify-center z-10 mx-[1rem] md:mx-0">
                <li className="flex flex-col gap-4 items-center ">
                  <div className="w-[4.75rem] gradient-hover h-[4.75rem] flex justify-center items-center rounded-full border border-secondary">
                    <Image src={effort} alt='#' />
                  </div>
                  <p className="text-[23px] md:text-[2.5rem] text-black">Dedication</p>
                </li>
                <li className="flex flex-col gap-4 items-center ">
                  <div className="w-[4.75rem] h-[4.75rem] gradient-hover gradient-hover flex justify-center items-center rounded-full border border-secondary">
                    <Image src={like} alt='#' />
                  </div>
                  <p className="text-[23px] md:text-[2.5rem] text-black">Courtesy</p>
                </li>
                <li className="flex flex-col gap-4 items-center ">
                  <div className="w-[4.75rem] h-[4.75rem] gradient-hover flex justify-center items-center rounded-full border border-secondary">
                    <Image src={morale} alt='#' />
                  </div>
                  <p className="text-[23px] md:text-[2.5rem] text-black">Integrity </p>
                </li>
                <li className="flex flex-col gap-4 items-center ">
                  <div className="w-[4.75rem] h-[4.75rem] gradient-hover flex justify-center items-center rounded-full border border-secondary">
                    <Image src={adminster} alt='#' />
                  </div>
                  <p className="text-[23px] md:text-[2.5rem] text-black">Efficiency</p>
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