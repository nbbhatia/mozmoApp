import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/home";
import CartPage from "../components/cart";
import MyOrder from "../components/myOrder";
import OrderDetail from "../components/myOrder/orderDetailPage";
import CategoryDetail from "../components/categoryDetail";
import ProductDetail from "../components/productDetail";
import CartDetail from "../components/cart/component/cart-detail";
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
        <Route exact path="/category-detail">
          <CategoryDetail />
        </Route>
        <Route exact path="/product-detail">
          <ProductDetail />
        </Route>
        <Route exact path="/cart-detail">
          <CartDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default MyApp;
