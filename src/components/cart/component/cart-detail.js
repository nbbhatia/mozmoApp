import React from "react";
import BAckButton from "../../shared/backButton";
import CartUI from "../../shared/cartUi";
import { Grid, makeStyles, Typography, Divider } from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  root: {
    background: "#BC2C3D",
    height: "100%",
  },
  //   catName: {
  //     fontSize: 32,
  //     fontWeight: 700,
  //     color: "#fff",
  //     // padding: "50px 0px",
  //   },
  //   productGrid: {
  //     backgroundColor: "rgb(255, 255, 255)",
  //     borderTopLeftRadius: "35px",
  //     borderTopRightRadius: "35px",
  //     boxShadow: "rgb(158 158 158) 0px -4px 12px -6px",
  //   },
  itemBox: {
    background: "#fff",
    height: "100%",
    boxShadow: "rgb(158 158 158) 0px -4px 12px -6px",
    borderRadius: 15,
  },
}));
const CartDetail = () => {
  const classes = useStyle();

  return (
    <Grid md={12} xs={12} sm={12} item>
      <Grid md={12} xs={12} sm={12} item className={classes.itemBox}>
        <CartUI />
      </Grid>
    </Grid>
  );
};

export default CartDetail;
