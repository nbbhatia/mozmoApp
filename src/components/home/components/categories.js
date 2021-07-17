import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "64px",
    paddingLeft: 32,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexWrap: "nowrap",
      overflow: "scroll",
    },
  },
  image: {
    height: 90,
    width: 90,
    margin: "16px 16px 0px 0px",
    borderRadius: "10px",
    objectFit: "cover",
  },
  name: {
    fontFamily: "Lato, sans-serif",
    fontFamily: "Roboto Condensed, sans-serif",
    background: "rgba(0,0,0,0.8)",
    borderRadius: "3px",
    fontWeight: 500,
    fontSize: ".6rem",
    left: 25,
    bottom: 0,
    textAlign: "center",
    padding: "0 5px",
    color: "#fff",
    position: "absolute",
  },
}));
const Promos = (categoryData) => {
  let data = categoryData?.categoryData;
  const classes = useStyle();
  return (
    <Grid md={12} xs={12} sm={12} item container className={classes.root}>
      {data?.map((obj) => (
        <Grid style={{ position: "relative" }}>
          <img
            src={`https://dinenite.in/${obj.image_url}`}
            className={classes.image}
          />
          <Typography variant="body1" className={classes.name}>
            {obj.name}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Promos;
