"use client";
import React, { useState } from "react";
import style from "./style.module.scss";

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
  selectedOption: string | null;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onSelect,
  selectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    onSelect(option); // Передаем выбранное значение в родительский компонент
    setIsOpen(false);
  };

  return (
    <div className={`${style.dropdown} ${isOpen ? style.open : ""}`}>
      <div className={style.label} onClick={toggleDropdown}>
        {selectedOption || label}
        <span className={style.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <ul className={style.options}>
          {options.map((option, index) => (
            <li
              key={index}
              className={style.option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
