"use client";
import React from "react";
import Image from "next/image";
import style from "./style.module.scss";

interface EventCardProps {
  region: string;
  event: string;

  direction: string;
  imageSrc: string;
  imageAlt: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  region,
  event,

  direction,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className={style.eventCard}>
      <div className={style.info}>
        <h3 className={style.region}>{region}</h3>
        <p className={style.label}>Мероприятие</p>
        <p className={style.event}>{event}</p>
        <p className={style.label}>Направления</p>
        <p className={style.direction}>{direction}</p>
        <button className={style.button}>Подробнее</button>
      </div>
      <div className={style.imageWrapper}>
        <Image src={imageSrc} alt={imageAlt} width="315" height="273" />
      </div>
    </div>
  );
};
