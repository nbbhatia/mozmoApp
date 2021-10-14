import { Accordion } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Accordions from "./accordianView";
import BAckButton from "../shared/backButton";
import BottomAppBar from "../home/components/bottomAppbar";
const Payment = () => {
  const [data, setdata] = useState();
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

  let paymentData = data?.payload?.data?.payment_gateways;

  return (
    <>
      <BAckButton text="Payment Method" color="#000" />
      <Accordions data={paymentData} />
      <BottomAppBar isTotalCost={false} />
    </>
  );
};
export default Payment;
