import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Let`s Keep in Touch !!</h1>
      <div className={style.content}>
      <div className={style.imgContainer}> 
      <Image src="/contact.png" alt="" fill={true} className={style.image} />
      
      </div>
      <form className={style.form}>
        <input type="text" placeholder="name" className={style.input}/> 
        <input type="text" placeholder="email" className={style.input}/> 
        <textarea cols="30" rows="10" className={style.textArea} placeholder="MESSAGE"/> 
        <Button url="#" text="send"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
