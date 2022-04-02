import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const App = () => {
  const [apiKey, setapiKey] = useState("f75f976ffa034cc6a80c6cb5bc61b703");
  const [progress, setProgress] = useState(5);
  
  return (
    <div className="container my-5">
      <Router>
        <NavBar    />
        <LoadingBar color="#f11946" progress={progress} />

        <Switch>
          <Route exact path="/">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="/"
              pageSize={6}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="business"
              pageSize={6}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="entertainment"
              pageSize={6}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/general">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="general"
              pageSize={6}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/health">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="health"
              pageSize={6}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="science"
              pageSize={6}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="sports"
              pageSize={6}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="/technology"
              pageSize={6}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
