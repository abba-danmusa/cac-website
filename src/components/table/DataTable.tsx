import React from 'react';
// import { TableRowData } from '../../types';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

interface TableRowData {
    id: number;
    column1: string;
    column2: string;
    column3: string;
  }

interface DataTableProps {
  data: TableRowData[];
  visibleRows: number;
}

const DataTable = ({ data, visibleRows }: DataTableProps) => (
  <table className="w-full border-collapse">
    {/* <TableHeader /> */}
    <tbody>
      {data.slice(0, visibleRows).map((item, index) => (
        <TableRow key={item.id} item={item} index={index} />
      ))}
    </tbody>
  </table>
);

export default DataTable;