'use client'
import { clip2, group } from '@/assests';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ShowMoreButton from '@/components/ShowMoreButton'
import DataTable from '@/components/table/DataTable'
import { generateTableData } from '@/data/tableData';
import Image from 'next/image';
import React, { useState } from 'react'

const ROWS_PER_PAGE = 5;
const TOTAL_ROWS = 10;

const Revised = () => {
    const [visibleRows, setVisibleRows] = useState(ROWS_PER_PAGE);
    const data = generateTableData(TOTAL_ROWS);

    const handleShowMore = () => {
        setVisibleRows((prev) => Math.min(prev + ROWS_PER_PAGE, TOTAL_ROWS));
      };
  return (
    <div className='bg-primary flex flex-col'>
    <Header />
    <section className=' relative flex flex-col mb-10 items-center mt-[8rem]  mx-4 md:mx-12'>
    <div className="absolute top-[-2rem] lg:top-[-3rem] right-[-1rem] lg:right-[-3rem]">
        <Image src={group} alt='group' />
      </div>
        <p className="text-[25px] md:text-[2.5rem] z-10 text-black">REVISED SERVICE TIMELINES</p>
        <div className="flex flex-col w-full mt-[5rem] ">
        <div className="w-full  bg-white  overflow-hidden">
            <DataTable data={data} visibleRows={visibleRows} />
        </div>
        <ShowMoreButton 
            onClick={handleShowMore} 
            hasMore={visibleRows < TOTAL_ROWS} 
        />
        </div>
        <div className="mt-[4rem] self-start text-black z-10">
            <p className="lg:w-[888px] md:w-[679px] w-[494px]">"Applications will be processed promptly upon receipt of all relevant documents, either via email or physical submission through courier services, and after compliance with any issued or raised queries. To expedite processing, customers are advised to strictly adhere to the commission's checklist and guidelines and ensure correct fee payment."</p>
        </div>
        <div className="absolute bottom-[-3rem]  left-[-3rem]">
            <Image src={clip2} alt='clip' />
            </div>
    </section>

    <Footer />
</div>
  )
}

export default Revised