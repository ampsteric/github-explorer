import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Info from "./Components/Info/Info";
import Octa from "./Assets/octa3.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page from "react-page-loading";
import Skeleton from "@material-ui/lab/Skeleton";
import Avatar from "@material-ui/core/Avatar";
function App() {
  const [username, setusername] = useState("");

  return (
    <Router>
      <Route path="/" exact>
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <form>
                  <input
                    type="text"
                    onChange={(e) => {
                      e.preventDefault();
                      setusername(e.target.value);
                    }}
                  />{" "}
                  <br />
                  <Link to={`/${username}`}>
                    <button class="button" type="submit">
                      Submit
                    </button>
                  </Link>
                </form>
              </div>
              <div className="col-md-12">
                <img src={Octa} style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 black-footer">
              Made with ❤️ by Shashwat Mishra
            </div>
          </div>
        </div>
      </Route>

      <Route path="/:id" exact>
        <Page loader={"bubble-spin"} color={"#5cf39b"} size={10} duration={100}>
          <div className="App">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <Page
                    loader={"bubble-spin"}
                    color={"#5cf39b"}
                    size={10}
                    duration={100}
                  >
                    <div className="img-parent">
                    <img
                      src={`https://avatars.githubusercontent.com/${
                        username || (
                          <Skeleton>
                            <Avatar />
                          </Skeleton>
                        )
                      }`}
                    />
                    </div>
                  </Page>
                </div>
                <div className="col-md-6">
                  <Info user={username} />
                </div>
              </div>
            </div>
            <Card user={username} />
          </div>
        </Page>
      </Route>
    </Router>
  );
}

export default App;
