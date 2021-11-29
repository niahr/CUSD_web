import React, { useEffect, useState } from 'react';

export default function Animate() {
  const [index, setIndex] = useState(0);
  const texts = ['Strategists', 'Architects', 'Designers', 'Engineers']

  useEffect(() => {

    // Change text every 3 seconds (generates new index to pass)
    const timer = setInterval(() => {
      setIndex(previousIndex => {
        const newIndex = (previousIndex + 1) >= texts.length ? 0 : (previousIndex + 1);
        return newIndex;
      });
    }, 3000);

    // Clear the timer
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <span>{texts[index]}</span>
  );
}