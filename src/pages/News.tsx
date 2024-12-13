'use client'
import { clip2, group } from '@/assests'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const News = () => {
    const list = [
        {
            title: 'Public Notice',
            subtitle: 'CONGRATULATIONS TO THE NEWLY APPOINTED HONORABLE MINISTER INDUSTRY TRADE AND INVESTMENT',
            text: 'October 25th, 2024'
        },
        {
            title: 'Public Notice',
            subtitle: 'CONGRATULATIONS TO THE NEWLY APPOINTED HONORABLE MINISTER INDUSTRY TRADE AND INVESTMENT',
            text: 'October 25th, 2024'
        },
        {
            title: 'Public Notice',
            subtitle: 'CONGRATULATIONS TO THE NEWLY APPOINTED HONORABLE MINISTER INDUSTRY TRADE AND INVESTMENT',
            text: 'October 25th, 2024'
        },
    ]
  return (
    <div className='bg-primary flex flex-col '>
        <Header />
        <div className="relative flex flex-col items-center overflow-hidden ">
        <div className="absolute top-[2rem] lg:top-[2rem] right-[-4rem] lg:right-[0rem]">
            <Image src={group} alt='group' />
          </div>
        <div className="flex flex-col  items-center mt-[10rem] ">
                    <p className="md:text-[2.5rem] text-[25px]  z-30 text-black">News</p>
                    <p className="text-black z-30 font-normal text-base md:text-[22px]">Press Releases, Latest News, Updates</p>
                </div>
                <div className="mt-[4rem] mb-[12rem] relative flex flex-col lg:flex-row lg:w-full mx-[3rem]  lg:ml-[6rem]">
                <div className="absolute top-[38rem] lg:top-[17rem] left-[-3rem]">
                        <Image src={clip2} alt='clip' />
                        </div>
                    <section className='flex flex-col z-10'>
                        <div className="bg-[#D9D9D9] w-[575px] h-[418px] rounded-[8px]"/>    
                        <p className="lg:text-[20px] mt-2 text-black">Uncategorized</p>
                    <p className="lg:text-[32px] text-[25px] my-4  z-30 text-black">NOTICE OF STRIKING OFF COMPANIES FROM <br /> THE REGISTER</p>
                        <p className="lg:text-[20px] font-bold text-black">November 20th, 2024</p>
                        <p className="lg:text-[16px] lg:w-[620px] text-black">The Commission announced its intention to strike off companies believed to be inactive or dormant due to failing to file annual returns for 10 years. A statutory 90-day notice period was provided for affected companies to comply or respond.</p>
                    </section>
                    <section className="grid ml-4 grid-rows-3 self-start gap-[4rem] z-10 ">
                        {list.map((item: {title: string, subtitle: string, text: string}, index: number) => (
                            <div key={index} className="flex items-center gap-x-4 ">
                                <div className="w-[137px] h-[144px] rounded-lg  bg-[#D9D9D9]"/>
                                <div className="flex flex-col gap-2 text-black">
                                    <p className="text-[20px] leading-6">{item.title}</p>
                                    <p className="text-[18px] w-[400px] leading-5">{item.subtitle}</p>
                                    <p className="text-[18px] font-bold leading-5">{item.text}</p>
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