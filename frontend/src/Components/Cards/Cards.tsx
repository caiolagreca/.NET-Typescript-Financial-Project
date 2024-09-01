import React from "react";
import { CompanySearch } from "../../company";

interface Props {
  id: string;
  searchResult: CompanySearch;
}

const Cards: React.FC<Props> = ({ id, searchResult }: Props): JSX.Element => {
  return (
    <div className="card">
      <div className="details">
        <h2>{searchResult.name}</h2>
        <p>{searchResult.currency}</p>
        <p className="info">{searchResult.stockExchange}</p>
      </div>
    </div>
  );
};

export default Cards;
