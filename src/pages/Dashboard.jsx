import React from "react";
import "../components/Styles.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="">
      {/* <h1>Dashboard</h1> */}
      <div className="row">
        <div className="col-sm-2 sideborder">
          <Link to={"/wallet"}>
            <p>Wallet</p>
          </Link>
          <p>Contents...</p>
        </div>
        <div className="col-sm-9 mx-3">
          {/* first grid */}
          <div class="row">
            <div class="col-sm-2 bg-white shadow-lg dashgrid mx-5">
              Analysis
            </div>
            <div class="col-sm-2 bg-white shadow-lg dashgrid">Results</div>
            <div class="col-sm-2 bg-white shadow-lg dashgrid mx-5">Update</div>
          </div>
          {/* second grid */}
          <div class="row mt-5">
            <div class="col-sm-2 bg-white shadow-lg dashgrid mx-5">Reports</div>
            <div class="col-sm-2 bg-white shadow-lg dashgrid">
              Technical Reviews
            </div>
            <div class="col-sm-2 bg-white shadow-lg dashgrid mx-5">Reviews</div>
          </div>
          {/* Third grid */}
          <div class="row mt-5">
            <div class="col-sm-2 bg-white shadow-lg dashgrid mx-5">
              Analysis
            </div>
            <div class="col-sm-2 bg-white shadow-lg dashgrid">Results</div>
            <div class="col-sm-2 bg-white shadow-lg dashgrid mx-5">Update</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
