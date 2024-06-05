'use client'
import Arrow from '@/public/images/disciplines/strange-arrow-down.svg'
import { DropDownContent } from '@/src/components/DropDownContent'
import { possibleDisciplines } from '@/src/utils/variables'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import style from './style.module.scss'

export const DisciplinesHead = () => {
  //drop down logic
  const router = useRouter()
  const pathName = usePathname()
  const getCurrentDiscipline = () => {
    for (let i = 0; i < possibleDisciplines.length; i++) {
      const labelValue = possibleDisciplines[i]
      if (pathName.includes(labelValue.label)) {
        return i
      }
    }
    return 0
  }
  const [dropDownIsOpened, setDropDownIsOpened] = useState(false)
  const [disciplinesIndex, setDisciplinesIndex] = useState(getCurrentDiscipline())

  const handleSetDisciplineIndex = (newIndex: number) => {
    setDisciplinesIndex(newIndex)
    router.push(possibleDisciplines[newIndex].label)
  }

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Дисциплины</h2>
      <button type="button" className={style.dropDownButton} onClick={() => setDropDownIsOpened((prev) => !prev)}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {possibleDisciplines[disciplinesIndex].label}
          <Arrow />
        </div>
        <DropDownContent
          options={possibleDisciplines}
          setterFunction={handleSetDisciplineIndex}
          activeIndex={disciplinesIndex}
          isOpened={dropDownIsOpened}
        />
      </button>
    </div>
  )
}
