import React from "react";
import Cards from "../Cards/Cards";
import { CompanySearch } from "../../company";
import { searchCompanies } from "../../api";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
}

const CardList = ({ searchResults }: Props) => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Cards id={result.symbol} key={uuidv4()} searchResult={result} />
          );
        })
      ) : (
        <h3>No Result.</h3>
      )}
    </>
  );
};

export default CardList;
