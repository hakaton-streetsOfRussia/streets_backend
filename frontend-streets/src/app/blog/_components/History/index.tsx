import Image from "next/image";
import style from "./style.module.scss";
import Barcode from "@/public/images/barcode.svg";

export const History = () => {
  return (
    <>
      <div className={style.wrapperTitle}>
        <h2 className={style.title}>ИСТОРИЧЕСКИЕ ЛОНГРИДЫ И СПРАВКИ</h2>
      </div>
      <div className={style.container}>
        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.content}>
              <Image
                className={style.photo}
                src="/images/history1.png"
                alt="photo"
                width="386"
                height="282"
              ></Image>
              <p className={style.subtitle}>The History of Train Graffiti</p>
              <p className={style.description}>
                Автор статьи, Эли Анапур (наст. имя – Бильяна Пурич), штатный
                автор и редактор журнала «Widewalls», имеет степень магистра в
                области эстетики кино Оксфордского университета.
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
                src="/images/history1.png"
                alt="photo"
                width="386"
                height="282"
              ></Image>
              <p className={style.subtitle}>The History of Train Graffiti</p>
              <p className={style.description}>
                Автор статьи, Эли Анапур (наст. имя – Бильяна Пурич), штатный
                автор и редактор журнала «Widewalls», имеет степень магистра в
                области эстетики кино Оксфордского университета.
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
                src="/images/history1.png"
                alt="photo"
                width="386"
                height="282"
              ></Image>
              <p className={style.subtitle}>The History of Train Graffiti</p>
              <p className={style.description}>
                Автор статьи, Эли Анапур (наст. имя – Бильяна Пурич), штатный
                автор и редактор журнала «Widewalls», имеет степень магистра в
                области эстетики кино Оксфордского университета.
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
