import React, { SyntheticEvent } from "react";
import { IPortfolioGet } from "../../Models/Portfolio";

interface IProps {
  deletePortfolio: (e: SyntheticEvent) => void;
  portfolioValue: IPortfolioGet;
}

const OnDeletePortfolio = ({ deletePortfolio, portfolioValue }: IProps) => {
  return (
    <>
      <form onSubmit={deletePortfolio}>
        <input hidden={true} value={portfolioValue.symbol} />
        <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
          X
        </button>
      </form>
    </>
  );
};

export default OnDeletePortfolio;
