import React, { useState, useEffect, useCallback } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

import axios from "axios";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Count: ${value}`}</text>
    </g>
  );
};

const CareteamPie = (props) => {
  const org_id = props.org_id;
  //   const data01 = [
  //     { name: "Cardiology", value: 10 },
  //     { name: "Neurology", value: 5 },
  //     { name: "Physiology", value: 8 },
  //     { name: "ENT", value: 4 },
  //   ];
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const [docdata, setDocdata] = useState({
    stats: [],
  });
  useEffect(() => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .get(
        "https://cehr.herokuapp.com/analytics/stats/department/careteam/" +
          org_id,
        headers
      )
      .then((res) => {
        if (res.status === 200) {
          // console.log(res.data);
          // setDocdata(res.data);
          setDocdata({ stats: res.data });
          // for (var i in res.data) {
          //   setDocdata({
          //     name: res.data.name,
          //     value: res.data.value,
          //   });
          // }
        }
      })
      .catch();
  }, []);

  return (
    <div>
      {/* {console.log(docdata)} */}
      {/* {console.log(data01)} */}
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={docdata.stats}
          cx={200}
          cy={200}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {docdata.stats.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default CareteamPie;
