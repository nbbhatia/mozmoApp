import React from "react";
import BAckButton from "../../shared/backButton";
import CartUI from "../../shared/cartUi";
import { Grid, makeStyles, Typography, Divider } from "@material-ui/core";
import UserDetailForm from "../../shared/confirmOrderForm";
const useStyle = makeStyles((theme) => ({
  root: {
    background: "#BC2C3D",
    height: "100%",
  },
  itemBox: {
    background: "#fff",
    height: "100%",
    boxShadow: "rgb(158 158 158) 0px -4px 12px -6px",
    borderRadius: 15,
    margin: 15,
  },
}));
const CartDetail = () => {
  const classes = useStyle();

  return (
    <Grid md={12} xs={12} sm={12} item style={{ background: "#efefef" }}>
      <Grid md={12} xs={12} sm={12} item className={classes.itemBox}>
        <CartUI />
      </Grid>
      <UserDetailForm />
    </Grid>
  );
};

export default CartDetail;
