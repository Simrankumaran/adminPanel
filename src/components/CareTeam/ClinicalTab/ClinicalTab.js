import { Box, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Allergy from "./Allergy";
import FamilyHistory from "./FamHis";
import Problems from "./Problems";
import Procedure from "./Procedure";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const ClinicalTab = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Allergy" />
          <Tab label="Family History" />
          <Tab label="Problems" />
          <Tab label="Procedure" />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Allergy></Allergy>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <FamilyHistory></FamilyHistory>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Problems></Problems>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <Procedure></Procedure>
      </TabPanel>
    </div>
  );
};

export default ClinicalTab;
