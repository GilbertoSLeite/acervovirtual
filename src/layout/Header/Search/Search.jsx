import { SearchOutlined } from "@material-ui/icons";
import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <React.Fragment>
      <Autocomplete
        id="Search"
        disablePortal
        fullWidth
        options={mockExample}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Pesquisar..."
            InputProps={{
              endAdornment: <SearchOutlined />,
            }}
          />
        )}
      />
    </React.Fragment>
  );
};

export default SearchBar;

const mockExample = [
  {
    label: "Cidade Inteligente",
  },
];
