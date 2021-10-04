import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/home";
import CartPage from "../components/cart";
import MyOrder from "../components/myOrder";
import OrderDetail from "../components/myOrder/orderDetailPage";
const MyApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/my-order">
          <MyOrder />
        </Route>
        <Route exact path="/order-detail">
          <OrderDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default MyApp;
