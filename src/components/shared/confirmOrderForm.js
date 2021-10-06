import React, { useState } from "react";
import { Formik } from "formik";
import {
  Grid,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const CartForm = () => {
  return (
    <Grid
      style={{ padding: 32, margin: 16, background: "#fff", borderRadius: 15 }}
    >
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
          <form onSubmit={handleSubmit}>
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
            <div style={{ marginTop: 32 }}>
              <Button variant="contained" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Grid>
  );
};

export default CartForm;
