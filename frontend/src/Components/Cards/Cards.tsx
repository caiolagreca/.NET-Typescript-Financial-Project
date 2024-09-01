import React, { SyntheticEvent } from "react";
import { CompanySearch } from "../../company";
import OnPortfolio from "../OnPortfolio/OnPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  addPortfolio: (e: SyntheticEvent) => void;
}

const Cards: React.FC<Props> = ({
  id,
  searchResult,
  addPortfolio,
}: Props): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
      <h2 className="font-bold text-center text-black md:text-left">
        {searchResult.name} ({searchResult.symbol})
      </h2>
      <p className="text-black">{searchResult.currency}</p>
      <p className="font-bold text-black">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <OnPortfolio symbol={searchResult.symbol} addPortfolio={addPortfolio} />
    </div>
  );
};

export default Cards;
