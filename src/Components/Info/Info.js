import React, { useEffect, useState } from "react";
import axios from "axios";
import "./info.css";
import Page from "react-page-loading";
import Skeleton from "@material-ui/lab/Skeleton";

export default function Info(props) {
  const [name, setname] = useState("");
  const [blog, setblog] = useState("");
  const [username, setusername] = useState("");
  const [bio, setbio] = useState("");
  useEffect(() => {
    axios.get(`https://api.github.com/users/${props.user}`).then((res) => {
      setname(res.data.name);
      if (res.data.blog) setblog(res.data.blog);
      setusername(res.data.login);
      setbio(res.data.bio);
    });
  }, []);

  return (
    <div className="info-box" style={{ color: "white" }}>
      <Page loader={"bubble-spin"} color={"#5cf39b"} size={10} duration={10}>
        <div className="top-bar">
          <div className="grey-circle"></div>
          <div className="grey-circle"></div>
          <div className="grey-circle"></div>
        </div>
        <div className="info-body">
          <h1 style={{ color: "#59f198" }}>
            <span>➞</span>
            {username || <Skeleton />}
          </h1>
          <h1 style={{ color: "#FF6347" }}>
            <span>➞</span>
            {name || <Skeleton animation="wave" />}
          </h1>
          {blog ? (
            <h1 style={{ color: "#ADD8E6" }}>
              <span>➞</span>
              {blog || <Skeleton animation="wave" />}
            </h1>
          ) : null}
          <p style={{ color: "grey" }}>
            <span>➞</span>
            {bio || <Skeleton animation="wave" />}
          </p>
        </div>
      </Page>
    </div>
  );
}
