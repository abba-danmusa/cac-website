'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ShowMoreButton from '@/components/ShowMoreButton';
import DataTable from '@/components/table/DataTable';
import { generateTableData } from '@/data/tableData';
import React, { useState } from 'react'

const ROWS_PER_PAGE = 5;
const TOTAL_ROWS = 10;

const Hod = () => {

    const [visibleRows, setVisibleRows] = useState(ROWS_PER_PAGE);
    const data = generateTableData;

    const handleShowMore = () => {
        setVisibleRows((prev) => Math.min(prev + ROWS_PER_PAGE, TOTAL_ROWS));
      };
    

  return (
    <div className='bg-primary flex flex-col'>
        <Header />
        <section className='flex flex-col mb-10 items-center mt-[8rem]  mx-4 md:mx-12'>
            <p className="text-[25px] md:text-[2.5rem] text-black">Heads of Departments/Units </p>
            <div className="flex flex-1 mt-4 self-start">
                <p className="text-[18px] md:text-[25px] text-[#4D6C4A] leading-5">Hussani Ishaq Magaji, SAN <br />
                    <span className="text-[14px] md:text-[20px] font-bold">Registrar General/CEO</span>
                </p>
            </div>
            <div className="flex flex-col w-full mt-4">
            <div className="w-full  bg-white  overflow-hidden">
                <DataTable data={data} visibleRows={visibleRows} />
            </div>
            <ShowMoreButton 
                onClick={handleShowMore} 
                hasMore={visibleRows < TOTAL_ROWS} 
            />
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default Hod