// src/Calendar.js
import { useState, useEffect } from "react";
import "./Calendar_style.css";

// Como é feito isso?  - Pesquisar o porque do 0 e também do + 1
// A função é pra descobrir os dias do mês
const daysInMonth = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  0
).getDate();

const getCurrentDayInfo = () => {
  const today = new Date();
  const day = today.getDate();
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  const dayOfWeek = today.toLocaleDateString("ar-EG", {
    weekday: "long"
  });
  return { day, dayOfWeek };
};

export default function Calendar() {
  const [currentDay] = useState(getCurrentDayInfo());
  const [startIndex, setStartIndex] = useState(currentDay.day - 1);
  const [visibleDays, setVisibleDays] = useState([]);

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(() => {
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    setVisibleDays(getVisibleDays(days, startIndex));
  }, [startIndex]);

  const getVisibleDays = (days, startIndex) => {
    let visibleDaysArray = [];
    for (let i = 0; i < 6; i++) {
      visibleDaysArray.push(days[(startIndex + i) % daysInMonth]);
    }
    return visibleDaysArray;
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => prevIndex - 1);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      handleNext();
    }
    if (touchStartX - touchEndX < -50) {
      handlePrev();
    }
  };

  return (
    <div className="calendar-container">
      <div className="calendar-controls">
        <button onClick={handlePrev} className="control-button">
          Previous
        </button>
        <button onClick={handleNext} className="control-button">
          Next
        </button>
      </div>
      <div
        className="calendar"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {visibleDays.map((day, index) => {
          const date = new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            day
          );
          const dayOfWeek = date.toLocaleDateString("en-US", {
            weekday: "long"
          });
          return (
            <div
              key={index}
              className={`day-box ${day === currentDay.day ? "highlight" : ""}`}
            >
              <div className="day-of-week">{dayOfWeek}</div>
              <div className="day-number">{day}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

