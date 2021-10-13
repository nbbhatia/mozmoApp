import React, { useState, useEffect } from "react";
import { makeStyles, Grid, TextField } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
// import CartUI from "../../shared/cartUi";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    background: "#BC2C3D",
  },
  paper: {
    width: "90vw",
    maxWidth: "90vw",
    bottom: 0,
    position: "absolute",
    minHeight: 200,
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  let CartData = JSON.parse(sessionStorage.getItem("cartData"));
  const [totalPrice, setTotalPrice] = useState();

  let sum = 0;

  useEffect(() => {
    fetch("https://dinenite.in/api/web/store/fetch", {
      crossDomain: true,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        view_id: "6a5ac34e2a6273f0706ebde50dc3a0a123f68a5d",
      }),
    })
      .then((resp) => resp.json())
      .then((data) => setData(data));

    CartData?.map((item) => {
      if (item.newPrice) {
        sum = sum + item.newPrice;
      } else {
        sum = sum + item.price;
      }
    });
    setTotalPrice(sum);
  }, []);

  const handleCartItemAdd = (e, id, i) => {
    if (CartData) {
      setCount(CartData[i].count + 1);
    }
    let newPrice;
    if (CartData?.indexOf(id)) {
      CartData[i].count = parseInt(CartData[i].count + 1);
      newPrice = parseInt(CartData[i].price * CartData[i].count + 1);
      CartData[i].newPrice = newPrice;
      sessionStorage.setItem("cartData", JSON.stringify(CartData));
    }

    CartData?.map((item) => {
      if (item.newPrice) {
        sum = sum + item.newPrice;
      } else {
        sum = sum + item.price;
      }
    });
    setTotalPrice(sum);
  };
  const handleCartItemRemove = (e, id, i) => {
    if (CartData) {
      setCount(CartData[i].count - 1);
    }
    let newPrice;
    if (CartData?.indexOf(id)) {
      CartData[i].count = parseInt(CartData[i].count - 1);
      newPrice = parseInt(CartData[i].price * CartData[i].count - 1);
      CartData[i].newPrice = newPrice;
      sessionStorage.setItem("cartData", JSON.stringify(CartData));
    }
    CartData?.map((item) => {
      if (item.newPrice) {
        sum = sum + item.newPrice;
      } else {
        sum = sum + item.price;
      }
    });
    setTotalPrice(sum);
  };

  const handleRemoveFromCart = (e, id, i) => {
    if (CartData?.indexOf(id)) {
      let val = CartData?.filter((obj) => obj.itemId !== id);
      sessionStorage.setItem("cartData", JSON.stringify(val));
    }
    window.location.reload();
  };
  return (
    <div>
      <Dialog
        fullScreen={false}
        open={props.open}
        onClose={props.close}
        maxWidth={"sm"}
        TransitionComponent={Transition}
        PaperProps={{ className: classes.paper }}
      >
        {CartData?.length > 0 ? (
          <div>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  Cart
                </Typography>
              </Toolbar>
            </AppBar>

            {CartData?.map((obj, i) => (
              <List key={i} style={{ display: "flex", alignItems: "center" }}>
                <ListItem>
                  <IconButton
                    style={{
                      padding: 8,
                      background: "#fff",
                      height: 30,
                      width: 30,
                      margin: 16,
                    }}
                    onClick={(e) => handleRemoveFromCart(e, obj.itemId, i)}
                  >
                    <DeleteIcon fontSize="small" style={{ color: "#BC2C3D" }} />
                  </IconButton>

                  <ListItemText
                    primary={obj.productName}
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: 700,
                      fontSize: 20,
                    }}
                  />
                </ListItem>
                <div
                  style={{
                    display: "flex",
                    background: "#f7f7f8",
                    borderRadius: 50,
                    marginRight: 50,
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    style={{
                      padding: 8,
                      background: "#fff",
                      height: 30,
                      width: 30,
                      margin: 16,
                    }}
                    disabled={obj.count < 1 ? true : false}
                    onClick={(e) => handleCartItemRemove(e, obj.itemId, i)}
                  >
                    <RemoveIcon fontSize="small" style={{ color: "#BC2C3D" }} />
                  </IconButton>

                  <Typography>{obj.count}</Typography>

                  <IconButton
                    style={{
                      padding: 8,
                      background: "#fff",
                      height: 30,
                      width: 30,
                      margin: 16,
                    }}
                    onClick={(e) => handleCartItemAdd(e, obj.itemId, i)}
                  >
                    <AddIcon fontSize="small" style={{ color: "#BC2C3D" }} />
                  </IconButton>
                </div>

                <ListItemText
                  primary={
                    obj.newPrice ? `₹${obj.newPrice} ` : `₹${obj.price} `
                  }
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    marginRight: 100,
                  }}
                />

                <Divider />
              </List>
            ))}
            <Grid md={12} xs={12} sm={12} item style={{ padding: "50px" }}>
              <Grid
                md={12}
                xs={12}
                sm={12}
                item
                style={{ padding: "16px 0px" }}
                container
                justify="space-between"
              >
                <Typography>SubTotal</Typography>
                <Typography>{`₹${totalPrice} `}</Typography>
              </Grid>
              <Divider />
              <Grid
                md={12}
                xs={12}
                sm={12}
                item
                style={{ padding: "16px 0px" }}
                container
                justify="space-between"
              >
                <Typography>Apply Coupan</Typography>
                <Typography>{`₹${0} `}</Typography>
              </Grid>
              <Divider />
              <Grid
                md={12}
                xs={12}
                sm={12}
                item
                style={{ padding: "16px 0px" }}
                container
                justify="space-between"
              >
                <Typography>Service Charge</Typography>
                <Typography>{`₹${data?.payload?.data?.service_charge} `}</Typography>
              </Grid>
              <Divider />
              <Grid
                md={12}
                xs={12}
                sm={12}
                item
                style={{ padding: "16px 0px" }}
                container
                justify="space-between"
              >
                <Typography>Tax(%)</Typography>
                <Typography>{`₹${data?.payload?.data?.tax} `}</Typography>
              </Grid>
              <Grid md={12} xs={12} sm={12} item container justify="flex-end">
                <Button
                  variant="contained"
                  style={{
                    background: "#28a745",
                    color: "#fff",
                    textTransform: "none",
                  }}
                  href="/cart-detail"
                >
                  <Typography>Confirm Order</Typography>
                </Button>
              </Grid>
            </Grid>
          </div>
        ) : (
          <Grid md={12} sm={12} xs={12} item container justify="center">
            <Typography
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "rgb(188, 44, 61)",
                paddingTop: 50,
              }}
            >
              Your Cart is Empty
            </Typography>
          </Grid>
        )}
      </Dialog>
    </div>
  );
}
