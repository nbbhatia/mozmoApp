import React, { useEffect, useState } from "react";
import Appbar from "./components/Appbar";
const Home = () => {
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

  return (
    <>
      <Appbar data={data?.payload?.data} />
    </>
  );
};
export default Home;
