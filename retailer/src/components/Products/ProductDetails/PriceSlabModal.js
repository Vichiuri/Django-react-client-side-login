import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PriceSlabTable from "./PriceSlabTable";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default function PriceSlabModal(props) {
  const { show, handleModal, product_slabs, price_slab, updatePriceSlab } =
    props;

  return (
    <Dialog
      onClose={handleModal}
      aria-labelledby="customized-dialog-title"
      maxWidth="lg"
      open={show}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleModal}>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          {" "}
          Price Levels
        </div>
      </DialogTitle>

      <div>
        <PriceSlabTable
          product_slabs={product_slabs}
          price_slab={price_slab}
          updatePriceSlab={updatePriceSlab}
          handleModal={handleModal}
        />
      </div>
    </Dialog>
  );
}
