import React from "react";
import PageHeader from "../components/PageHeader";
import DisplayBanner from "../components/DisplayBanner";
import RestaurantList from "../components/RestaurantList";
import LoginPage from "./LoginPage";

function Home(): JSX.Element {
  const token = localStorage.getItem("token");
  console.log(token); // Output: 'your-token-value'
  return (
    <>
      {/* {token ? ( */}
        <>
          <div className="bg-gray-100 p-1">
            <PageHeader />
          </div>

          <div className="mx-20">
            <DisplayBanner />
          </div>

          <hr className="mx-20"></hr>

          <div className="mx-20">
            <RestaurantList />
          </div>
        </>
      {/* ) : ( */}
        {/* <LoginPage /> */}
      {/* )} */}
    </>
  );
}


export default Home;
