import { Fragment } from "react";
import { Route } from "react-router-dom";

const WelcomePage = () => {
  return (
    <Fragment>
      <h2>This is Welcome Page</h2>
      <Route path="/welcome/new">
        <h3>Welcome, new User...!</h3>
      </Route>
    </Fragment>
  );
};

export default WelcomePage;
