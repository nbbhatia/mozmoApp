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
  const [count, setcount] = useState(1);
  let CartData = JSON.parse(sessionStorage.getItem("cartData"));
  const [totalPrice, settotalPrice] = useState();
  const [cartData] = useState(CartData);

  let sum = 0;
  let sum2 = 0;
  useEffect(() => {
    CartData?.map((item) => {
      sum = sum + item.price;
    });
    // console.log(`sum`, sum);
  }, []);

  const handleCartItemAdd = (e, id, i) => {
    if (CartData) {
      setcount(CartData[i].count + 1);
    }

    if (CartData?.indexOf(id)) {
      CartData[i].count = parseInt(CartData[i].count + 1);
      sessionStorage.setItem("cartData", JSON.stringify(CartData));
    }
    settotalPrice(CartData[i].count * CartData[i].price);
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
                disabled={count < 1 ? true : false}
                // onClick={() => handleCartItemRemove(obj)}
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
                disabled={count < 1 ? true : false}
                // onClick={() => handleCartItemRemove(i)}
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
              primary={`₹${obj.price} `}
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
        <Grid
          md={12}
          xs={12}
          sm={12}
          item
          container
          justify="space-between"
          style={{ padding: 32 }}
        >
          <Typography>SubTotal</Typography>
          <Typography>{`₹${count} `}</Typography>
        </Grid>
      </Dialog>
    </div>
  );
}
