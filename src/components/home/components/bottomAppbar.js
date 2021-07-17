import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Toolbar, Grid, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: "#fff",
  },
  appBar: {
    top: "auto",
    left: "20px",
    right: "20px",
    bottom: "10px",
    width: "97%",
    borderRadius: 20,
  },
  grow: {
    flexGrow: 0.5,
  },
  menuText: {
    color: "#BC2C3D",
    fontFamily: "Lato, sans-serif",
    fontWeight: 700,
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar
          style={{
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 15%) !important",
          }}
        >
          <Grid
            md={12}
            xs={12}
            sm={12}
            item
            container
            direction="row"
            justify="center"
            style={{ display: "contents" }}
          >
            <Grid md={4} item container justify="center">
              <Button
                edge="start"
                color="inherit"
                aria-label="open drawer"
                style={{ display: "block", textTransform: "none" }}
              >
                <RestaurantMenuIcon style={{ color: "#BC2C3D" }} />
                <Typography variant="body2" className={classes.menuText}>
                  Menu
                </Typography>
              </Button>
            </Grid>

            <Grid md={4} item container justify="center">
              <Button
                edge="start"
                color="inherit"
                aria-label="open drawer"
                style={{ display: "block", textTransform: "none" }}
              >
                <ShoppingCartIcon style={{ color: "#BC2C3D" }} />
                <Typography variant="body2" className={classes.menuText}>
                  cart
                </Typography>
              </Button>
            </Grid>
            <Grid md={4} item container justify="center">
              <Button
                edge="start"
                color="inherit"
                aria-label="open drawer"
                style={{ display: "block", textTransform: "none" }}
              >
                <MenuBookIcon style={{ color: "#BC2C3D" }} />
                <Typography variant="body2" className={classes.menuText}>
                  Order
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}