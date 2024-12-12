import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ShowMoreButtonProps {
  onClick: () => void;
  hasMore: boolean;
}

const ShowMoreButton = ({ onClick, hasMore }: ShowMoreButtonProps) => {
  if (!hasMore) return null;

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 mx-auto mt-4 px-4 
                 bg-gray-300 text-gray-700 
                 transition-colors duration-150 focus:outline-none focus:ring-2 
                 focus:ring-gray-500 focus:ring-offset-2"
    >
      <ChevronDown size={50} />
    </button>
  );
};

export default ShowMoreButton;