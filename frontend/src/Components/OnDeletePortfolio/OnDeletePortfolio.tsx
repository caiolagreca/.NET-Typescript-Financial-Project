import React, { SyntheticEvent } from "react";
import { IPortfolioGet } from "../../Models/Portfolio";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  deletePortfolio: (e: SyntheticEvent) => void;
  portfolioValue: IPortfolioGet;
}

const OnDeletePortfolio = ({ deletePortfolio, portfolioValue }: IProps) => {
  return (
    <>
      <form onSubmit={deletePortfolio}>
        <input hidden={true} value={portfolioValue.symbol} />
        <Button size="small" color="secondary" startIcon={<DeleteIcon />} sx={{ borderRadius: '8px' }}>
          Delete
        </Button>
      </form>
    </>
  );
};

export default OnDeletePortfolio;
