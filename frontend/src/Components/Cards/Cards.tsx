import React, { SyntheticEvent } from "react";
import { CompanySearch } from "../../company";
import OnPortfolio from "../OnPortfolio/OnPortfolio";
import { Link } from "react-router-dom";
import { Card, CardContent, CardActions, Typography } from "@mui/material";

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
    <Card variant="outlined">
      <CardContent>
        <Typography
          variant="h6"
          component={Link}
          to={`/company/${searchResult.symbol}/company-profile`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {searchResult.name} ({searchResult.symbol})
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </Typography>
      </CardContent>
      <CardActions>
        <OnPortfolio symbol={searchResult.symbol} addPortfolio={addPortfolio} />
      </CardActions>
    </Card>
  );
};

export default Cards;
