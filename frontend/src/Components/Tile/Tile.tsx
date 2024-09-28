import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const Tile = ({ title, subtitle }: Props) => {
  return (
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
      <div className="relative flex flex-col min-w-0 break-words bg-gray-800 text-white rounded-lg shadow-lg p-6">
        <h5 className="text-lightGreen uppercase font-bold text-xs mb-2">
          {title}
        </h5>
        <span className="font-bold text-xl">{subtitle}</span>
      </div>
    </div>
  );
};

export default Tile;
