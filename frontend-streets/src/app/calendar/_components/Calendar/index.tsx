"use client";
import React, { useState } from "react";
import style from "./style.module.scss";
interface CustomCalendarProps {
  onDateSelect: (date: Date | null) => void;
}

export const Calendar: React.FC<CustomCalendarProps> = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handleDateClick = (day: number, isCurrentMonth: boolean) => {
    if (isCurrentMonth) {
      const date = new Date(currentYear, currentMonth, day);
      setSelectedDate(date);
      onDateSelect(date);
    }
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderDays = () => {
    const days = [];
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
    const prevMonthStartDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 2;

    for (let i = prevMonthDays - prevMonthStartDay; i <= prevMonthDays; i++) {
      days.push(
        <div key={`prev-${i}`} className={`${style.day} ${style.disabled}`}>
          {i}
        </div>
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === i &&
        selectedDate.getMonth() === currentMonth &&
        selectedDate.getFullYear() === currentYear;
      days.push(
        <div
          key={i}
          className={`${style.day} ${isSelected ? style.selected : ""}`}
          onClick={() => handleDateClick(i, true)}
        >
          {i}
        </div>
      );
    }

    const totalDisplayedDays = days.length;
    const nextMonthDaysToShow = 35 - totalDisplayedDays;
    for (let i = 1; i <= nextMonthDaysToShow; i++) {
      days.push(
        <div key={`next-${i}`} className={`${style.day} ${style.disabled}`}>
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className={style.calendarContainer}>
      <div className={style.header}>
        <button onClick={handlePreviousMonth} className={style.navButton}>
          &lt;
        </button>
        <span>
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button onClick={handleNextMonth} className={style.navButton}>
          &gt;
        </button>
      </div>
      <div className={style.weekdays}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className={style.weekday}>
            {day}
          </div>
        ))}
      </div>
      <div className={style.days}>{renderDays()}</div>
    </div>
  );
};
