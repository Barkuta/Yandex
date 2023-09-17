import React, { useEffect } from "react";
import s from "./Info.module.css";
import photoA from "../Assets/2023-09-17 15.14.38.jpg";
import photoY from "../Assets/2023-09-17 15.15.19.jpg";

const Info = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.photoBlock}>
          <div className={s.photoBlockText}>
            <span>Мои Фото.</span>
          </div>
          <div className={s.photo}>
            <img src={photoA} alt="" />
          </div>
          <div className={s.photo2}>
            <img src={photoY} alt="" />
          </div>
        </div>
        <div className={s.videoBlock}>
          <div className={s.videoBlockText}>
            <span>Screencast CSS</span>
          </div>
          <div className={s.video}></div>
        </div>
      </div>
    </div>
  );
};

export default Info;
