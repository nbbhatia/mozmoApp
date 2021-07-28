import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import {
  Grid,
  makeStyles,
  Typography,
  Divider,
  Button,
  Badge,
  TextField,
} from "@material-ui/core";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const useStyle = makeStyles(() => ({
  image: {
    height: "100%",
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
  },
  name: {
    fontFamily: "Lato, sans-serif",
    fontWeight: 700,
    alignItems: "center",
    color: "#343a40 ",
  },
  price: {
    fontFamily: "Lato, sans-serif",
    fontWeight: 700,
    alignItems: "center",
    color: "#343a40 ",
    marginTop: 8,
  },
  divider: {
    height: 1,
    marginTop: 16,
  },
  rec: {
    backgroundColor: "rgb(33, 150, 243)",
    borderRadius: 4,
    color: "#fff",
    padding: 2,
  },
  custom: {
    fontFamily: "Lato, sans-serif",
    fontWeight: 700,
    fontSize: 10,
    alignItems: "center",
    background: "rgb(213, 61, 76)",
    color: "#fff",
    borderRadius: 4,
    padding: 2,
    marginLeft: 5,
  },
  Button: {
    // height: 20,
    background: "#EFEFEF",
    marginRight: 24,
  },
}));
const Promos = (productsData) => {
  let data = productsData?.productsData;
  const classes = useStyle();
  const [count, setcount] = useState(1);
  const [id, setid] = useState();

  let CartData = JSON.parse(sessionStorage.getItem("cartData")) || [];
  const [cartData, setcartData] = useState(CartData);

  const notify = (item) => {
    var data = {
      addon: item.addon_items,
      count: 1,
      extra: null,
      itemId: item.id,
      productName: item.name,
      price: parseInt(item.price),
      storeId: "6a5ac34e2a6273f0706ebde50dc3a0a123f68a5d",
      _id: 1626851545646,
    };
    setid(item.itemId);

    toast.success("Item Added to Cart!");

    setcount(data);
    setcartData((prevCartData) => prevCartData.concat(data));
  };

  if (cartData?.length > 0) {
    sessionStorage.setItem("cartData", JSON.stringify(cartData));
  }

  return (
    <Grid
      md={12}
      xs={12}
      sm={12}
      item
      container
      style={{ paddingLeft: 32, marginTop: 64, marginBottom: 100 }}
    >
      {data?.map((obj) => (
        <Grid md={12} xs={12} sm={12} item style={{ paddingTop: 16 }}>
          <Typography variant="body1">{obj.name}</Typography>
          {Array.isArray(obj.product_info) &&
            obj.product_info.map((item) => (
              <Grid md={12} xs={12} item style={{ paddingTop: 16 }}>
                <Grid
                  md={12}
                  xs={12}
                  item
                  style={{ display: "flex", alignItems: "flex-end" }}
                >
                  <Grid
                    md={2}
                    xs={3}
                    item
                    style={{ height: 70, marginRight: 16 }}
                  >
                    <img
                      src={`https://dinenite.in/${item.image_url}`}
                      className={classes.image}
                    />
                  </Grid>
                  <Grid md={12} xs={6} item>
                    <Typography variant="body2" className={classes.name}>
                      {item.name}
                    </Typography>
                    {item?.is_recommended ? (
                      <Typography variant="caption" className={classes.rec}>
                        Rec
                      </Typography>
                    ) : (
                      ""
                    )}
                    {Array.isArray(item.addon_items) &&
                    item.addon_items.length > 0 ? (
                      <Typography variant="caption" className={classes.custom}>
                        CUSTOM
                      </Typography>
                    ) : (
                      ""
                    )}
                    <Typography variant="body2" className={classes.price}>
                      ₹ {item.price}
                    </Typography>
                  </Grid>
                  <Grid md={11} xs={3} item container justify="flex-end">
                    <Button
                      className={classes.Button}
                      onClick={() => notify(item)}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                    {/* <TextField
                      type="Number"
                      onChange={(e) => handleChange(e, item)}
                      inputProps={{ min: 0 }}
                      style={{ marginRight: 24, width: 100 }}
                    /> */}
                  </Grid>
                  <ToastContainer />
                </Grid>
                <Divider className={classes.divider} />
              </Grid>
            ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default Promos;
