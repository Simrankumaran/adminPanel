import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const TotalPatients = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            540
          </Typography>
          <Typography variant="h5" component="h2">
            Total Patients
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const TotalPractioners = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            540
          </Typography>
          <Typography variant="h5" component="h2">
            Total Patients
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export { TotalPatients, TotalPractioners };
