export const generateTableData = (length: number) => 
    Array.from({ length }, (_, index) => ({
      id: index + 1,
      column1: `Content ${index + 1} for Column 1`,
      column2: `Item ${index + 1}`,
      column3: `Content ${index + 1} for Column 3`,
    }));