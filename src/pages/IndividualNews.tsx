import { clip2, group } from '@/assests'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { generateTableData } from '@/data/tableData'
import {  Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


interface TableRowData {
    id: number;
    column1: string;
    column2: string;
    column3: string;
  }

interface TableRowProps {
  item: TableRowData;
  index: number;
}

const TableRow = ({ item, index,  }: TableRowProps) => (
    <tr
    className={`
      ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
      hover:bg-gray-50 cursor-pointer transition-colors duration-150 flex flex-col  z-10 text-black text-[13px] md:text-[18px]
    `}
  >
    <td className="px-6 py-4 border-t z-10 " >
      <div className="flex items-center gap-3 ">
        <span className="flex items-center justify-center w-6 h-6  text-black rounded-full text-sm">
        {index + 1}
        </span>
        {item.column1}
      </div>
    </td>
  </tr>
)


const TOTAL_ROWS = 4;

const IndividualNews = () => {
    const data = generateTableData(TOTAL_ROWS);

  return (
    <div className='bg-primary flex flex-col '>
        <Header />
        <div className="relative mt-[4rem] px-[2rem] md:px-0 flex flex-col items-center overflow-hidden ">
        <div className="absolute top-[2rem] lg:top-[5rem] right-[-4rem] lg:right-[0rem]">
            <Image src={group} alt='group' />
          </div>
          <div className="relative self-center mt-[4rem]  md:self-end">
                            <div className="absolute right-8 top-2">
                                <Search />
                            </div>
                            <input type="text" placeholder='Search' className='w-[341px] pl-3 text-black h-[42px] border border-secondary rounded-lg ' />
                        </div>
                <div className=" mb-[12rem] relative flex flex-col gap-8 lg:flex-row lg:w-full   lg:ml-[6rem]">
                <div className="absolute top-[38rem] lg:top-[30rem] left-[-4rem]">
                        <Image src={clip2} alt='clip' />
                        </div>
                       
                    <section className='flex flex-col z-10 '>
                        <div className="bg-[#D9D9D9] md:w-[575px] h-[418px] rounded-[8px]"/>    
                    <p className="lg:text-[32px] text-[25px] mt-8 leading-5  z-30 text-black">Public Notice</p>
                        <p className="lg:text-[22px]  text-black">October 25th, 2024- Uncategorized</p>
                        <p className="lg:text-[16px] lg:w-[620px] mt-[2rem] text-black">This is to notify the general public particularly our esteemed customers that a new <br /> online form for increase in issued Share capital for all companies limited by shares will <br /> be  deployed from September 1, 2024. <br /> <br />
                            The new online form is designed to satisfy the requirements of section 127 of the <br /> Companies and Allied Matters Act, No. 3 of 2020, which requires that increase in issued <br /> share capital shall be by allotment. <br /> <br />
                            Customers are expected to use the new form from September 1, 2024. All applications <br /> filed under the old process before the commencement of the new one will be completed.

                            {/* Signed

                            Management */}
                        </p>
                        <div className="mt-4 flex flex-col md:flex-row  justify-between w-full">
                            <div className="flex flex-col ">
                                <p className="lg:text-[16px]   text-black">Signed</p>
                                <p className="lg:text-[16px]   text-black">Management</p>
                            </div>
                            <div className="flex items-center  md:ml-[12rem] gap-4">
                        <button className='w-[157px] h-[42px] rounded-lg border self-end md:self-baseline  border-secondary flex items-center justify-center text-black text-[22px]'>Previous post</button>
                        <button className='w-[157px] h-[42px] rounded-lg border self-end md:self-baseline  border-secondary flex items-center justify-center text-black text-[22px]'>Next Post</button>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col flex-1 ">
                        <div className="flex flex-col mt-4 ">
                            <p className="lg:text-[32px] text-[25px] mt-8 leading-5  z-30 text-black">News</p>
                            <div className="w-full mt-1 bg-white  overflow-hidden">
                            <table className="w-full border-collapse">
                            <tbody>
                                {data.map((item, index) => (
                                    <TableRow key={item.id}  item={item} index={index} />
                                ))}
                                    </tbody>
                                        </table>
                                    </div>
                                </div>
                        </section>
                    </div>
                </div>
        <div className="">
            <Footer />
        </div>
        </div>
  )
}

export default IndividualNews