import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import the page from ./pages folder.
import Upload from "./pages/UpLoad";
import Profile from "./pages/Profile";
import Automobile from "./pages/Automobile";
import Homeowners from "./pages/Homeowners";
import Medical from "./pages/Medical";
import LifeInsurance from "./pages/LifeInsurance";
import Charts from "./pages/Charts";
import Learn from "./pages/Learn";
import WhatIf from "./pages/WhatIf";
import Resume from "./pages/Resume";
import NoMatch from "./pages/NoMatch";

// import Detail from "./pages/Detail";
import Nav from "./components/Nav";
import InputFileReader from "./pages/InputFileReader";

//  update the exact path below - make sure the component is imported above.
const App = () => (
  <Router>
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={Profile}/>
      <Route exact path="/profile" component={Profile}/>     
      <Route exact path="/charts" component={Charts}/>
      <Route exact path="/automobile" component={Automobile}/>
      <Route exact path="/homeowners" component={Homeowners}/>
      <Route exact path="/medical" component={Medical}/>
      <Route exact path="/lifeinsurance" component={LifeInsurance}/>
      <Route exact path="/learn" component={Learn}/>
      <Route exact path="/whatif" component={WhatIf}/>
      <Route exact path="/resume" component={Resume}/>
      <Route exact path="/inputfilereader" component={InputFileReader}/>
      {/* <Route exact path="/books" component={Books}/>
      <Route exact path="/books/:id" component={Detail}/> */}
      <Route component={NoMatch}/>
    </Switch>
  </div>
  </Router>
);

export default App;
