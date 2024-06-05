"use client";
import { useState } from "react";
import { Calendar } from "./_components/Calendar";
import style from "./style.module.scss";
import { Dropdown } from "./_components/Dropdown";
import { EventCard } from "./_components/Eventcard";

export default function Calendarevents() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>(
    null
  );

  const handleDateSelect = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <main className={style.main}>
      <h2 className={style.title}>Календарь мероприятий</h2>
      <div className={style.content}>
        <div className={style.choice}>
          <div className={style.calendarWrapper}>
            <Calendar onDateSelect={handleDateSelect} />
          </div>
          <div className={style.dropdownmenu}>
            <Dropdown
              label="УКАЖИТЕ РЕГИОН"
              options={[
                "Московская область",
                "хмао",
                "Ивановская область",
                "Ростовская область",
                "Калининградская область",
                "Амурская область",
                "Алтайский край",
              ]}
              onSelect={setSelectedRegion}
              selectedOption={selectedRegion}
            />

            <Dropdown
              label="ВЫБЕРИТЕ СОБЫТИЕ"
              options={["ТРЕНИРОВКА", "СОРЕВНОВАНИЕ", "ВЫСТУПЛЕНИЯ"]}
              onSelect={setSelectedEvent}
              selectedOption={selectedEvent}
            />

            <Dropdown
              label="ВЫБЕРИТЕ ДИСЦИПЛИНУ"
              options={[
                "Parkour",
                "Workout",
                "Бмх",
                "Скейтбординг",
                "Трюковой самокат",
                "Фриран",
                "Трикинг",
                "Брейк-данс",
                "Граффити",
                "Диджеинг",
                "Реп",
              ]}
              onSelect={setSelectedDiscipline}
              selectedOption={selectedDiscipline}
            />
          </div>
        </div>
        <div className={style.events}>
          <div className={style.event}>
            <EventCard
              region="Амурская область г. Свободный"
              event="Тренировка"
              direction="Воркаут"
              imageSrc="/images/calendar/event.png"
              imageAlt="Example image"
            />
          </div>
          <div className={style.event}>
            <EventCard
              region="Амурская область г. Свободный"
              event="Тренировка"
              direction="Воркаут"
              imageSrc="/images/calendar/event.png"
              imageAlt="Example image"
            />
          </div>
          <div className={style.event}>
            <EventCard
              region="Амурская область г. Свободный"
              event="Тренировка"
              direction="Воркаут"
              imageSrc="/images/calendar/event.png"
              imageAlt="Example image"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
