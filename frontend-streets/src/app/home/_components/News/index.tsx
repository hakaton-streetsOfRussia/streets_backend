"use client";
import Barcode from "@/public/images/barcode.svg";
import style from "./style.module.scss";
import Image from "next/image";

export const News = () => {
  return (
    <>
      <div className={style.wrapperTitle}>
        <h2 className={style.title}>НОВОСТИ</h2>
      </div>
      <div className={style.container}>
        <div className={style.news}>
          <div className={style.content}>
            <Image
              className={style.photo}
              src="/images/home/news1.png"
              alt="photo"
              width="386"
              height="282"
            ></Image>
            <p className={style.description}>
              На &laquo;Играх будущего&raquo; стартовали
              фиджитал-скейтбордингсты
            </p>
            <p className={style.date}>29 мая 2024года</p>
            <p className={style.place}>Казань Ак-Барс Арена</p>
          </div>
          <Barcode />
          <button type="button" className={style.button}>
            Смотреть
          </button>
        </div>
        <div className={style.news2}>
          <div className={style.photo2} />
          <div className={style.info}>
            <p className={style.text}>Калининград</p>
            <p className={style.text}>1 июня</p>
            <p className={style.text}>18:00</p>
          </div>
          <p className={style.title}>Парк Юность</p>
        </div>
        <div className={style.news}>
          <div className={style.content}>
            <Image
              className={style.photo}
              src="/images/home/news2.png"
              alt="photo"
              width="386"
              height="282"
            ></Image>
            <p className={style.description}>
              Кубок России по BMX ритм-трек 2024 стартует в Москве
            </p>
            <p className={style.date}>10 мая 2024года</p>
            <p className={style.place}>
              Москва Велодром &laquo;Марьинский&raquo;
            </p>
          </div>
          <Barcode />
          <button type="button" className={style.button}>
            Смотреть
          </button>
        </div>
        <div className={style.news}>
          <div className={style.content}>
            <Image
              className={style.photo}
              src="/images/home/news3.png"
              alt="photo"
              width="386"
              height="282"
            ></Image>
            <p className={style.description}>
              Результаты Кубока России по BMX в Саранске
            </p>
            <p className={style.date}>4 ноября 2023 года</p>
            <p className={style.place}>Саранск</p>
          </div>
          <Barcode />
          <button type="button" className={style.button}>
            Смотреть
          </button>
        </div>
        <div className={style.news}>
          <div className={style.content}>
            <Image
              className={style.photo}
              src="/images/home/news4.png"
              alt="photo"
              width="386"
              height="282"
            ></Image>
            <p className={style.description}>
              Первое в мире выступление нейросетевого диджея
            </p>
            <p className={style.date}>20 декабря 2023</p>
            <p className={style.place}>Москва</p>
          </div>
          <Barcode />
          <button type="button" className={style.button}>
            Смотреть
          </button>
        </div>
      </div>
    </>
  );
};
