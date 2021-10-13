import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import {
  Grid,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Divider,
} from "@material-ui/core";
import BottomAppbar from "../home/components/bottomAppbar";
const CartForm = () => {
  const [data, setData] = useState();
  const [totalPrice, setTotalPrice] = useState();
  let CartData = JSON.parse(sessionStorage.getItem("cartData"));
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
  return (
    <Grid style={{ borderRadius: 15, padding: 32 }}>
      <h4>Please provide your basic details</h4>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          orderType: "",
          tableNum: "",
          code: "",
          comment: "",
          address: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          setFieldValue,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <div style={{ marginTop: 32 }}>
              <InputLabel>Name</InputLabel>
              <TextField
                variant="standard"
                fullWidth
                required
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </div>
            <div style={{ marginTop: 32 }}>
              <InputLabel>Phone Number </InputLabel>
              <TextField
                required
                variant="standard"
                fullWidth
                name="phoneNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneNumber}
              />
            </div>
            <div style={{ marginTop: 32 }}>
              <InputLabel>Order Type</InputLabel>
              <Select
                required
                variant="standard"
                fullWidth
                onChange={(event) =>
                  setFieldValue("orderType", event.target.value)
                }
                onBlur={handleBlur}
                value={values.orderType}
              >
                <MenuItem value={"Dining"}>Dining</MenuItem>
                <MenuItem value={"Takeaway"}>Takeaway</MenuItem>
                <MenuItem value={"Delivery"}>Delivery</MenuItem>
              </Select>
            </div>
            {values.orderType === "Dining" ? (
              <div style={{ marginTop: 32 }}>
                <InputLabel>Select your Table</InputLabel>
                <Select
                  required
                  variant="standard"
                  fullWidth
                  onChange={(event) =>
                    setFieldValue("tableNum", event.target.value)
                  }
                  onBlur={handleBlur}
                  value={values.tableNum}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                </Select>
              </div>
            ) : (
              ""
            )}
            {values.tableNum ? (
              <div style={{ marginTop: 32 }}>
                <InputLabel>Enter Your Code </InputLabel>
                <TextField
                  required
                  variant="standard"
                  fullWidth
                  name="code"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.code}
                />
              </div>
            ) : (
              ""
            )}
            {values.orderType === "Delivery" ? (
              <div style={{ marginTop: 32 }}>
                <InputLabel>Address </InputLabel>
                <TextField
                  required
                  variant="standard"
                  fullWidth
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
              </div>
            ) : (
              ""
            )}
            <div style={{ marginTop: 32 }}>
              <InputLabel>Comment </InputLabel>
              <TextField
                required
                variant="standard"
                fullWidth
                name="comment"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
              />
            </div>
            <Grid
              md={12}
              item
              container
              style={{ marginTop: 32 }}
              direction="row"
              justify="space-between"
            >
              <Grid md={9} item>
                <InputLabel>Promo Code </InputLabel>
                <TextField
                  required
                  variant="standard"
                  fullWidth
                  name="comment"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.comment}
                />
              </Grid>
              <Grid md={3} item container alignItems="center">
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    background: "rgb(96, 178, 70)",
                    color: "#fff",
                    margin: 16,
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
            {/* <div style={{ marginTop: 32 }}>
              <Button variant="contained" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </div> */}
          </form>
        )}
      </Formik>
      {/* bottom part */}
      <Grid
        md={12}
        xs={12}
        sm={12}
        item
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: 16,
          marginBottom: 100,
        }}
      >
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
          <Typography>{`₹${0}`}</Typography>
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
        {/* <Grid md={12} xs={12} sm={12} item container justify="flex-end">
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
        </Grid> */}
      </Grid>
      <BottomAppbar totalCost={`₹${totalPrice}`} isTotalCost={true} />
    </Grid>
  );
};

export default CartForm;
