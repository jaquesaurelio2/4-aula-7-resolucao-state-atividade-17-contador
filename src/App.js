import * as React from "react";
import styles from "./app.module.css";

export default function App() {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount((oldCount) => {
      return oldCount + 1;
    });
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((count) => {
        return count - 1;
      });
    }
  };

  return (
    <div className={styles.counter}>
      <button
        className={styles.button}
        disabled={count === 0}
        onClick={handleDecrement}
      >
        -
      </button>
      <div className={styles.display}>{count}</div>
      <button className={styles.button} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
