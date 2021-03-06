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
  const [count, setCount] = useState(0);
  let CartData = JSON.parse(sessionStorage.getItem("cartData"));
  const [totalPrice, setTotalPrice] = useState();

  let sum = 0;

  useEffect(() => {
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
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Cart
            </Typography>
          </Toolbar>
        </AppBar>

        {CartData?.map((obj, i) => (
          <div>
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
                primary={obj.newPrice ? `???${obj.newPrice} ` : `???${obj.price} `}
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                  marginRight: 100,
                }}
              />
            </List>
            <Divider style={{ margin: "0px 32px 16px 32px" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
