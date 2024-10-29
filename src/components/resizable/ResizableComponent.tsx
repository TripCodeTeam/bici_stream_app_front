// ResizableSeparator.tsx
import React from "react";

interface ResizableSeparatorProps {
  onResize: (delta: number) => void;
}

const ResizableSeparator: React.FC<ResizableSeparatorProps> = ({
  onResize,
}) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();

    const startX = e.clientX;

    const handleMouseMove = (event: MouseEvent) => {
      const delta = event.clientX - startX;
      onResize(delta);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      className="cursor-col-resize w-1 bg-gray-400"
      style={{ height: "100%", userSelect: "none" }}
    />
  );
};

export default ResizableSeparator;
