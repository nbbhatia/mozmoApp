import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
const useStyle = makeStyles(() => ({
  image: {
    height: 100,
    width: 200,
    objectFit: "cover",
  },
  font: {
    fontFamily: "Maven Pro",
    fontWeight: 700,
  },
  name: {
    color: "#212529",
    fontFamily: "Maven Pro",
    fontWeight: 500,
  },
  card: {
    flexWrap: "nowrap",
    overflow: "auto",
    whiteSpace: "nowrap",
    width: "100%",
    marginTop: 16,
    // display: "flex",
  },
  card2: {
    padding: 8,
    display: "inline-block",
    marginLeft: ".5rem",
    marginRight: " .5rem",
    marginBottom: "20px",
    borderRadius: "8px",
    boxShadow: `0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%), 0 12.5px 10px rgb(0 0 0 / 6%), 0 22.3px 17.9px rgb(0 0 0 / 7%), 0 41.8px 33.4px rgb(0 0 0 / 9%), 0 100px 80px rgb(0 0 0 / 12%)`,
    // width: 400,
  },
  custom: {
    fontFamily: "Maven Pro",
    fontWeight: 500,
    fontSize: 10,
    alignItems: "center",
    background: "rgb(213, 61, 76)",
    color: "#fff",
    borderRadius: 4,
    padding: 2,
  },
}));
const Promos = (recommendData) => {
  let data = recommendData?.recommendData;
  const classes = useStyle();
  return (
    <Grid
      md={12}
      xs={12}
      sm={12}
      item
      container
      spacing={2}
      style={{ paddingLeft: 32, marginTop: 64 }}
    >
      <Typography variant="h5" className={classes.font}>
        Recommend for You
      </Typography>
      <div className={classes.card}>
        {data?.map((obj) => (
          <Grid className={classes.card2}>
            <img
              src={`http://3.108.189.161/${obj.image_url}`}
              className={classes.image}
            />
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Typography variant="body2" className={classes.name}>
                {obj.name}
              </Typography>
              {Array.isArray(obj.addon_items) && obj.addon_items.length > 0 ? (
                <Typography className={classes.custom}>CUSTOMIZABLE</Typography>
              ) : (
                ""
              )}
            </Grid>
            <Typography variant="body1" className={classes.name}>
              ₹ {obj.price}
            </Typography>
          </Grid>
        ))}
      </div>
    </Grid>
  );
};

export default Promos;
