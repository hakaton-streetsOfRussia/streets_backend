'use client'
import mapBg from '@/public/images/home/mapBg.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { SvgMap } from './map'
import style from './style.module.scss'

export const PageMap = () => {
  const [mapGroups, setMapGroups] = useState<SVGGElement[]>([])
  const [currentRegion, setCurrentRegion] = useState<string>('')
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const contentRef = useRef<HTMLDivElement>(null)
  const floatingRef = useRef<HTMLDivElement>(null)
  //handle map groups
  useEffect(() => {
    const mouseOverHandler = (e: MouseEvent) => {
      const eTarget = e.currentTarget as HTMLElement
      setCurrentRegion(eTarget.getAttribute('data-region') || '')
    }

    const mouseLeaveHandler = () => setCurrentRegion('')

    if (mapGroups.length == 0) {
      setMapGroups(Array.from(document.querySelectorAll<SVGGElement>('g[data-region]')))
      return
    }
    mapGroups.forEach((el) => {
      el.addEventListener('mouseover', mouseOverHandler)
      el.addEventListener('mouseleave', mouseLeaveHandler)
    })

    return () => {
      if (mapGroups.length == 0) return
      mapGroups.forEach((el) => {
        el.removeEventListener('mouseover', mouseOverHandler)
        el.removeEventListener('mouseleave', mouseLeaveHandler)
      })
    }
  }, [mapGroups])

  const mouseMoveHandler = useCallback(
    (e: MouseEvent) => {
      if (!contentRef.current || !floatingRef.current) return
      const { left, top } = contentRef.current!.getBoundingClientRect()
      setCursorPos({
        x: e.clientX - left - floatingRef.current!.offsetWidth / 2,
        y: e.clientY - top + 40,
      })
    },
    [contentRef, floatingRef]
  )

  // handle cursor
  useEffect(() => {
    if (!contentRef.current) return
    const content = contentRef.current
    content.addEventListener('mousemove', mouseMoveHandler)
    return () => {
      content?.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [contentRef, mouseMoveHandler])

  return (
    <div className={style.content} ref={contentRef}>
      <div className={style.paper}>
        <Image src="/images/home/paper.svg" layout="fill" objectFit="cover" quality={100} alt="paper" className="bg"></Image>
        <div className={style.links}>
          <button className={style.button}>Вступить в организацию</button>
          <Link className={style.link} href="/contacts">
            Команда региона
          </Link>
          <Link className={style.link} href="/calendar">
            Мероприятия
          </Link>
          <Link className={style.link} href="#">
            Новости
          </Link>
        </div>
      </div>
      <div className={style.mapWrapper}>
        <SvgMap />
        <div className={style.mapBgWrapper}>
          <Image className={style.mapBg} alt="map" src={mapBg} />
        </div>
      </div>
      {currentRegion && (
        <div className={style.floatingName} ref={floatingRef} style={{ left: cursorPos.x, top: cursorPos.y }}>
          {currentRegion}
        </div>
      )}
    </div>
  )
}
