import React, { useEffect, useState } from "react";
import {
  Grid,
  Divider,
  AppBar,
  Toolbar,
  Button,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import BottomAppBar from "../../home/components/bottomAppbar";
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
  currentTitle: {
    fontSize: 16,
    padding: 24,
  },
  boxes: {
    width: "100%",
    background: "#fff",
    height: "200px",
    boxShadow: "0px 1px 2px 2px lightgrey",
    borderRadius: 10,
    padding: 16,
    margin: "16px 16px 0px 16px",
  },
  divider: {
    height: 1,
    background: "rgba(0, 0, 0, .1)",
    margin: "16px 0px",
  },
  order_unique_id: {
    color: "rgb(252, 128, 25)",
    fontSize: 16,
    fontFamily: "Ubuntu, sans-serif",
    marginBottom: 8,
  },

  store_name: {
    color: "#212529",
  },
  time: {
    color: "#6c757d",
    fontSize: 13,
  },
  date: {
    color: "#dc3545",
    fontSize: 13,
    fontWeight: 700,
    marginLeft: 4,
  },
}));
const OrderDetail = () => {
  const classes = usestyles();
  const [orderData, setorderData] = useState();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search).get(
      "phoneNumber"
    );
    fetch("https://dinenite.in/api/web/store/account/orders", {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_phone: params,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => setorderData(data));
  }, []);

  let data = orderData?.payload?.data;

  return (
    <>
      <Grid md={12} xs={12} sm={12} item container className={classes.root}>
        <AppBar position="static">
          <Toolbar style={{ background: "#BC2C3D" }}>
            <Typography variant="h6" className={classes.title}>
              My Order
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid md={12} xs={12} sm={12} item>
          <Typography variant="h6" className={classes.currentTitle}>
            Current Order
          </Typography>
        </Grid>
        <Grid md={12} sm={12} xs={12} item container>
          {data?.map((obj, i) => (
            <Box key={i} className={classes.boxes}>
              <Button
                style={{
                  textTransform: "none",
                  background:
                    obj.status === 1
                      ? "#ffc107"
                      : obj.status === 2
                      ? "#17a2b8"
                      : obj.status === 5
                      ? "#17a2b8"
                      : obj.status === 4
                      ? "#28a745"
                      : obj.status === 3
                      ? "#dc3545"
                      : "",
                  color: "#fff",
                }}
              >
                {obj.status === 1
                  ? "Pending"
                  : obj.status === 2
                  ? "Accepted"
                  : obj.status === 5
                  ? "Ready to Serve"
                  : obj.status === 4
                  ? "Completed"
                  : obj.status === 3
                  ? "Canceled"
                  : ""}
              </Button>
              <Divider className={classes.divider} />
              <Typography className={classes.order_unique_id}>
                {obj.order_unique_id}
              </Typography>
              <Grid md={12} xs={12} sm={12} item container direction="row">
                <Grid md={6} xs={6} sm={6} item>
                  <Typography className={classes.store_name}>
                    {obj.store_name}
                  </Typography>
                </Grid>
                <Grid md={6} xs={6} sm={6} item container justify="flex-end">
                  <Typography className={classes.time}>
                    {`${new Date(obj.created_at).getHours()}:${new Date(
                      obj.created_at
                    ).getMinutes()}:${new Date(
                      obj.created_at
                    ).getSeconds()} / `}
                  </Typography>
                  <Typography className={classes.date}>
                    {new Date(obj.created_at).toLocaleString("default", {
                      month: "short",
                    })}{" "}
                    {new Date(obj.created_at).getDate()}{" "}
                    {parseInt(obj.created_at)}
                  </Typography>
                </Grid>
              </Grid>
              <Divider className={classes.divider} />
              <Grid
                md={12}
                xs={12}
                sm={12}
                item
                container
                justify="space-between"
              >
                <Typography className={classes.store_name}>
                  Bill Amount:
                </Typography>
                <Typography className={classes.store_name}>
                  ₹ {obj.total}
                </Typography>
              </Grid>
            </Box>
          ))}
        </Grid>
      </Grid>
      <BottomAppBar />
    </>
  );
};

export default OrderDetail;
