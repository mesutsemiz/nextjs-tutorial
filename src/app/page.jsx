import Image from 'next/image';
import style from './page.module.css';
import Hero from "../../public/hero.png"



export default function Home() {
  return (
    <div className={style.container}>
    <div className={style.item}>
      <h1 className={style.title}>
        Better design for your digital products.
      </h1>
      <p className={style.desc}>
        Turning your Idea into Reality. We bring together the teams from the
        global tech industry.
      </p>
      <button className={style.button}>See Our Works</button>
s    </div>
    <div className={style.item}>
      <Image src={Hero} alt="" className={style.img} />
    {/* <Image src="https://images.pexels.com/photos/19343942/pexels-photo-19343942/free-photo-of-stadt-kunst-gebaude-architekt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={600} height={500} alt='hero' className={style.img}/> */}
    </div>
  </div>
  )
}
