import React from 'react'
import style from "./TitleBar.module.css"
import '../TitleBar/cropped-light-1.png' 
import { AiFillFileWord } from 'react-icons/ai';

export default function TitleBar() {
  return (
    <div className={style.main} style={{backgroundImage:"cropped-light-1.png"}}>
       <img className={style.img} src="https://media1.giphy.com/media/2epS8zhisYtHDCKrWv/giphy.gif" alt="img" />
       <span>OOGLE Doc</span>
       <AiFillFileWord className={style.file}/> 
    </div>
  )
}