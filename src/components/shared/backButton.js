import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const useStyle = makeStyles((theme) => ({
  backButton: {
    fontSize: 16,
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },
  backButtonGrid: {
    padding: 32,
  },
}));
const BAckButton = (props) => {
  const history = useHistory();
  const classes = useStyle();
  const { text, color } = props;
  return (
    <Grid
      onClick={() => history.goBack()}
      container
      direction="row"
      className={classes.backButtonGrid}
      alignItems="center"
    >
      <ArrowBackIosIcon
        style={{
          color: color ? color : "#fff",
          fontSize: 20,
          cursor: "pointer",
        }}
      />
      <Typography
        className={classes.backButton}
        style={{ color: color ? color : "#fff" }}
      >
        {text ? text : "back"}
      </Typography>
    </Grid>
  );
};

export default BAckButton;
