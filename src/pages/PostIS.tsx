'use client'
import { clip2, group } from '../../public/assests'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { generateTableData } from '@/data/tableData'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'


interface TableRowData {
    id: number;
    column1: string;
    column2: string;
    column3: string;
  }

interface TableRowProps {
  item: TableRowData;
  index: number;
  show: number,
  setShow: React.Dispatch<React.SetStateAction<number>>
}

const TableRow = ({ item, index, show, setShow }: TableRowProps) => (
    <tr
    className={`
      bg-[#E7EFE7]
       cursor-pointer transition-colors duration-150 flex flex-col  z-10 text-black text-[13px] md:text-[18px]
    `}
  >
    <td className="px-6 py-4 border-t z-10 " onClick={() => setShow(index)}>
      <div className="flex items-center gap-3 ">
        <span className="flex items-center justify-center w-6 h-6  text-black rounded-full text-sm">
        <ChevronDown size={50}  />
        </span>
        {item.column1}
      </div>
    </td>
    <td className={`${show === index ? 'block' : 'hidden'} px-6 py-4 bg-[#FFFFFF] z-50 border-t  `}>
      <div className="flex items-center gap-3 ">
        {item.column1}
      </div>
    </td>
  </tr>
)

const TOTAL_ROWS = 10;
const PostIS = () => {
    const data = generateTableData(TOTAL_ROWS);
    const [show, setShow] = useState(0)
  return (
<div className='bg-primary flex flex-col'>
    <Header />
    <section className=' relative flex flex-col mb-10 items-center mt-[8rem]  mx-4 md:mx-12'>
    <div className="absolute top-[-2rem] lg:top-[-3rem] right-[-1rem] lg:right-[-3rem]">
        <Image src={group} alt='group' />
      </div>
        <p className="text-[25px] md:text-[2.5rem] z-10 text-black">Post Incorporation services</p>
        <p className="text-black text-center  z-30 font-normal text-[13px] md:text-[18px]">
                Step by step Guide
                </p>
                <div className="w-full mt-[7rem] bg-[#E7EFE7]  overflow-hidden">
                   
                    <table className="w-full border-collapse">
                    <tbody>
                        {data.map((item, index) => (
                            <TableRow key={item.id} show={show} setShow={setShow} item={item} index={index} />
                        ))}
                        </tbody>
                    </table>
        </div>
        <div className="absolute bottom-[-2rem]  left-[-3rem]">
            <Image src={clip2} alt='clip' />
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default PostIS