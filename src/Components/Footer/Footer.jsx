import React from "react";
import s from "./Footer.module.css";
import vector from "../Assets/tg.png";
import ws from "../Assets/logo-whatsapp.svg";
import inst from "../Assets/logo-instagram.svg";

const Footer = () => {
  return (
    <footer className={s.footer}>
      {/* <div className={s.contacts}>
        <a href="#" className={s.tg}>
          <img src={vector} alt="Telegram" />
        </a>
        <a href="#" className={s.ws}>
          <ion-icon src={ws}> </ion-icon>
        </a>
        <a href="#" className={s.inst}>
          <ion-icon src={inst}> </ion-icon>
        </a>
      </div> */}
      <div className={s.rights}>
        <p>© 2023, Razrab All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
