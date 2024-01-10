"use client";

import React, { useEffect, useState } from "react";
import style from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json()
  //     setData(res.json());
  //     setIsLoading(true);
  //   };
  //   getData()
  // }, []);

 const session = useSession()

 console.log(session, "session")

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)



  return <div className={style.container}> Dashboard</div>;
};

export default Dashboard;
