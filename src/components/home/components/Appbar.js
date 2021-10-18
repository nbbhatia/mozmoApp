import React from "react";
import { Grid, makeStyles, Typography, Box, Divider } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
const useStyle = makeStyles(() => ({
  font: {
    color: "#212529",
    fontFamily: "Maven Pro",
    fontWeight: 500,
  },
  logo: {
    height: 65,
    width: 65,
    borderRadius: "40px",
    objectFit: "cover",
    padding: 32,
  },
  store_name: {
    color: "#212529",
    fontFamily: "Maven Pro",
    paddingTop: 32,
    fontWeight: 700,
  },
  divider: {
    height: 10,
    marginTop: 30,
  },
}));
const Appbar = (props) => {
  const { data } = props;
  const classes = useStyle();
  return (
    <Grid md={12} xs={12} sm={12} item>
      <Grid style={{ display: "flex" }}>
        <img
          src={`https://dinenite.in/${data?.logo}`}
          alt="logo"
          className={classes.logo}
        />
        <Grid container direction="column">
          <Typography variant="h6" className={classes.store_name}>
            {data?.store_name}
          </Typography>
          <Grid container direction="row" alignItems="center">
            <LocationOnIcon style={{ color: "#dc3545" }} fontSize="small" />
            <Typography variant="body2" className={classes.font}>
              {data?.address}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container md={12} xs={12} sm={12} item>
        <Box pl={3} style={{ display: "flex" }}>
          <PhoneIcon style={{ color: "#dc3545" }} fontSize="small" />
          <Typography variant="body1" className={classes.font}>
            {data?.store_phone}
          </Typography>
        </Box>
      </Grid>
      <Divider className={classes.divider} />
    </Grid>
  );
};

export default Appbar;
