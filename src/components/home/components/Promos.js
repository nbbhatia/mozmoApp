import React from "react";
import { Grid } from "@material-ui/core";
// import { Slide } from "react-slideshow-image";
const Promos = (promoData) => {
  let banners = promoData?.promoData;

  return (
    <Grid md={12} xs={12} sm={12} item container>
      {banners?.map((obj) => (
        <Grid md={6} xs={12} sm={12} item>
          <img src={`https://dinenite.in/${obj.photo_url}`} width="100%" />
        </Grid>
      ))}
    </Grid>
  );
};

export default Promos;
