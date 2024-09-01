import React, { SyntheticEvent } from "react";
import Cards from "../Cards/Cards";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
  addPortfolio: (e: SyntheticEvent) => void;
}

const CardList = ({ searchResults, addPortfolio }: Props) => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Cards
              addPortfolio={addPortfolio}
              id={result.symbol}
              key={uuidv4()}
              searchResult={result}
            />
          );
        })
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )}
    </>
  );
};

export default CardList;
