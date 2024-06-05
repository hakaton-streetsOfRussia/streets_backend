"use client";
import Image from "next/image";
import style from "./style.module.scss";
import Barcode from "@/public/images/barcode.svg";

export const Directors = () => {
  return (
    <>
      <div className={style.wrapperTitle}>
        <h2 className={style.title}>РУКОВОДИТЕЛИ ПРОЕКТА</h2>
      </div>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.content}>
            <Image
              className={style.photo}
              src="/images/contacts/contacts1.png"
              alt="photo"
              width="386"
              height="282"
            ></Image>
            <p className={style.name}>Валентин Работенко</p>
            <p className={style.description}>
              Председатель Общероссийской общественной организации уличной
              культуры и спорта &laquo;Улицы России&raquo;
            </p>
            <p className={style.mail}>mail: rabotenko.v@streetrussia.ru</p>
            <p className={style.tel}>tel: +79187525517</p>
          </div>
          <Barcode />
          <button type="button" className={style.button}>
            Смотреть
          </button>
        </div>
        <div className={style.card}>
          <div className={style.content}>
            <Image
              className={style.photo}
              src="/images/contacts/contacts2.png"
              alt="photo"
              width="386"
              height="282"
            ></Image>
            <p className={style.name}>Вячеслав Груднев</p>
            <p className={style.description}>
              Заместитель Председателя по GR политике и административному
              управлению
            </p>
            <p className={style.mail}>mail: grudnev.v@streetrussia.ru</p>
            <p className={style.tel}>tel: 89624487403</p>
          </div>
          <Barcode />
          <button type="button" className={style.button}>
            Смотреть
          </button>
        </div>
        <div className={style.card}>
          <div className={style.content}>
            <Image
              className={style.photo}
              src="/images/contacts/contacts3.png"
              alt="photo"
              width="386"
              height="282"
            ></Image>
            <p className={style.name}>Ксения Замерова</p>
            <p className={style.description}>
              Заместитель Председателя по образовательной политике
            </p>
            <p className={style.mail}>mail: zamerova.k@streetrussia.ru</p>
            <p className={style.tel}>tel: +89627035473</p>
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
