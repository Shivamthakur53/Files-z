import React from "react";
import "../Home/Home.css";
import Sidebar from "../../Componets/Sidebar/Sidebar";
import Navbar from "../../Componets/Navbar/Navbar";

const Home = () => {
  return (
    // <div>
    //   <Navbar />
    //   <Sidebar />
    //   <div className="heading">
    //     <h1>Welcome to Drive</h1>
    //   </div>
    //   <div className="main-div">dfverfv</div>
    // </div>
    <div className="home-container">
      <Navbar />
      <Sidebar />
      <div className="content">
        {/* <div className="heading">
        </div> */}

        <div className="main-div">
          <h1>Welcome to Filez</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
