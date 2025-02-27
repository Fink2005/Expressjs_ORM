import { Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";

import React, { SetStateAction, useState } from "react";
import { DisplaySnackBarType } from "../../pages/auth/Auth";

type snackBarType = {
  displaySnackBar: DisplaySnackBarType;
  setDisplaySnackBar: React.Dispatch<SetStateAction<DisplaySnackBarType>>;
};

export default function SnackbarAuth({
  displaySnackBar,
  setDisplaySnackBar,
}: snackBarType) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setDisplaySnackBar({ ...displaySnackBar, displaySnack: false });
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
      {displaySnackBar?.isSuccessMessage ? (
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
