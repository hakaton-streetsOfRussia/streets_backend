'use client'
import googleIcon from '@/public/images/home/googleIcon.png'
import vkIcon from '@/public/images/home/vkIcon.png'
import yandexIcon from '@/public/images/home/yandexIcon.png'
import Logo from '@/public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { TfiSearch } from 'react-icons/tfi'
import Modal from 'react-modal'
import styles from './style.module.scss'
function AppHeader() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (path: string) => pathname.startsWith(path)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <header className={styles.header}>
      <div className={styles.ddd}>
        <div className={styles.logoWrapper} onClick={() => router.push('/')}>
          <Logo />
        </div>
        <div className={styles.search_bar}>
          <form className={styles.form}>
            <input className={styles.search} type="text" name="query" placeholder="Выберите свой регион" required />
            <button type="submit" className={styles.button}>
              <TfiSearch style={{ color: 'white', fontSize: '24px', cursor: 'pointer' }} />
            </button>
          </form>
        </div>
        <button className={styles.registration} onClick={() => setModalIsOpen(true)}>
          Зарегистрироваться
        </button>

        {!menuVisible ? (
          <div onClick={toggleMenu} className={styles.burger}>
            <span></span>
          </div>
        ) : (
          <div onClick={toggleMenu} className={`${styles.burger} ${styles.active}`}>
            <span></span>
          </div>
        )}
      </div>
      {menuVisible && (
        <nav className={styles.dropdownMenu}>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <Link href="/about-us" className={isActive('/about-us') ? styles.linkactive : styles.link}>
                О нас
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link href="/disciplines" className={isActive('/disciplines') ? styles.linkactive : styles.link}>
                Дисциплины
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link href="/calendar" className={isActive('/calendar') ? styles.linkactive : styles.link}>
                Календарь мероприятий
              </Link>
            </li>
            <li className={styles.list_item}>
              <p className={styles.link}>Площадки</p>
            </li>
            <li className={styles.list_item}>
              <Link href="/blog" className={isActive('/blog') ? styles.linkactive : styles.link}>
                Блог
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link href="/contacts" className={isActive('/contacts') ? styles.linkactive : styles.link}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        ariaHideApp={false}
        className={styles.modal}
        style={{ overlay: { zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' } }}
      >
        <div className={styles.modalContent}>
          <div className={styles.titleWrapper}>
            <span className={styles.modalTitle}>Регистрация</span>
            <span className={styles.alreadyRegistered}>
              Уже зарегистрированы? <span className={styles.link}>Войти</span>
            </span>
          </div>
          <form className={styles.form}>
            <div className={styles.inputWrapper}>
              <label htmlFor="nameInput">Имя</label>
              <input id="nameInput" type="text" />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="emailInput">Email</label>
              <input id="emailInput" type="email" />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="passwordInput">Пароль</label>
              <input id="passwordInput" type="password" />
            </div>
          </form>
          <div className={styles.socialsAuth}>
            <span className={styles.socialsAuthTitle}>Авторизация через соцсети</span>
            <div className={styles.iconsWrapper}>
              <Image src={vkIcon} alt="vk" />
              <Image src={yandexIcon} alt="yandex" />
              <Image src={googleIcon} alt="google" />
            </div>
            <span className={styles.conditions}>
              Нажимая Зарегистрироваться, Вы соглашаетесь с <span className={styles.underline}>Условиями</span> и{' '}
              <span className={styles.underline}>Политикой конфиденциальности</span>
            </span>
            <button className={styles.registration}>Зарегистрироваться</button>
          </div>
          <button className={styles.modalGoBack} onClick={() => setModalIsOpen(false)}>
            <IoIosArrowRoundBack size="60px" />
          </button>
        </div>
      </Modal>
    </header>
  )
}

export default AppHeader
