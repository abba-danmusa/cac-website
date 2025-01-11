import React from 'react';
// import { TableRowData } from '../../types';

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

const TableRow = ({ item, index }: TableRowProps) => (
  <tr
    className={`
      bg-[#E7EFE7] cursor-pointer
      hover:bg-gray-50 transition-colors duration-150 flex justify-between z-10 text-black text-[13px] md:text-[18px]
    `}
  >
    <td className="px-6 py-4 border-t z-10 ">
      <div className="flex items-center gap-3 ">
        <span className="flex items-center justify-center w-6 h-6  text-black rounded-full text-sm">
          {index + 1}
        </span>
        {item.column1}
      </div>
    </td>
    <td className="px-4 py-4 border-t z-10">{item.column2}</td>
    <td className="px-6 py-4 border-t z-10 self-start">{item.column3}</td>
  </tr>
);

export default TableRow;