import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import BAckButton from "../shared/backButton";
import BottomAppBar from "../home/components/bottomAppbar";
import Product from "../home/components/Products";
const useStyle = makeStyles((theme) => ({
  catName: {
    fontSize: 32,
    fontWeight: 700,
    color: "#000",
    // padding: "50px 0px",
  },

  bannerGrid: {
    height: 720,
    width: "100%",
  },
  productGrid: {
    backgroundColor: "rgb(255, 255, 255)",
    borderTopLeftRadius: "35px",
    borderTopRightRadius: "35px",
    boxShadow: "rgb(158 158 158) 0px -4px 12px -6px",
    position: "relative",
    bottom: 100,
    width: "100%",
    padding: 32,
  },
  specifications: {
    fontSize: 13,
    color: "#000",
    fontFamily: "Ubuntu, sans-serif",
    margin: "16px 0px",
  },
  available: {
    fontSize: 13,
    color: "#ff6000",
    backgroundColor: "rgb(255 96 0 / 15%)",
    width: "max-content",
    padding: 8,
    borderRadius: ".25rem",
    fontFamily: "Ubuntu, sans-serif",
  },
  recommend: {
    color: "#28a745",
    backgroundColor: "rgb(40 167 69 / 15%)",
    width: "max-content",
    padding: 8,
    fontSize: 13,
    borderRadius: ".25rem",
    margin: 5,
    fontFamily: "Ubuntu, sans-serif",
  },
}));
const ProductDetail = () => {
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
  console.log(`data`, data);
  let params = new URLSearchParams(window.location.search).get("productId");
  let productData = data?.payload?.data?.products;
  let recommendData = data?.payload?.data.recommended;
  let productByFilter = productData?.filter(
    (item) => item.id === parseInt(params)
  );
  console.log(`productByFilter`, productByFilter);

  return (
    <Grid md={12} xs={12} sm={12} item className={classes.root}>
      <div style={{ height: 80, background: "#BC2C3D" }}>
        <BAckButton />
      </div>

      <Grid md={12} xs={12} sm={12} item container>
        {productByFilter?.map((obj, i) => (
          <Grid key={i} md={12} xs={12} sm={12} item container>
            <Grid
              md={12}
              xs={12}
              sm={12}
              item
              container
              className={classes.bannerGrid}
            >
              <img
                src={`https://dinenite.in/${obj.image_url}`}
                alt="banner"
                height="100%"
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </Grid>
            <Grid md={12} xs={12} sm={12} item className={classes.productGrid}>
              <Typography className={classes.catName}>{obj.name}</Typography>
              <Grid container direction="row" alignItems="center">
                {obj.is_active ? (
                  <Typography className={classes.available}>
                    AVAILABLE
                  </Typography>
                ) : (
                  ""
                )}
                {obj.is_recommended ? (
                  <Typography className={classes.recommend}>
                    RECOMMENDED
                  </Typography>
                ) : (
                  ""
                )}
              </Grid>
              <Typography className={classes.specifications}>
                <b>MRP: </b> ₹ {obj.price}
              </Typography>
              <Typography className={classes.specifications}>
                <b>Cooking Time:</b>
                <br /> {obj.cooking_time} mins
              </Typography>

              <Typography className={classes.specifications}>
                <b>Product Detail </b>
                <br />
                {obj.name}
              </Typography>
              <Typography style={{ fontSize: 20 }}>
                <b>Maybe You Like this</b>
              </Typography>
              <Product productsData={recommendData} />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <BottomAppBar />
    </Grid>
  );
};
export default ProductDetail;
