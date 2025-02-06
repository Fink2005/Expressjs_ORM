import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <header>
      <div className="sm:ml-64">
        <div className="mx-5">
          <TextField
            placeholder="Tìm kiếm"
            fullWidth
            className="bg-gray-custom "
            id="input-with-icon-textfield"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon className="" />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
          />
        </div>
      </div>
    </header>
  );
}
export default Header;
