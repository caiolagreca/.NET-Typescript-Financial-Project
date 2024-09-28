import React, { SyntheticEvent } from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import { IPortfolioGet } from "../../Models/Portfolio";
import { Container, Grid, Typography } from "@mui/material";

interface IProps {
  portfolioValues: IPortfolioGet[];
  deletePortfolio: (e: SyntheticEvent) => void;
}

const PortfolioList = ({ portfolioValues, deletePortfolio }: IProps) => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
       My Portfolio.
      </Typography>
      {portfolioValues.length > 0 ? (
        <Grid container spacing={2}>
          {portfolioValues.map((portfolioValue) => (
            <Grid item xs={12} sm={6} md={4} key={portfolioValue.symbol}>
              <PortfolioItem
                deletePortfolio={deletePortfolio}
                portfolioValue={portfolioValue}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1">Portfolio is empty.</Typography>
      )}
    </Container>
  );
};

export default PortfolioList;
