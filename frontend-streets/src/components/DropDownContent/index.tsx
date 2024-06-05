'use client'
import ArrowIcon from '@/public/images/components/drop-down/drop-down-arrow.svg'
import { HTMLProps } from 'react'
import { v4 } from 'uuid'
import style from './style.module.scss'

type TDropDownContentProps = {
  options: TSelectableItem[]
  activeIndex?: number
  setterFunction: (index: number) => void
  isOpened: boolean
  className?: string
  wrapperClassName?: string
} & HTMLProps<HTMLUListElement>

export const DropDownContent = ({ options, activeIndex, setterFunction, isOpened, className, wrapperClassName, ...rest }: TDropDownContentProps) => {
  return (
    isOpened && (
      <div className={wrapperClassName ?? style.wrapper}>
        <ul className={`${className} ${style.container}`} {...rest}>
          {options.map((labelAndValue, i) => {
            if (i === activeIndex) return null
            return (
              <li key={v4()} onClick={() => setterFunction(i)}>
                {labelAndValue.label}
              </li>
            )
          })}
          <ArrowIcon className={style.arrow} />
        </ul>
      </div>
    )
  )
}
