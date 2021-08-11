import { Route, Redirect } from "react-router-dom";
import { useAppContext } from "./contextLib";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAppContext();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated || localStorage.getItem("Authenticated"))
          return <Component {...props} />;
        switch (localStorage.getItem("Authenticated")) {
          case "Patient":
            return <Redirect to={{ pathname: "/PatientDashboard" }} />;
          case "Doctor":
            return <Redirect to={{ pathname: "/DoctorDashboard" }} />;
          case "Careteam":
            return <Redirect to={{ pathname: "/CareTeam" }} />;
          case "Admin":
            return <Redirect to={{ pathname: "/Admin" }} />;
          default:
            return <Redirect to={{ pathname: "/" }} />;
        }

        // return (<Redirect to={{ pathname: abc, state: { from: props.location } }} />)
      }}
    />
  );
};

export default PrivateRoute;
