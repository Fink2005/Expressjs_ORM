import { Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplaySnackBar } from "../redux/features/auth/authSlice";

export default function SnackbarClient() {
  const { displaySnackBar } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setDisplaySnackBar(false));
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <div>
      {displaySnackBar.isSuccessMessage ? (
        <Snackbar
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          autoHideDuration={5000}
          onClose={handleClose}
          open={displaySnackBar?.displaySnack}
          action={action}
          message={displaySnackBar?.displayMessage}
        />
      ) : (
        <Snackbar
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          autoHideDuration={5000}
          open={displaySnackBar?.displaySnack}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            {displaySnackBar?.displayMessage}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}
