import React, { useState, useEffect } from "react";
import "./Relogio.css";

function RelogioDigital() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div>
        <p>{hora}</p>
      </div>
    </main>
  );
}

export default RelogioDigital;
