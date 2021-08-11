import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import axios from "axios";

const Chart1 = (props) => {
  const org_id = props.org_id;
  const [money, setMoney] = useState({
    earnings: [],
  });
  useEffect(() => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .get(
        "https://cehr.herokuapp.com/analytics/stats/hospital/earning/" + org_id,
        headers
      )
      .then((res) => {
        if (res.status === 200) {
          setMoney({ earnings: res.data });
        }
      })
      .catch();
  }, []);
  return (
    <div>
      <BarChart width={1000} height={400} data={money.earnings}>
        <XAxis dataKey="date" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="amount" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
};

export { Chart1 };
