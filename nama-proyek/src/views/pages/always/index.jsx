import { useState, useEffect } from "react";
import { ALWAYS } from "../../../core/data/always/lyrics";

export default function ClosingSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);

  // 1. Preload semua gambar & video sejak awal komponen dibuka agar tidak telat load
  useEffect(() => {
    ALWAYS.forEach((item) => {
      if (item.type === "image" && item.src) {
        const img = new Image();
        img.src = item.src;
      }
    });
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsedTime = (Date.now() - startTime) / 1000;
      setCurrentTime(elapsedTime);

      const maxEndTime = Math.max(
        ...ALWAYS.map((item) => item.holdUntil || item.time)
      );

      if (elapsedTime >= maxEndTime + 3) {
        setIsPlaying(false);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // 2. Simpan indeks asli dari array ALWAYS (originalIndex) sebelum di-filter
  const visibleLyrics = ALWAYS.map((item, originalIndex) => ({
    ...item,
    originalIndex,
  })).filter((item) => {
    const nextItemTime = ALWAYS[item.originalIndex + 1]?.time ?? item.time + 3;
    const endTime = item.holdUntil ?? nextItemTime;

    return currentTime >= item.time && currentTime < endTime;
  });

  return (
    <section className="relative w-screen h-dvh max-w-full max-h-dvh overflow-hidden bg-gradient-to-b from-slate-50 via-purple-50/30 to-pink-50/50 select-none">
      {isPlaying && (
        <div className="relative w-full h-full overflow-hidden">
          {visibleLyrics.map((item) => {
            // 3. Gunakan originalIndex sebagai key permanen agar TIDAK pernah bergeser
            const stableKey = `item-${item.originalIndex}`;
            const baseClass = `absolute transition-all duration-500 animate-fade-in ${item.className || ""}`;

            if (item.type === "image") {
              return (
                <img
                  key={stableKey}
                  src={item.src}
                  alt={item.alt || "lyric visual"}
                  loading="eager"
                  decoding="sync"
                  style={item.position || { top: "50%", left: "50%" }}
                  className={baseClass}
                />
              );
            }
            return (
              <p
                key={stableKey}
                style={item.position || { top: "50%", left: "50%" }}
                className={`max-w-[85vw] break-words ${baseClass} ${
                  !item.className ? "text-base font-bold text-slate-800" : ""
                }`}
              >
                {item.text}
              </p>
            );
          })}
        </div>
      )}
    </section>
  );
}
