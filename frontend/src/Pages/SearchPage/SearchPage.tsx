import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import Search from "../../Components/Search/Search";
import PortfolioList from "../../Components/PortfolioList/PortfolioList";
import CardList from "../../Components/CardList/CardList";
import { CompanySearch } from "../../company";
import { searchCompanies } from "../../api";
import { IPortfolioGet } from "../../Models/Portfolio";
import {
  deletePortfolioAPI,
  getPortfolioAPI,
  postPortfolioAPI,
} from "../../Services/PortfolioService";
import { toast } from "react-toastify";
import { Container, Grid, Typography, CircularProgress, Divider } from "@mui/material";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [portfolioValues, setPortfolioValues] = useState<
    IPortfolioGet[] | null
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    onPortfolioFetch();
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onPortfolioFetch = () => {
    getPortfolioAPI()
      .then((res) => {
        if (res?.data) {
          setPortfolioValues(res?.data);
        }
      })
      .catch(() => {
        toast.warning("could not fetch Portfolio.");
      });
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    postPortfolioAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 204) {
          toast.success("Stock added to portfolio.");
          onPortfolioFetch();
        }
      })
      .catch(() => {
        toast.warning("could not add Portfolio.");
      });
  };

  const onDeletePortfolio = (e: any) => {
    deletePortfolioAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 200) {
          toast.success("Stock deleted from portfolio.");
          onPortfolioFetch();
        }
      })
      .catch(() => {
        toast.warning("Could not create portfolio items.");
      });
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await searchCompanies(search);
    setLoading(false);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Search
        search={search}
        onHandleChange={handleSearchChange}
        onSearchSubmit={onSearchSubmit}
      />
      {loading && (
        <Grid container justifyContent="center" sx={{ marginTop: 4 }}>
          <CircularProgress />
        </Grid>
      )}
      <PortfolioList
        deletePortfolio={onDeletePortfolio}
        portfolioValues={portfolioValues!}
      />
      <Divider sx={{ marginY: 4 }} />
      {serverError && (
        <Typography variant="h6" color="error" align="center">
          Não foi possível conectar à API.
        </Typography>
      )}
      {!loading && searchResult.length > 0 && (
        <CardList
          addPortfolio={onPortfolioCreate}
          searchResults={searchResult}
        />
      )}
    </Container>
  );
};

export default SearchPage;
