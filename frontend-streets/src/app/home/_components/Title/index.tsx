'use client'
import LogoVideo from '@/public/images/logo-video.svg'
import dynamic from 'next/dynamic'
import style from './style.module.scss'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })
export const Title = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.videoWrapper}>
        <div className={style.logoWrapper}>
          <LogoVideo className={style.logo} fill="white" />
          <p>Общероссийская общественная организация</p>
        </div>
        <div className={style.fogging}></div>
        <ReactPlayer width="100%" height="100%" url={videoUrl} autoPlay loop controls={false} playing={true} volume={0} muted={true} />
      </div>
    </div>
  )
}
