import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Cover from "./components/menu/Cover";
import Editorial from "../src/components/menu/Editorial";
import Celebrity from "../src/components/menu/Celebrity";
import Advertising from "../src/components/menu/Advertising";
import Personal from "../src/components/menu/Personal";
import Contact from "../src/components/menu/Contact";
import Main from "../src/components/Main";

// export default function Routes() {
//   return (
//     <Switch>
//       <Route exact path="/" component={Main} />
//       <Route exact path="/Cover" component={Cover} />
//       <Route exact path="/Editorial" component={Editorial} />
//       <Route exact path="/Celebrity" component={Celebrity} />
//       <Route exact path="/Advertising" component={Advertising} />
//       <Route exact path="/Personal" component={Personal} />
//       <Route exact path="/Contact" component={Contact} />
//     </Switch>
//   );
// }
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/Cover" component={Cover} />
      <Route exact path="/Editorial" component={Editorial} />
      <Route exact path="/Celebrity" component={Celebrity} />
      <Route exact path="/Advertising" component={Advertising} />
      <Route exact path="/Personal" component={Personal} />
      <Route exact path="/Contact" component={Contact} />
    </Switch>
  );
};
export default Routes;
