import React, { SyntheticEvent } from "react";

interface IProps {
  deletePortfolio: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const OnDeletePortfolio = ({ deletePortfolio, portfolioValue }: IProps) => {
  return (
    <>
      <form onSubmit={deletePortfolio}>
        <input hidden={true} value={portfolioValue} />
        <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
          X
        </button>
      </form>
    </>
  );
};

export default OnDeletePortfolio;
