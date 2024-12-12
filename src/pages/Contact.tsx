import { clip2, group } from '@/assests'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-primary flex flex-col '>
        <Header />
        <div className="relative flex flex-col items-center overflow-hidden ">
        <div className="absolute top-[2rem] lg:top-[2rem] right-[-4rem] lg:right-[0rem]">
            <Image src={group} alt='group' />
          </div>
        <div className="flex flex-col  items-center mt-[10rem] ">
                    <p className="md:text-[2.5rem] text-[25px]  z-30 text-black">Need Help? </p>
                    <p className="text-black z-30 font-normal text-base md:text-[22px]">Let’s Get In touch </p>
                </div>

                <div className="relative flex flex-col w-full px-[2rem] md:px-[4rem] mt-[5rem]">
                <div className="absolute top-[38rem] lg:top-[17rem] left-[-3rem]">
                        <Image src={clip2} alt='clip' />
                        </div>
                    <form className="flex flex-col gap-4 z-10">
                        <input type="text" className="md:w-[603px] h-[80px] rounded-lg  bg-[#D9D9D9] outline-none px-4 text-black" placeholder='Your Name (Requierd)' />
                        <input type="text" className="md:w-[603px] h-[80px] rounded-lg  bg-[#D9D9D9] outline-none px-4 text-black" placeholder='Your Email (Requierd)' />
                        <input type="text" className="md:w-[603px] h-[80px] rounded-lg  bg-[#D9D9D9] outline-none px-4 text-black" placeholder='Subject' />
                        <textarea rows={4} name="" id="" className='md:w-[603px]  rounded-lg  bg-[#D9D9D9] outline-none px-4 pt-8 text-black' placeholder='Message'/>
                        <button className='w-[116px] h-[42px] rounded-lg border self-end md:self-baseline lg:ml-[30.5rem] border-secondary flex items-center justify-center text-black text-[22px]'>Send</button>
                    </form>
                </div>

                <div className="flex w-full md:flex-row flex-col gap-8 px-[2rem] md:px-[7rem] lg:justify-between z-10 mt-[8rem] mb-[2rem]">
                    <div className="md:w-[517px] h-[191px] border border-secondary rounded-lg flex-col px-[1rem] py-4">
                        <p className="text-[20px] md:text-[30px] text-secondary">Corporate Headquarters</p>
                        <p className="md:text-[20px] text-[14px] text-secondary">Plot 420, Tigris Crescent, <br />
                            Off Aguiyi Ironsi Street, <br />
                            Maitama, Abuja. <br />
                            Nigeria.</p>
                    </div>
                    <div className="md:w-[517px] h-[191px] border text-center border-secondary rounded-lg px-[1rem] py-4">
                    <p className="text-[20px] md:text-[30px] text-secondary">State  Offices </p>
                    </div>
                </div>
        </div>
        <Footer />
        </div>
  )
}

export default Contact