import React, { useEffect, useState } from "react";
import s from "./Services.module.css";

const Services = () => {
  const [consist, setConsist] = useState(false);

  useEffect(() => {
    let animation = () => {
      let scrollTop = window.scrollY;
      let stages = document.getElementById("elem");
      let stagesCenter = Math.floor(stages.offsetHeight / 12);
      return scrollTop >= stagesCenter ? setConsist(true) : setConsist(false);
    };
    document.addEventListener("scroll", animation, true);
    return () => {
      document.removeEventListener("scroll", animation, true);
    };
  }, []);

  return (
    <div className={s.sevices}>
      <div className={s.mainText}>
        <span>Почему программирование стало любимым делом:</span>
      </div>
      <div className={s.getBlock}>
        <div className={s.getBlockText}>
          <span>What you will get:</span>
        </div>
        <div className={s.items}>
          <span>
            The functionality of the site <br /> corresponding to 2023
          </span>
          <span>Stylish design created specifically for your project</span>
          <span>
            Adaptive layout for convenient site display on mobile devices
          </span>
        </div>
        <div className={s.itemsText}>
          Full readiness of the site for promotion and sales
        </div>
      </div>
      <div id="elem" className={consist ? s.stagesBlack : s.stages}>
        <div className={consist ? s.stagesTextWhite : s.stagesText}></div>
        <div className={s.stagesBlockWrapper}>
          <div className={s.wrapperBlueStick}>
            <div className={consist ? s.blueStickTrue : s.blueStick}></div>
          </div>
          <div className={s.wrapperYellowStick}>
            <div className={consist ? s.yellowStickTrue : s.yellowStick}></div>
          </div>
          <div className={s.wrapperGreenStick}>
            <div className={consist ? s.greenStickTrue : s.greenStick}></div>
          </div>
          <div className={s.stagesBlock}>
            <div className={s.firstItem}>
              <div className={consist ? s.numberOneWhite : s.numberOne}>
                <span id="child2">1</span>
              </div>
              <div className={consist ? s.textOneWhite : s.textOne}>
                <span id="child3">
                  Программирование предоставляет бескрайние возможности для
                  креатива
                </span>
              </div>
            </div>
            <div className={s.border}></div>
            <div className={s.firstItem}>
              <div className={consist ? s.numberOneWhite : s.numberOne}>
                <span id="child4">2</span>
              </div>
              <div className={s.textTwo}>
                <span
                  id="child5"
                  className={consist ? s.textTwo1White : s.textTwo1}
                >
                  Программирование меняет мир
                </span>
                <span className={s.textTwo2}>
                  Возможность помочь людям упростить жизнь
                </span>
              </div>
            </div>
            <div className={s.border}></div>
            <div className={s.firstItem}>
              <div className={consist ? s.numberOneWhite : s.numberOne}>
                <span id="child6">3</span>
              </div>
              <div className={consist ? s.textOneWhite : s.textOne}>
                <span id="child7">
                  Ощущение причастности к чему-то большому
                </span>
              </div>
            </div>
            <div className={s.border}></div>
            <div className={s.firstItem}>
              <div className={consist ? s.numberOneWhite : s.numberOne}>
                <span id="child8">4</span>
              </div>
              <div className={s.textTwo}>
                <span
                  id="child9"
                  className={consist ? s.textTwo1White : s.textTwo1}
                >
                  Сообщество
                </span>
                <span className={s.textTwo2}>
                  Программисты образуют большое комьюнитики интересных людей.
                </span>
              </div>
            </div>
            <div className={s.border}></div>
            <div className={s.firstItem}>
              <div className={consist ? s.numberOneWhite : s.numberOne}>
                <span id="child10">5</span>
              </div>
              <div className={s.textTwo}>
                <span
                  id="child11"
                  className={consist ? s.textTwo1White : s.textTwo1}
                >
                  Непрерывное обучение
                </span>
                <span className={s.textTwo2}>
                  Возможность бесконечно развиваться и расти профессионально.
                </span>
              </div>
            </div>
            <div className={s.border}></div>
            <div className={s.firstItem}>
              <div className={consist ? s.numberOneWhite : s.numberOne}>
                <span id="child12">6</span>
              </div>
              <div className={s.textTwo}>
                <span
                  id="child13"
                  className={consist ? s.textTwo1White : s.textTwo1}
                >
                  Программирование - это путь к саморезализации.
                </span>
                <span className={s.textTwo2}></span>
              </div>
            </div>
            <div className={s.border}></div>
            <div className={s.firstItem}>
              <div className={consist ? s.numberOneWhite : s.numberOne}>
                <span id="child14">7</span>
              </div>
              <div className={s.textTwo}>
                <span
                  id="child15"
                  className={consist ? s.textTwo1White : s.textTwo1}
                >
                  Комфорт в работе.
                </span>
                <span className={s.textTwo2}>
                  Возможность выбирать форму работы и график.
                </span>
              </div>
            </div>
            <div className={s.border}></div>
            <div className={s.firstItem}>
              <div className={consist ? s.numberOneWhite : s.numberOne}>
                <span id="child16">8</span>
              </div>
              <div className={s.textTwo11}>
                <span
                  id="child17"
                  className={consist ? s.textTwo11White : s.textTwo11}
                >
                  В IT ценят труд.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
