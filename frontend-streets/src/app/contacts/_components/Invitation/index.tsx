import Image from "next/image";
import style from "./style.module.scss";

export const Invitation = () => {
  return (
    <>
      <div className={style.wrapperTitle}>
        <h2 className={style.title}>СТАТЬ ПРЕДСТАВИТЕЛЕМ ПРОЕКТА В РЕГИОНЕ</h2>
      </div>
      <div className={style.container}>
        <h2 className={style.title}>Готов стать частью команды?</h2>
        <div className={style.content}>
          <div className={style.description}>
            <p className={style.text}>
              <span className={style.span}>Наш представитель</span> должен
              искренне желать сделать свой город лучше.
            </p>
            <p className={style.text}>
              Если Вам не безразлично будущее наших детей, Вы хотите видеть
              сильную страну и с пользой проводить досуг - вступайте в нашу
              команду!
            </p>
            <button className={style.button} type="button">
              Заполнить анкету
            </button>
          </div>
          <Image
            className={style.photo}
            src="/images/contacts/morephotos.svg"
            alt="photo"
            width="843"
            height="608"
          ></Image>
        </div>
      </div>
    </>
  );
};
