import { useEffect, useRef } from "react";
import WebGL from "../../webgl";
import styles from "./styles.module.css";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      new WebGL({
        canvas: canvasRef.current,
      });
    }
  }, []);

  return (
    <canvas
      className={styles.canvas}
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    ></canvas>
  );
};

export default Canvas;
