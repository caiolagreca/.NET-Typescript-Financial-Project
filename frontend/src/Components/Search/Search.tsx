import React, { ChangeEvent, FC, SyntheticEvent } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  search: string | undefined;
  onSearchSubmit: (e: SyntheticEvent) => void;
  onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<Props> = ({
  search,
  onSearchSubmit,
  onHandleChange,
}: Props): JSX.Element => {
  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Search companies
      </Typography>
      <form onSubmit={onSearchSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={10}>
            <TextField
              fullWidth
              placeholder="Digit the Company's Symbol"
              value={search}
              onChange={onHandleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SearchIcon />}
              sx={{ borderRadius: "8px" }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Search;
