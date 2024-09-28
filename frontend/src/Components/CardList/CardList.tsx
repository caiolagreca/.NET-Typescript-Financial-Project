import React, { SyntheticEvent } from "react";
import Cards from "../Cards/Cards";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";
import { Container, Grid, Typography } from "@mui/material";

interface Props {
  searchResults: CompanySearch[];
  addPortfolio: (e: SyntheticEvent) => void;
}

const CardList = ({ searchResults, addPortfolio }: Props) => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      {searchResults.length > 0 ? (
        <Grid container spacing={2}>
          {searchResults.map((result) => (
            <Grid item xs={12} sm={6} md={4} key={result.symbol}>
              <Cards
                addPortfolio={addPortfolio}
                id={result.symbol}
                key={uuidv4()}
                searchResult={result}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" align="center">
          Nenhum resultado encontrado!
        </Typography>
      )}
    </Container>
  );
};

export default CardList;
