import React from "react";
import "./Admin.css";
import Chart from "../../componets/Chart/Chart";

const Admin = () => {
  return (
    <div className="adminContainer">
      <div className="heading">Social, Hebbal on Dhun jam</div>
      <div className="admin_div_container">
        <div className="admin_div">
          Do you want to charge your customers for requesting songs?
        </div>
        <div className="admin_div_radio_container">
          <div className="admin_div_radio">
            <input type="radio" />
            <span>Yes</span>
          </div>
          <div className="admin_div_radio">
            <input type="radio" />
            <span>No</span>
          </div>
        </div>
      </div>
      <div className="admin_div_container">
        <div className="admin_div">Custom song request amount-</div>
        <input className="admin_input" />
      </div>
      <div className="admin_div_container">
        <div className="admin_div">
          Regular song request amounts, from high to low-
        </div>
        <div className="custom_price">
          <div className="custom_price_containts">199</div>
          <div className="custom_price_containts">149</div>
          <div className="custom_price_containts">99</div>
          <div className="custom_price_containts">49</div>
        </div>
      </div>
      <div className="graph">
        <Chart />
      </div>
      <button className="admin_button">Save</button>
    </div>
  );
};

export default Admin;
