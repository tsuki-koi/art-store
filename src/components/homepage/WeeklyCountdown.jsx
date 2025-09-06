import React, { useEffect, useState } from "react";

const WeeklyCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getEndOfWeek() {
    let now = new Date();
    let dayOfWeek = now.getDay();
    let daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
    let endOfWeek = new Date(now);

    endOfWeek.setDate(now.getDate() + daysUntilSunday);
    endOfWeek.setHours(23, 59, 59, 999);

    return endOfWeek.getTime();
  }

  function getTimeLeft() {
    let now = new Date().getTime();
    let timeLeft = getEndOfWeek() - now;

    return {
      d: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      h: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      m: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      s: Math.floor((timeLeft % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer" data-aos="zoom-in" data-aos-duration="700">
      <span>{timeLeft.d}</span>d : <span>{timeLeft.h}</span>h : <span>{timeLeft.m}</span>m :
      <span>{timeLeft.s}</span>s
    </div>
  );
};

export default WeeklyCountdown;
