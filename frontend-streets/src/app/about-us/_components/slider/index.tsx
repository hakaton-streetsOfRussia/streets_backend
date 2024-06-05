'use client'
import Arrow from '@/public/images/about-us/smallArrow.svg'
import { useCallback, useEffect, useRef, useState } from 'react'
import style from './style.module.scss'

export const AboutUsSlider = () => {
  const sliderWrapperRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement[]>([])
  const [activeSlide, setActiveSlide] = useState(0)
  const increaseActiveSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1 >= slidesRef.current.length ? 0 : prev + 1))
  }, [setActiveSlide])
  const decreaseActiveSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 < 0 ? slidesRef.current.length - 1 : prev - 1))
  }, [setActiveSlide])

  const updateRef = useCallback(
    (ref: HTMLDivElement | null, index?: number) => {
      if (ref == null) return
      if (index) slidesRef.current[index] = ref
      else slidesRef.current.push(ref)
    },
    [slidesRef]
  )

  useEffect(() => {
    if (!sliderWrapperRef.current) return
    const slides = slidesRef.current
    sliderWrapperRef.current.scrollTo({ left: slides[activeSlide].offsetLeft, behavior: 'smooth' })
  }, [activeSlide])

  return (
    <>
      <div className={style.sliderWrapper} ref={sliderWrapperRef}>
        <div className={style.sliderItem} ref={updateRef}>
          <span className={style.sliderItemTitle}>Новаторство</span>
          <p className={style.sliderContent}>проект “Улицы России” возник из идеи и желания создавать новое и быть полезными окружающим.</p>
        </div>
        <div className={style.sliderItem} ref={updateRef}>
          <span className={style.sliderItemTitle}>Открытость</span>
          <p className={style.sliderContent}>
            Мы поддерживаем политику открытости и прозрачности в наших коммуникациях. Мы отвечаем за свои слова и придерживаемся информационной
            открытости.
          </p>
        </div>
        <div className={style.sliderItem} ref={updateRef}>
          <span className={style.sliderItemTitle}>Общность</span>
          <p className={style.sliderContent}>
            Наши убеждения и ценности нерушимы, как настоящая семья, а комьюнити на столько сплоченное, что ты без труда можешь отправиться в гости на
            другую часть страны и быть дома.
          </p>
        </div>
        <div className={style.sliderItem} ref={updateRef}>
          <span className={style.sliderItemTitle}>Здоровье </span>
          <p className={style.sliderContent}>
            Мы преследуем цель здорового развития среди уличных атлетов. В каждой дисциплине есть свои тонкости тренировочного поцессаи спртивной
            деятельности, поэтому наша цель привить подрастающему поколению правильное отношение к себе и своему здоровью.
          </p>
        </div>
        <div className={style.sliderItem} ref={updateRef}>
          <span className={style.sliderItemTitle}>Доброжелательность</span>
          <p className={style.sliderContent}>
            Только по-настоящему сильным духом люди могут верить в добро и всегда на помощь приходят люди, она защищает слабых и помогают нуждающимся.
          </p>
        </div>
      </div>
      <div className={style.sliderButtons}>
        <button type="button" className={style.sliderButton} onClick={decreaseActiveSlide}>
          <Arrow style={{ rotate: '180deg' }} />
        </button>
        <button type="button" className={style.sliderButton} onClick={increaseActiveSlide}>
          <Arrow />
        </button>
      </div>
    </>
  )
}
