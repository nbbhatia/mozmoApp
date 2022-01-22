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
    borderRadius: "25px",
    objectFit: "cover",
    padding: 16,
  },
  store_name: {
    color: "#212529",
    fontFamily: "Maven Pro",
    paddingTop: 12,
    fontWeight: 700,
  },
  divider: {
    height: 4,
    marginTop: 16,
  },
  phone_number: {
    fontWeight: 700,
    color: "#212529",
    fontFamily: "Maven Pro",
  },
}));
const Appbar = (props) => {
  const { data } = props;
  const classes = useStyle();
  return (
    <Grid md={12} xs={12} sm={12} item>
      <Grid style={{ display: "flex" }}>
        <img
          src={`http://3.108.189.161/${data?.logo}`}
          alt="logo"
          className={classes.logo}
        />
        <Grid container direction="column">
          <Typography variant="body1" className={classes.store_name}>
            {data?.store_name}
          </Typography>
          <Grid container direction="row" alignItems="center">
            <LocationOnIcon style={{ color: "#dc3545" }} fontSize="small" />
            <Typography variant="caption" className={classes.font}>
              {data?.address}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container md={12} xs={12} sm={12} item>
        <Box pl={3} style={{ display: "flex" }}>
          <PhoneIcon style={{ color: "#dc3545" }} fontSize="small" />
          <Typography variant="caption" className={classes.phone_number}>
            {data?.store_phone}
          </Typography>
        </Box>
      </Grid>
      <Divider className={classes.divider} />
    </Grid>
  );
};

export default Appbar;
