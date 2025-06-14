// CalendarCard.js
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendarStyles.css";

export default function CalendarCard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className=" dark:bg-zinc-900 p-4 rounded shadow text-gray-800 dark:text-gray-100">
      <Calendar
        onChange={setDate}
        value={date}
        className="w-full rounded h-64 overflow-hidden"
        tileClassName="!text-sm" // you can style tiles if needed
      />
    </div>
  );
}
