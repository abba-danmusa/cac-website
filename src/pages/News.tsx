'use client'
import { clip2, group } from '../../public/assests'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const News = () => {
    const list = [
        {
            title: 'Public Notice',
            subtitle: 'NOTICE OF STRIKING OFF COMPANIES FROM THE REGISTER',
            text: 'November 20th, 2024'
        },
        {
            title: 'Public Notice',
            subtitle: 'CONGRATULATIONS TO THE NEWLY APPOINTED HONORABLE MINISTER INDUSTRY TRADE AND INVESTMENT',
            text: 'October 25th, 2024'
        },
        {
            title: 'Public Notice',
            subtitle: 'GUIDELINES FOR RECAPITALIZATION OF BANKS AND OTHER FINANCIAL INSTITUTIONS',
            text: 'July 29th, 2024'
        },
    ]
  return (
    <div className='bg-primary flex flex-col '>
        <Header />
        <div className="relative flex flex-col items-center overflow-hidden ">
        <div className="absolute top-[1rem] lg:top-[2rem] right-[-4rem] lg:right-[0rem]">
            <Image src={group} alt='group' />
          </div>
        <div className="flex flex-col  items-center mt-[5rem] ">
                    <p className="md:text-[2.5rem] text-[25px]  z-30 text-black">News</p>
                    <p className="text-black z-30 font-normal text-base md:text-[22px]">Press Releases, Latest News, Updates</p>
                </div>
                <div className="mt-[4rem] mb-[5rem] relative flex flex-col md:flex-row md:w-full px-4 md:px-8   ">
                <div className="absolute top-[38rem] lg:top-[17rem] left-[-3rem]">
                        <Image src={clip2} alt='clip' />
                        </div>
                    <section className='flex flex-col z-10 '>
                        <div className="bg-[#D9D9D9] md:w-[400] w-full h-[200px] lg:w-[575px] md:h-[318px] lg:h-[418px] rounded-[8px]"/>    
                        <p className="lg:text-[20px] mt-2 text-black">Uncategorized</p>
                    <p className="lg:text-[32px] lg:w-full  font-bold md:font-normal text-[18px] my-4  z-30 text-black">COMMENCEMENT OF STRIKING OFF 100,000 COMPANIES FROM THE REGISTER OF COMPANIES</p>
                        <p className="lg:text-[20px] text-[16px] font-bold text-black">December 30th, 2024</p>
                        <p className="md:text-[16px] md:w-[400px] lg:w-[620px] my-3 text-[13px] text-black">The General Public is hereby informed that the Commission has compiled, for striking off, a list of 100,000 (one hundred thousand) companies which it has reasonable cause to believe are not carrying on business or have not been in operation for 10 years or have not complied with the provisions of the Companies and Allied Matters.</p>
                    </section>
                    <section className="grid w-full md:ml-4 grid-rows-3 mt-9 md:mt-0 self-start gap-[4rem] z-10 ">
                        {list.map((item: {title: string, subtitle: string, text: string}, index: number) => (
                            <div key={index} className="flex items-center group gradient-hover gap-x-4 cursor-pointer   rounded-xl p-2">
                                <div className="lg:w-[137px] md:w-[100px] w-[80px] h-[80px] md:h-[100px] lg:h-[144px] rounded-lg  bg-[#D9D9D9]"/>
                                <div className="flex flex-col gap-1 lg:gap-2 text-black">
                                    <p className="md:text-base lg:text-[20px]  group-hover:text-white leading-6">{item.title}</p>
                                    <p className="md:text-[12px] lg:text-[18px] group-hover:text-white text-[10px] w-[200px] md:w-[200px] lg:w-[400px] ">{item.subtitle}</p>
                                    <p className="md:text-base lg:text-[18px] group-hover:text-white text-[13px] md:font-semibold lg:font-bold leading-5">{item.text}</p>
                                </div>
                            </div>
                        ))}
                        
                    </section>
                </div>
        </div>
        <div className="">
            <Footer />
        </div>
        </div>
  )
}

export default News