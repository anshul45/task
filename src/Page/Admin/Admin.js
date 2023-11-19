import React, { useEffect, useState } from "react";
import "./Admin.css";
import Chart from "../../componets/Chart/Chart";
import axios from "axios";

const Admin = () => {
  const [data, setData] = useState("");
  const [inputValue, setInputValue] = useState(null || "");
  const getData = async () => {
    const res = await axios.get("https://stg.dhunjam.in/account/admin/4");
    setData(res.data.data);
  };
  const postData = async () => {
    await axios.put("https://stg.dhunjam.in/account/admin/4", {
      amount: {
        category_6: inputValue,
      },
    });
    setInputValue("");
    getData();
  };
  useEffect(() => {
    getData();
  }, []);
  const transformAmountData = () => {
    if (!data || !data.amount || typeof data.amount !== "object") {
      return [];
    }
    const amountDataArray = Object.entries(data.amount).map(
      ([name, value]) => ({
        name,
        value,
      })
    );
    return amountDataArray;
  };

  const restOfAmountData = transformAmountData().filter(
    (data) => data.name !== "category_6"
  );
  return (
    <div className="adminContainer">
      <div className="heading">
        {data.name}, {data.location} on Dhun jam
      </div>
      <div className="admin_div_container">
        <div className="admin_div">
          Do you want to charge your customers for requesting songs?
        </div>
        <div className="admin_div_radio_container">
          <div className="admin_div_radio">
            <input
              type="radio"
              checked={data.charge_customers === true}
              style={{
                backgroundColor:
                  data.charge_customers !== true ? "#C2C2C2" : "#FFFFFF",
                color: data.charge_customers !== true ? "#C2C2C2" : "#FFFFFF",
              }}
              readOnly
            />
            <span>Yes</span>
          </div>
          <div className="admin_div_radio">
            <input
              type="radio"
              checked={data.charge_customers !== true}
              style={{
                backgroundColor:
                  data.charge_customers === true ? "#C2C2C2" : "#FFFFFF",
                color: data.charge_customers === true ? "#C2C2C2" : "#FFFFFF",
              }}
              readOnly
            />
            <span>No</span>
          </div>
        </div>
      </div>
      <div className="admin_div_container">
        <div className="admin_div">Custom song request amount-</div>
        <input
          className="admin_input"
          type="number"
          value={inputValue}
          min={99}
          disabled={data.charge_customers !== true}
          style={{
            borderColor: data.charge_customers !== true ? "#C2C2C2" : "FFFFFF",
            cursor: data.charge_customers !== true ? "not-allowed" : "pointer",
          }}
          onChange={(e) => {
            const inputValue = e.target.value.trim();
            if (!isNaN(inputValue)) {
              setInputValue(inputValue);
            } else {
              setInputValue("");
            }
          }}
        />
      </div>
      <div className="admin_div_container">
        <div className="admin_div">
          Regular song request amounts, from high to low-
        </div>
        <div className="custom_price">
          {restOfAmountData?.map((item, index) => (
            <div
              key={index}
              className="custom_price_containts"
              onClick={() => {
                if (data.charge_customers === true) {
                  setInputValue(item.value);
                }
              }}
              style={{
                color: data.charge_customers !== true ? "#C2C2C2" : "#FFFFFF",
                borderColor:
                  data.charge_customers !== true ? "#C2C2C2" : "#FFFFFF",
                cursor:
                  data.charge_customers !== true ? "not-allowed" : "pointer",
              }}
              disabled={data.charge_customers !== true}
            >
              {item.value}
            </div>
          ))}
        </div>
      </div>
      <div className="graph">
        <Chart data={transformAmountData()} />
      </div>
      <button
        className="admin_button"
        onClick={postData}
        style={{
          backgroundColor:
            data.charge_customers !== true || inputValue < 99
              ? "#C2C2C2"
              : "#6741D9",
          cursor:
            data.charge_customers !== true || inputValue < 99
              ? "not-allowed"
              : "pointer",
        }}
        disabled={data.charge_customers !== true || inputValue < 99}
      >
        Save
      </button>
    </div>
  );
};

export default Admin;
