import React from "react";
import { Grid } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Promos = (promoData) => {
  let banners = promoData?.promoData;

  return (
    <Grid md={12} xs={12} sm={12} item container>
      <Carousel
        autoPlay={true}
        showThumbs={false}
        showArrows={false}
        infiniteLoop={true}
        labels={false}
        showIndicators={false}
        showStatus={false}
      >
        {banners?.map((obj) => (
          <Grid md={12} xs={12} sm={12} item>
            <img src={`https://dinenite.in/${obj.photo_url}`} width="100%" />
          </Grid>
        ))}
      </Carousel>
    </Grid>
  );
};

export default Promos;
