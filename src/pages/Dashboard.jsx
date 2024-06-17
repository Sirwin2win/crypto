import React from "react";
import "../components/Styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });
  return (
    <div className="">
      {/* <h1>Dashboard</h1> */}
      <div className="row">
        <div className="col-sm-2 sideborder">
          <Link to={"/wallet"}>
            <p>Wallet</p>
          </Link>
          <p>Contents...</p>

          {/* <FiLogOut onClick={onLogout} /> */}
          <button className="btn" onClick={onLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
        <div className="col-sm-9 mx-3">
          <p>Welcome {user && user.name}</p>
          {/* <p>Welcome {news}</p> */}
          {/* first grid */}
          <div class="row">
            <div class="col-sm-2 bg-white shadow-lg dashgrid mx-5">
              Analysis
            </div>
            <div class="col-sm-2 bg-white shadow-lg dashgrid">Results</div>
            <div class="col-sm-2 bg-white shadow-lg dashgrid mx-5">Update</div>
          </div>
          {/* second grid */}
          <div class="row mt-4">
            <div class="col-sm-2 bg-white shadow-lg dashgrid mx-5">Reports</div>
            <div class="col-sm-2 bg-white shadow-lg dashgrid">
              Technical Reviews
            </div>
            <div class="col-sm-2 bg-white shadow-lg dashgrid mx-5">Reviews</div>
          </div>
          {/* Third grid */}
          <div class="row mt-4">
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
