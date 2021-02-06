//importing packages
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//importing local files
import AllUsers from "./users/pages/AllUsers";
// import SingleUser from "./users/pages/SingleUser";
// import User from "./users/pages/SingleUser";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/users" component={AllUsers} />
        {/* <Route path="/user/:id" children={<Child />} /> */}
      </Switch>
    </Router>
  );
};
// const Child = () => {
//   let { id } = useParams();

//   return <SingleUser id={id} />;
// };

export default App;
