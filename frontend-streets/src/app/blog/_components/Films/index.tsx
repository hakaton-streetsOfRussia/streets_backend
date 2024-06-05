import style from "./style.module.scss";

export const Films = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Блог</h2>
      <div className={style.wrapperTitle}>
        <h3 className={style.subtitle}>ДОКУМЕНТАЛЬНЫЕ ФИЛЬМЫ</h3>
      </div>
    </div>
  );
};
