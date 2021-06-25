import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AllPatients from "../components/Patient/AllPatients";
// import AddPatient from "../components/Patient/AddPatient";

//Main component
const Patient = () => {
  // const [component, setComponent] = useState(null);

  // const LoadComponent = async (location) => {
  //   const { default: component } = await import(
  //     `../components/Patient/${location}`
  //   );
  //   setComponent(component);
  // };
  // return (
  //   <div>
  //     <h1>Click the button to proceed</h1>
  //     <button onClick={() => LoadComponent("PatientForm")}>
  //       Create Patient
  //     </button>
  //     <button onClick={() => LoadComponent("AllPatients")}>
  //       Patients List
  //     </button>
  //     {component}
  //   </div>
  // );
  return (
    <AllPatients></AllPatients>
    // <Router>
    //   <Switch>
    //     <Route path="/AllPatients" component={AllPatients}></Route>
    //     <Route path="/AddPatient" component={AddPatient}></Route>
    //   </Switch>
    //   <Link to="/AllPatients">ALL PATIENTS</Link>
    //   <Link to="/AddPatient"> ADD PATIENTS</Link>
    // </Router>
  );
};
export default Patient;
