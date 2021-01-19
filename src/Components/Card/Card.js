import React, { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";
import Page from "react-page-loading";
import Skeleton from "@material-ui/lab/Skeleton";
import Avatar from "@material-ui/core/Avatar";

export default function Card(props) {
  const [state_array, setstate_array] = useState([]);
  var ret;

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${props.user}/repos`)
      .then((res) => {
        setstate_array(res.data);
      });
  }, []);

  ret = state_array.map((item) => {
    if (item.homepage)
      return (
        <div className="col-md-3">
          <div className="top-bar">
            <div className="red-circle"></div>
            <div className="yellow-circle"></div>
            <div className="green-circle"></div>
          </div>
          <div className="card-body">
            <div>
              <h1>
                {item.description || (
                  <Skeleton>
                    <Avatar />
                  </Skeleton>
                )}{" "}
              </h1>
            </div>
            <div>
              <a
                href={
                  item.homepage || (
                    <Skeleton>
                      <Avatar />
                    </Skeleton>
                  )
                }
              >
                Visit Webpage
              </a>
            </div>
          </div>
        </div>
      );
  });
  return (
    <div className="container-fluid">
      <Page loader={"bar"} color={"#5cf39b"} size={10} duration={10}>
        <div className="row">{ret}</div>
      </Page>
    </div>
  );
}
