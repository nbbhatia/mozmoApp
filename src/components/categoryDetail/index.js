import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Product from "../home/components/Products";
import BottomAppBar from "../home/components/bottomAppbar";
import BAckButton from "../shared/backButton";
const useStyle = makeStyles((theme) => ({
  root: {
    background: "#BC2C3D",
    height: "100%",
  },
  catName: {
    fontSize: 32,
    fontWeight: 700,
    color: "#fff",
    // padding: "50px 0px",
  },
  productGrid: {
    backgroundColor: "rgb(255, 255, 255)",
    borderTopLeftRadius: "35px",
    borderTopRightRadius: "35px",
    boxShadow: "rgb(158 158 158) 0px -4px 12px -6px",
  },
}));
const CategoryDetail = () => {
  const [data, setdata] = useState();
  const classes = useStyle();

  useEffect(() => {
    fetch("https://dinenite.in/api/web/store/fetch", {
      crossDomain: true,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        view_id: "6a5ac34e2a6273f0706ebde50dc3a0a123f68a5d",
      }),
    })
      .then((resp) => resp.json())
      .then((data) => setdata(data));
  }, []);
  let params = new URLSearchParams(window.location.search).get("catId");
  let catData = data?.payload?.data?.categories;
  let catByFilter = catData?.filter((item) => item.id === parseInt(params));

  return (
    <Grid md={12} xs={12} sm={12} item className={classes.root}>
      <BAckButton />
      <Grid md={12} sm={12} xs={12} item container justify="center">
        <Typography className={classes.catName}>
          {catByFilter?.[0]?.name}
        </Typography>
      </Grid>
      <Grid md={12} xs={12} sm={12} item className={classes.productGrid}>
        <Product productsData={catByFilter} />
      </Grid>
      <BottomAppBar />
    </Grid>
  );
};

export default CategoryDetail;
