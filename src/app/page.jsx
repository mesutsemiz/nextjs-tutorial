import Image from 'next/image';
import style from './page.module.css';
import Hero from "../../public/hero.png"


export default function Home() {
  return (
   <div className={style.container}>
    <Image src={Hero} alt='hero' className={style.img}/>
    {/* <Image src="https://images.pexels.com/photos/19343942/pexels-photo-19343942/free-photo-of-stadt-kunst-gebaude-architekt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={600} height={500} alt='hero' className={style.img}/> */}

   </div>
  )
}
