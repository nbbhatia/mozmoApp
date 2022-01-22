import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Promos = (promoData) => {
  let banners = promoData?.promoData;

  return (
    <Grid
      md={12}
      xs={12}
      sm={12}
      item
      container
      style={{ backgroundColor: "#fafafa" }}
    >
      <Typography
        variant="body1"
        style={{
          color: "#212529",
          fontFamily: "Maven Pro",
          padding: "16px 24px",
          fontWeight: 700,
        }}
      >
        PROMOS FOR YOU
      </Typography>
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
          <Grid md={12} xs={12} sm={12} item style={{ padding: "0px 8px" }}>
            <img
              src={`http://3.108.189.161/${obj.photo_url}`}
              width="100%"
              style={{ borderRadius: 8 }}
            />
          </Grid>
        ))}
      </Carousel>
    </Grid>
  );
};

export default Promos;
