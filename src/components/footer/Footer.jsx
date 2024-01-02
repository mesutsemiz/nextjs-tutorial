import React from 'react'
import style from './footer.module.css'
import Image from 'next/image'

const Footer = () => {

  return (
    <div  className={style.container}>
          <div>©2023 Lamamia. All rights reserved.</div>
          <div>
            <div className={style.social}>
            <Image src="/1.png"  width={15} height={15} className={style.icon} alt='LAmaDev'/>
            <Image src="/2.png"  width={15} height={15} className={style.icon} alt='LAmaDev'/>
            <Image src="/3.png"  width={15} height={15} className={style.icon} alt='LAmaDev'/>
            <Image src="/4.png"  width={15} height={15} className={style.icon} alt='LAmaDev'/>
            </div>
          </div>
    </div>
  )
}

export default Footer