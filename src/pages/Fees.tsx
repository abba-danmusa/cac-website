import { clip2, group } from '../../public/assests'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const Fees = () => {
  return (
    <div className='bg-primary flex flex-col '>
    <Header />
    <div className="relative flex flex-col  md:items-center overflow-hidden ">
    <div className="absolute top-[2rem] lg:top-[8rem] right-[-4rem] lg:right-[0rem]">
        <Image src={group} alt='group' />
      </div>
    <div className="flex flex-col md:mx-0 mx-[2rem]  md:items-center mt-[10rem] ">
                <p className="md:text-[2.5rem] text-[25px] self-center  z-30 text-black">schedule of fees</p>
                <button className='border border-secondary gradient-hover text-black z-10 rounded-lg mt-[5rem]  hover:text-white md:w-[881px] h-[79px] flex items-center justify-center'>Download our schedule of fees</button>
            </div>
            <div className="mt-[4rem] mb-[5rem] h-[38rem] md:mb-[26rem] gap-8 relative flex flex-col lg:flex-row lg:justify-between lg:w-full px-[2rem]  lg:px-[6rem]">
            <div className="absolute top-[15rem] lg:top-[26rem] left-[-3rem]">
                    <Image src={clip2} alt='clip' />
                    </div>
            </div>
    </div>
    <div className="">
        <Footer />
    </div>
    </div>
  )
}

export default Fees