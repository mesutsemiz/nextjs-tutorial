import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}


const BlogPost = async ({params}) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
{data.title}            
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            excepturi veritatis iste quos, natus delectus eum corporis quo
            voluptates ipsam, cumque fugit omnis nobis dolorum eveniet.
            Recusandae facere quasi itaque!
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/12944595/pexels-photo-12944595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John wick</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/12944595/pexels-photo-12944595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo saepe, aperiam provident vero officia error quibusdam commodi deleniti voluptas tempora quae consectetur placeat dignissimos accusamus veritatis? Temporibus doloribus provident aliquam!</p>
      </div>
    </div>
  );
};

export default BlogPost;
