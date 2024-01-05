"use client";

import React, { useEffect, useState } from "react";
import style from "./page.module.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
      });

      if (!res.ok) {
        setErr(true);
      }

      const data = await res.json()
      setData(res.json());
      setIsLoading(true);
    };
    getData()
  }, []);

  console.log(data)

  return <div className={style.container}> Dashboard</div>;
};

export default Dashboard;
