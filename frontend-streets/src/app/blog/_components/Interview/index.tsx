import Image from "next/image";
import style from "./style.module.scss";
import Barcode from "@/public/images/barcode.svg";

export const Interview = () => {
  return (
    <>
      <div className={style.wrapperTitle}>
        <h2 className={style.title}>ИНТЕРВЬЮ С КУЛЬТОВЫМИ ЛИЧНОСТЯМИ</h2>
      </div>
      <div className={style.container}>
        <div></div>
        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.content}>
              <Image
                className={style.photo}
                src="/images/interview1.png"
                alt="photo"
                width="386"
                height="282"
              ></Image>
              <p className={style.description}>
                Михаил Китаев о своей общественной деятельности, о развитии
                воркаута в нашей стране и об участии в премии
                &laquo;Кардо&raquo;. Когда-то все начиналось не так осознанно
                бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла
                бла бла бла бла бла бла бла бла
              </p>
            </div>
            <Barcode />
            <button type="button" className={style.button}>
              Подробнее
            </button>
          </div>
          <div className={style.card}>
            <div className={style.content}>
              <Image
                className={style.photo}
                src="/images/interview1.png"
                alt="photo"
                width="386"
                height="282"
              ></Image>
              <p className={style.description}>
                Михаил Китаев о своей общественной деятельности, о развитии
                воркаута в нашей стране и об участии в премии
                &laquo;Кардо&raquo;. Когда-то все начиналось не так осознанно
                бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла
                бла бла бла бла бла бла бла бла
              </p>
            </div>
            <Barcode />
            <button type="button" className={style.button}>
              Подробнее
            </button>
          </div>
          <div className={style.card}>
            <div className={style.content}>
              <Image
                className={style.photo}
                src="/images/interview1.png"
                alt="photo"
                width="386"
                height="282"
              ></Image>
              <p className={style.description}>
                Михаил Китаев о своей общественной деятельности, о развитии
                воркаута в нашей стране и об участии в премии
                &laquo;Кардо&raquo;. Когда-то все начиналось не так осознанно
                бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла
                бла бла бла бла бла бла бла бла
              </p>
            </div>
            <Barcode />
            <button type="button" className={style.button}>
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
