import React, { useState, useEffect } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
const HospitalBeds = () => {
  const [totalBeds, setTotalBeds] = useState("");
  const [avail, setAvail] = useState("");

  useEffect(() => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    axios.all([
      axios
        .get("http://localhost:8000/analytics/status/beds/" + 1, headers)
        .then((res) => {
          if (res.status === 200) {
            for (var i in res.data) {
              setAvail({
                avail: res.data[i][1],
              });
            }
          }
        }),

      axios.get("http://localhost:8000/org/" + 1, headers).then((res) => {
        if (res.status === 200) {
          setTotalBeds({
            totalBeds: res.data.max_bed,
          });
        }
      }),
    ]);
  }, []);
  const occupied = Number(avail.avail);
  const total = Number(totalBeds.totalBeds);
  return (
    <div>
      <Card style={{ backgroundColor: "#FAFCC2" }}>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            {total - occupied}
          </Typography>
          <Typography variant="h5" component="h2">
            Beds Available
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default HospitalBeds;
