import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendarStyles.css";

export default function CalendarCard() {
  const [date, setDate] = useState(new Date());

  const today = new Date();

  return (
    <div className="dark:bg-zinc-900 p-3 pt-1 rounded-3xl border common-border-color shadow h-72 w-full flex items-center justify-center overflow-hidden">
      <Calendar
        onChange={setDate}
        value={date}
        showNeighboringMonth={true}
        tileDisabled={({ date, view }) =>
          view === "month" && date.getMonth() !== today.getMonth()
        }
        tileClassName={({ date: tileDate, view }) => {
          const isToday =
            tileDate.getDate() === today.getDate() &&
            tileDate.getMonth() === today.getMonth() &&
            tileDate.getFullYear() === today.getFullYear();

          const isSelected =
            tileDate.getDate() === date.getDate() &&
            tileDate.getMonth() === date.getMonth() &&
            tileDate.getFullYear() === date.getFullYear();

          let classes = "";
          if (isToday) classes += " today-highlight ";
          if (isSelected) classes += " selected-day ";
          if (view === "month" && tileDate.getMonth() !== today.getMonth())
            classes += " disabled-day ";

          return classes;
        }}
      />
    </div>
  );
}
