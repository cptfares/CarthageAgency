import { useEffect, useState } from "react";

export function BackgroundGradientAnimation() {
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);

  useEffect(() => {
    const updateGradient = () => {
      // Update gradient based on curX and curY
      console.log(`Current X: ${curX}, Current Y: ${curY}`);
      // Your logic to update the background gradient
    };

    updateGradient();

    // Optional: if you need to remove listeners or other cleanup actions
    return () => {
      // Cleanup logic if any
    };
  }, [curX, curY]); // Add curX and curY as dependencies

  const handleMouseMove = (event: MouseEvent) => {
    // Example: Update curX and curY based on mouse movement
    setCurX(event.clientX);
    setCurY(event.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup listener when component is unmounted
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: `linear-gradient(${curX}deg, #ff7e5f, #feb47b)`,
      }}
    >
      {/* Your component content */}
    </div>
  );
}
