import React, { SyntheticEvent } from "react";
import OnDeletePortfolio from "../OnDeletePortfolio/OnDeletePortfolio";
import { Link } from "react-router-dom";
import { IPortfolioGet } from "../../Models/Portfolio";
import { Card, CardContent, CardActions, Typography } from "@mui/material";

interface IProps {
  deletePortfolio: (e: SyntheticEvent) => void;
  portfolioValue: IPortfolioGet;
}

const PortfolioItem = ({ portfolioValue, deletePortfolio }: IProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "background.paper",
        borderRadius: 1,
        marginTop: 3,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component={Link}
          to={`/company/${portfolioValue.symbol}/company-profile`}
          sx={{ textDecoration: 'none', color: 'text.primary' }}
        >
          {portfolioValue.symbol}
        </Typography>
      </CardContent>
      <CardActions>
        <OnDeletePortfolio
          portfolioValue={portfolioValue}
          deletePortfolio={deletePortfolio}
        />
      </CardActions>
    </Card>
  );
};

export default PortfolioItem;
