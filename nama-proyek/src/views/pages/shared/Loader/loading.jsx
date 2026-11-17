import { useState } from "react";

const generateShapes = (count = 25) => {
  const types = ["circle", "square", "triangle", "plus"];
  const colors = [
    "bg-pink-300/30 border-pink-400/40",
    "bg-purple-300/30 border-purple-400/40",
    "bg-blue-300/30 border-blue-400/40",
    "bg-yellow-300/30 border-yellow-400/40",
    "bg-emerald-300/30 border-emerald-400/40",
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    type: types[Math.floor(Math.random() * types.length)],
    color: colors[Math.floor(Math.random() * colors.length)],
    top: `${Math.floor(Math.random() * 95)}%`,
    left: `${Math.floor(Math.random() * 95)}%`,
    size: Math.floor(Math.random() * 24) + 12,
    duration: `${(Math.random() * 5 + 4).toFixed(1)}s`,
    delay: `${(Math.random() * 3).toFixed(1)}s`,
  }));
};

export default function LoadingScreen({ isFadingOut }) {
  const [shapes] = useState(() => generateShapes(25));

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center h-screen flex-col gap-3 overflow-hidden bg-slate-50 transition-all duration-500 ease-in-out ${
        isFadingOut
          ? "opacity-0 scale-95 pointer-events-none"
          : "opacity-100 scale-100 animate-fade-in"
      }`}
    >
      {/* Background Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {shapes.map((shape) => {
          const style = {
            top: shape.top,
            left: shape.left,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            "--duration": shape.duration,
            "--delay": shape.delay,
          };

          if (shape.type === "triangle") {
            return (
              <div
                key={shape.id}
                style={{
                  top: shape.top,
                  left: shape.left,
                  "--duration": shape.duration,
                  "--delay": shape.delay,
                }}
                className="absolute animate-float opacity-40 text-pink-400 select-none"
              >
                <svg width={shape.size} height={shape.size} viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12,2 22,20 2,20" />
                </svg>
              </div>
            );
          }

          if (shape.type === "plus") {
            return (
              <div
                key={shape.id}
                style={{
                  top: shape.top,
                  left: shape.left,
                  fontSize: `${shape.size}px`,
                  "--duration": shape.duration,
                  "--delay": shape.delay,
                }}
                className="absolute animate-float font-bold text-purple-400/40 select-none leading-none"
              >
                +
              </div>
            );
          }

          return (
            <div
              key={shape.id}
              style={style}
              className={`absolute border animate-float ${shape.color} ${
                shape.type === "circle" ? "rounded-full" : "rounded-md"
              }`}
            />
          );
        })}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-20 h-20 rounded-full bg-white border shadow-sm animate-elastic-bounce flex flex-col items-center justify-center">
          <div className="flex justify-center gap-5 items-center">
            <div className="relative">
              <div className="bg-black rounded-full w-3 h-3"></div>
              <div className="bg-pink-600/20 rounded-full w-5 h-5 absolute -left-2.5 top-2"></div>
            </div>
            <div className="relative">
              <div className="bg-black rounded-full w-3 h-3"></div>
              <div className="bg-pink-600/20 rounded-full w-5 h-5 absolute -right-2.5 top-2"></div>
            </div>
          </div>

          <div className="rounded-b-full border-b-2 border-black w-4 h-2 mt-1"></div>
        </div>

        <p className="text-gray-700 font-medium">sabar yaa &lt;3</p>
      </div>
    </div>
  );
}
