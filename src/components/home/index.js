import React, { useEffect, useState } from "react";
import Appbar from "./components/Appbar";
import Promos from "./components/Promos";
import Categories from "./components/categories";
import Recommend from "./components/recommend";
import Products from "./components/Products";
const Home = () => {
  const [data, setdata] = useState();
  console.log(`data`, data?.payload?.data?.categories?.product_info);
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
      .then((data) => setdata(data));
  }, []);

  return (
    <>
      <Appbar data={data?.payload?.data} />
      <Promos promoData={data?.payload?.data?.sliders} />
      <Categories categoryData={data?.payload?.data?.categories} />
      <Recommend recommendData={data?.payload?.data?.recommended} />
      <Products productsData={data?.payload?.data?.categories} />
    </>
  );
};
export default Home;
