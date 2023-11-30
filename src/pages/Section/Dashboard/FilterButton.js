import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeProvider } from "@mui/system";
import theme from "../../../theme";
import { ArrowDropDown } from "@material-ui/icons";

const FilterButton = (props) => {
  const [tag, setTag] = useState("");
  const setFilterKey = props.setFilterKey;

  const handleChange = (e) => {
    setTag(e.target.value);
    setFilterKey(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl sx={{ width: 116 }} size="small" color="primary">
        <Select
          value={tag}
          onChange={handleChange}
          sx={{ height: 36, bgcolor: "#11047A", color: "white", borderRadius: "20px", fontSize: "14px" }}
          displayEmpty
          IconComponent={ArrowDropDown}
        >
          <MenuItem value="">Filter by</MenuItem>
          <MenuItem value="action">Action</MenuItem>
          <MenuItem value="hollywood">Hollywood</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}

export default FilterButton;