import { clip2, group, youtube } from '@/assests'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const InstructionalVideos = () => {
  return (
    <div className='bg-primary flex flex-col '>
    <Header />
    <div className="relative flex flex-col items-center overflow-hidden ">
    <div className="absolute top-[2rem] lg:top-[2rem] right-[-4rem] lg:right-[0rem]">
        <Image src={group} alt='group' />
      </div>
    <div className="flex flex-col  items-center mt-[10rem] ">
                <p className="md:text-[2.5rem] text-[25px]  z-30 text-black">Instructional Videos</p>
            </div>
            <div className="mt-[4rem] mb-[5rem] md:mb-[26rem] gap-8 relative flex flex-col lg:flex-row lg:justify-between lg:w-full px-[2rem]  lg:px-[6rem]">
            <div className="absolute top-[40rem] lg:top-[26rem] left-[-3rem]">
                    <Image src={clip2} alt='clip' />
                    </div>
                <section className='flex flex-col z-10'>
                    <div className="bg-[#D9D9D9] md:w-[575px] flex items-center justify-center h-[418px] rounded-[8px]"> 
                    <Image src={youtube} alt='group' />
                        </div>   
                <p className="lg:text-[32px] text-[25px] my-4  z-30 text-black">How to Use the Company Registration Portal </p>
                    <p className="lg:text-[20px] font-bold text-black">November 20th, 2024</p>
                </section>
                <section className='flex flex-col z-10'>
                    <div className="bg-[#D9D9D9] md:w-[575px] flex items-center justify-center h-[418px] rounded-[8px]"> 
                    <Image src={youtube} alt='group' />
                    </div>   
                <p className="lg:text-[32px] text-[25px] my-4  z-30 text-black">Incorporated Trustee Registration</p>
                    <p className="lg:text-[20px] font-bold text-black">November 20th, 2024</p>
                </section>
               
            </div>
    </div>
    <div className="">
        <Footer />
    </div>
    </div>
  )
}

export default InstructionalVideos