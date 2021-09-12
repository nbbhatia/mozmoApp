import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const usestyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  TextField: {
    width: "100%",
    marginTop: 100,
  },
  button: {
    width: "100%",
    background: "#BC2C3D",
    marginTop: 50,
  },
}));
const MyOrder = () => {
  const classes = usestyles();
  const [phone, setPhone] = useState();
  const [orderData, setorderData] = useState();
  const handleChange = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = () => {
    fetch("https://dinenite.in/api/web/store/account/orders", {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_phone: phone,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => setorderData(data));
  };

  return (
    <Grid md={12} xs={12} sm={12} lg={12} item container justify="center">
      <AppBar position="static">
        <Toolbar style={{ background: "#BC2C3D" }}>
          <Typography variant="h6" className={classes.title}>
            My Order
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid md={6} item container>
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          className={classes.TextField}
          onChange={(e) => handleChange(e)}
        />
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => handleSubmit()}
        >
          <Typography variant="body1" style={{ color: "#fff" }}>
            Search Order
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default MyOrder;
