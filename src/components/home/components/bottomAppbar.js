import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Grid, Button, Badge } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { Link } from "react-router-dom";
import CartModel from "../../cart/component/cartModal";
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

    fontWeight: 700,
  },
}));

export default function BottomAppBar(props) {
  const { isTotalCost, totalCost } = props;
  const classes = useStyles();
  let cartData = JSON.parse(sessionStorage.getItem("cartData"));
  const [open, setopen] = useState(false);
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "8px",
    },
  }))(Badge);
  const handleCartModel = () => {
    setopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar
          style={{
            background: totalCost ? "rgb(96, 178, 70)" : "#fff",
            borderRadius: 20,
            boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 15%) !important",
          }}
        >
          {isTotalCost ? (
            <Grid
              container
              md={12}
              xs={12}
              sm={12}
              item
              justify="space-between"
            >
              <a href="/payment">
                <Typography>TotalCost: {totalCost}</Typography>
              </a>
            </Grid>
          ) : (
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
                <a href="/" style={{ textDecoration: "none" }}>
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
                </a>
              </Grid>

              <Grid md={4} item container justify="center">
                <Button
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  style={{ display: "block", textTransform: "none" }}
                  onClick={() => handleCartModel()}
                >
                  <StyledBadge
                    badgeContent={cartData?.length}
                    color="secondary"
                  >
                    <ShoppingCartIcon style={{ color: "#BC2C3D" }} />
                  </StyledBadge>
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
                  component={Link}
                  to="/my-order"
                >
                  <MenuBookIcon style={{ color: "#BC2C3D" }} />

                  <Typography variant="body2" className={classes.menuText}>
                    Order
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      <CartModel open={open} close={handleClose} />
    </React.Fragment>
  );
}
