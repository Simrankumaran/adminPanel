import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const TotalPatients = () => {
  return (
    <div>
      <Card style={{ backgroundColor: "#F8DC81" }}>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            40
          </Typography>
          <Typography variant="h5" component="h2">
            Total Patients
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const HospitalBeds = () => {
  return (
    <div>
      <Card style={{ backgroundColor: "#F8DC81" }}>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            70
          </Typography>
          <Typography variant="h5" component="h2">
            Beds Available
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const Visits = () => {
  return (
    <div>
      <Card style={{ backgroundColor: "#F8DC81" }}>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            50
          </Typography>
          <Typography variant="h5" component="h2">
            No. of visits today
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const Earning = () => {
  return (
    <div>
      <Card style={{ backgroundColor: "#F8DC81" }}>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            $5000
          </Typography>
          <Typography variant="h5" component="h2">
            Hospital Earning
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export { TotalPatients, HospitalBeds, Visits, Earning };
