import React from 'react';

const TableHeader = () => (
  <thead>
    <tr className="bg-gray-800 text-white">
      <th className="px-6 py-4 text-left w-[40%]">Column 1</th>
      <th className="px-4 py-4 text-left w-[20%]">Column 2</th>
      <th className="px-6 py-4 text-left w-[40%]">Column 3</th>
    </tr>
  </thead>
);

export default TableHeader;