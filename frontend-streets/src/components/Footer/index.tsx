"use client";
import FooterImage from "@/public/images/footer-image.svg";
import LogoFooter from "@/public/images/logo-footer.svg";
import VKFooter from "@/public/images/vk-footer.svg";
import YouTubeFooter from "@/public/images/youtube-footer.svg";
import style from "./style.module.scss";
import Link from "next/link";

function Footer() {
  return (
    <footer className={style.footer}>
      <LogoFooter />
      <div className={style.content}>
        <div className={style.info}>
          <div className={style.contacts}>
            <p className={style.contact}>+79037896545</p>
            <p className={style.contact}>info@streetrussia.ru</p>
            <p className={style.contact}>г.Москва Нижегородская улица д 56</p>
          </div>
          <div className={style.infoo}>
            <p className={style.inf}>ОГРН: 12177005119101</p>
            <p className={style.inf}>ИНН: 26362195992</p>
          </div>
          <div className={style.links}>
            <YouTubeFooter />
            <VKFooter />
          </div>
        </div>
        <div className={style.menu}>
          <p className={style.title_menu}>О проекте</p>
          <nav className={style.nav}>
            <ul className={style.list}>
              <li className={style.list_item}>
                <Link href="/about-us" className={style.link}>
                  О нас
                </Link>
              </li>
              <li className={style.list_item}>
                <Link href="/disciplines" className={style.link}>
                  Дисциплины
                </Link>
              </li>
              <li className={style.list_item}>
                <Link href="/calendar" className={style.link}>
                  Календарь мероприятий
                </Link>
              </li>
              <li className={style.list_item}>
                <Link href="/blog" className={style.link}>
                  Блог
                </Link>
              </li>
              <li className={style.list_item}>
                <Link href="/contacts" className={style.link}>
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.q}>
          <h2 className={style.title}>Готов стать частью команды?</h2>
          <button type="button" className={style.button}>
            Вступить в команду
          </button>
        </div>
      </div>
      <p className={style.text}>
        Общероссийская общественная организация уличной культуры и спорта «Улицы
        России»
      </p>
      <p className={style.date}>2021-2024</p>
      <div className={style.image}>
        <FooterImage />
      </div>
    </footer>
  );
}

export default Footer;
