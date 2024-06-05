'use client'
import Arrow from '@/public/images/disciplines/nav-arrow.svg'
import dynamic from 'next/dynamic'
import Image, { StaticImageData } from 'next/image'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { v4 } from 'uuid'
import style from './style.module.scss'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

type tDPage = {
  titleText: ReactNode[] | JSX.Element[]
  titleImagePath: string | StaticImageData
  videoUrl: string
  imagesPaths: string[] | StaticImageData[]
}
export const DisciplinePageSkeleton = ({ titleText, titleImagePath, videoUrl, imagesPaths }: tDPage) => {
  //slides logic
  const sliderWrapperRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement[]>([])
  const [activeSlide, setActiveSlide] = useState(0)

  const increaseActiveSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1 >= imagesPaths.length ? 0 : prev + 1))
  }, [setActiveSlide, imagesPaths])

  const decreaseActiveSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 < 0 ? imagesPaths.length - 1 : prev - 1))
  }, [setActiveSlide, imagesPaths])

  //on active slide change
  useEffect(() => {
    if (!sliderWrapperRef.current) return
    const slides = slidesRef.current
    sliderWrapperRef.current.scrollTo({ left: slides[activeSlide].offsetLeft, behavior: 'smooth' })
  }, [activeSlide])

  const calculateImages = () => {
    const refs = [] as HTMLDivElement[]
    const checkAndApplyRef = (ref: HTMLDivElement | null) => {
      if (ref != null) refs.push(ref)
    }
    const res = imagesPaths.map((path, index) => {
      return <Image className={style.slideImage} key={v4()} ref={checkAndApplyRef} src={path} alt={`art ${index + 1}`} />
    })
    slidesRef.current = refs
    return res
  }

  return (
    <main className={style.main}>
      <div className={style.demoWrapper}>
        <div className={style.textWrapper}>
          {titleText.map((text) => (
            <div style={{ display: 'contents' }} key={v4()}>
              {text}
            </div>
          ))}
        </div>
        <Image src={titleImagePath} alt="demo" />
      </div>
      <div className={style.line} />
      <div className={style.center}>
        <div className={style.videoWrapper}>
          <ReactPlayer url={videoUrl} width="100%" height="100%" autoPlay loop controls={false} playing={true} volume={0} muted={true} />
        </div>
      </div>
      <div className={style.lineWrapper}>
        <Marquee>
          <span className={style.runningLine}># Улицы России # Улицы начинаются с тебя # Город # Мы # Дружба </span>
        </Marquee>
      </div>
      <div className={style.sliderWrapper} ref={sliderWrapperRef}>
        {calculateImages()}
      </div>
      <div className={style.sliderButtons}>
        <button type="button" className={style.sliderButton} onClick={decreaseActiveSlide}>
          <Arrow style={{ rotate: '180deg' }} />
        </button>
        <button type="button" className={style.sliderButton} onClick={increaseActiveSlide}>
          <Arrow />
        </button>
      </div>
    </main>
  )
}
