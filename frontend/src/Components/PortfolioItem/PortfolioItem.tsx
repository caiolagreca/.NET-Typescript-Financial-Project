import React, { SyntheticEvent } from "react";
import OnDeletePortfolio from "../OnDeletePortfolio/OnDeletePortfolio";

interface IProps {
  deletePortfolio: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const PortfolioItem = ({ portfolioValue, deletePortfolio }: IProps) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <p className="pt-6 text-xl font-bold">{portfolioValue}</p>
      <OnDeletePortfolio
        portfolioValue={portfolioValue}
        deletePortfolio={deletePortfolio}
      />
    </div>
  );
};

export default PortfolioItem;
