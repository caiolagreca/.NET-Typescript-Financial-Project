import React, { SyntheticEvent } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface IProps {
  addPortfolio: (e: SyntheticEvent) => void;
  symbol: string;
}

const OnPortfolio = ({ addPortfolio, symbol }: IProps) => {
  return (
    <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
      <form onSubmit={addPortfolio}>
        <input readOnly={true} hidden={true} value={symbol} />
        <Button type="submit" size="small" color="primary" startIcon={<AddIcon />}>
          Add
        </Button>
      </form>
    </div>
  );
};

export default OnPortfolio;
