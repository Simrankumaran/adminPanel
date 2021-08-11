import React, { useState, useEffect } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
const HospitalBeds = (props) => {
  const [totalBeds, setTotalBeds] = useState("");
  const [avail, setAvail] = useState("");
  const org_id = props.org_id;
  // console.log("org id from bed comp" + org_id);
  useEffect(() => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    axios.all([
      axios
        .get(
          "https://cehr.herokuapp.com/analytics/status/beds/" + org_id,
          headers
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            // for (var i in res.data) {
            setAvail({
              avail: res.data[0].value,
            });
            // }
          }
        }),

      axios
        .get("https://cehr.herokuapp.com/org/" + org_id, headers)
        .then((res) => {
          // console.log(res.data);
          if (res.status === 200) {
            setTotalBeds({
              totalBeds: res.data.max_bed,
            });
          }
        }),
    ]);
  }, []);
  const occupied = Number(avail.avail);
  // console.log(avail.avail);
  const total = Number(totalBeds.totalBeds);
  // console.log(totalBeds.totalBeds);
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
