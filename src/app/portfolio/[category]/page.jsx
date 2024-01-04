import React from "react";
import style from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  console.log({ params });
  return (
    <div className={style.container}>
      <h1 className={style.catTitle}>{params.category}</h1>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>test</h1>
          <p className={style.description}>description</p>
          <Button text="See more" url="#" />
        </div>
        <div className={style.imgContainer}>
          <Image
            className={style.img}
            src="https://images.pexels.com/photos/12944595/pexels-photo-12944595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=""
          />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>test</h1>
          <p className={style.description}>description</p>
          <Button text="See more" url="#" />
        </div>
        <div className={style.imgContainer}>
          <Image
            className={style.img}
            src="https://images.pexels.com/photos/12944595/pexels-photo-12944595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
