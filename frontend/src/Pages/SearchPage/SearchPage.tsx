import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";
import PortfolioList from "../../Components/PortfolioList/PortfolioList";
import CardList from "../../Components/CardList/CardList";
import { CompanySearch } from "../../company";
import { searchCompanies } from "../../api";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const addPortfolio = (e: any) => {
    e.preventDefault();
    const alreadyExist = portfolioValues.find(
      (value) => value === e.target[0].value
    );
    if (alreadyExist) {
      alert("You already have this stock!");
      return;
    }
    const updatePortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatePortfolio);
  };

  const deletePortfolio = (e: any) => {
    e.preventDefault();
    const portfolioItemRemoved = portfolioValues.filter(
      (value) => value !== e.target[0].value
    );
    setPortfolioValues(portfolioItemRemoved);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };
  return (
    <>
      <div className="App">
        <Search
          search={search}
          onHandleChange={handleSearchChange}
          onSearchSubmit={onSearchSubmit}
        />
        <PortfolioList
          deletePortfolio={deletePortfolio}
          portfolioValues={portfolioValues}
        />
        {serverError && <h1>Unable to Connect API</h1>}
        <CardList addPortfolio={addPortfolio} searchResults={searchResult} />
      </div>
    </>
  );
};

export default SearchPage;
