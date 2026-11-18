import { useState, useEffect, useRef } from "react";
import { generateConfetti } from "../../../core/data/home/confetti";
import SpinnerButton from "../../components/button";

export default function HomePage({
  friendName = "Rahelll",
  startYear = 2008,
  endYear = 2026,
  songSrc = "/music/ultah.mpeg",
}) {
  const [isBlown, setIsBlown] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);
  const finalAge = endYear - startYear;
  const currentYear = Math.round(startYear + (progress / 100) * finalAge);

  const handleBlowCandle = () => {
    if (!isBlown) {
      setIsBlown(true);
      setConfetti(generateConfetti(55));
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    let frameId;
    let startTime = null;
    const duration = 2200;

    const timer = setTimeout(() => {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const raw = Math.min((timestamp - startTime) / duration, 1);
        const eased = raw < 0.5 ? 4 * raw * raw * raw : 1 - Math.pow(-2 * raw + 2, 3) / 2;

        setProgress(eased * 100);
        if (raw < 1) {
          frameId = requestAnimationFrame(animate);
        } else {
          setIsFinished(true);
          setConfetti(generateConfetti(40));
        }
      };
      frameId = requestAnimationFrame(animate);
    }, 1400);

    return () => {
      clearTimeout(timer);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-slate-50 via-pink-50/40 to-white overflow-hidden text-center">
      <audio
        ref={audioRef}
        src={songSrc}
        onEnded={() => setIsPlaying(false)}
      />

      {confetti.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
          {confetti.map((item) => (
            <div
              key={item.id}
              style={{
                left: item.left,
                width: `${item.size}px`,
                height: `${item.size * 0.6}px`,
                "--fall-duration": item.duration,
                animationDelay: item.delay,
              }}
              className={`absolute top-0 rounded-xs animate-confetti ${item.color}`}
            />
          ))}
        </div>
      )}

      <h1
        style={{ "--delay": "1.6s" }}
        className="text-3xl sm:text-5xl font-bold text-gray-800 tracking-tight max-w-xl leading-tight animate-text-reveal"
      >
        Happy Birthday,{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          {friendName}!
        </span>
      </h1>

      <p
        style={{ "--delay": "1.85s" }}
        className="mt-3 text-gray-600 text-sm sm:text-base max-w-md leading-relaxed animate-text-reveal"
      >
        Wish u all the besttt,
        <span className="font-medium text-gray-800"> make a wish </span>
        dulu terus klik lilinnya yaa
      </p>
      <div className="text-red-700 my-5">Klik Lilinnya! jgn lupa scroll ke bwh</div>

      <div className="mt-6 mb-4 flex flex-col items-center">
        <button
          onClick={handleBlowCandle}
          aria-label="Tiup Lilin Ulang Tahun"
          className="group relative flex flex-col items-center cursor-pointer focus:outline-none transition-transform active:scale-95"
        >
          <div className="relative flex flex-col items-center mb-1 z-30">
            <div
              style={{ "--delay": "1.15s" }}
              className="h-8 flex items-end justify-center animate-ignite"
            >
              {!isBlown ? (
                <div className="relative flex items-center justify-center animate-flicker">
                  <div className="w-6 h-8 bg-amber-300/40 rounded-full blur-xs absolute" />
                  <div className="w-3.5 h-6 bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200 rounded-full rounded-t-none rotate-180 shadow-sm" />
                </div>
              ) : (
                <span className="text-xs text-gray-400 animate-bounce">💨 wushh~</span>
              )}
            </div>
            <div
              style={{ "--delay": "0.85s" }}
              className="w-3 h-10 bg-gradient-to-b from-pink-400 to-pink-500 rounded-t-sm border-x border-t border-pink-600/20 flex flex-col justify-around py-1 animate-drop-layer"
            >
              <div className="w-full h-1 bg-white/60 -rotate-12" />
              <div className="w-full h-1 bg-white/60 -rotate-12" />
            </div>
          </div>

          <div
            style={{ "--delay": "0.6s" }}
            className="w-32 h-12 bg-pink-200 rounded-t-2xl border-2 border-pink-300 relative overflow-hidden shadow-2xs z-20 animate-drop-layer"
          >
            <div className="flex justify-around">
              {[4, 5, 3.5, 4.5].map((h, i) => (
                <div key={i} style={{ height: `${h * 4}px` }} className="w-6 bg-white rounded-b-full" />
              ))}
            </div>
          </div>

          <div
            style={{ "--delay": "0.35s" }}
            className="w-44 h-14 bg-purple-200 rounded-t-xl rounded-b-lg border-2 border-purple-300 relative overflow-hidden shadow-sm z-10 animate-drop-layer"
          >
            <div className="flex justify-around">
              {[4, 5, 3.5, 5, 4].map((h, i) => (
                <div key={i} style={{ height: `${h * 4}px` }} className="w-7 bg-white rounded-b-full" />
              ))}
            </div>
          </div>

          <div
            style={{ "--delay": "0.1s" }}
            className="w-52 h-3 bg-gray-200 rounded-full mt-0.5 shadow-inner animate-text-reveal"
          />
        </button>
      </div>

      <div
        style={{ "--delay": "1.35s" }}
        className="w-full max-w-xs mb-5 px-4 py-3 bg-white/90 rounded-2xl border border-pink-100 shadow-xs animate-text-reveal"
      >
        <div className="flex items-center justify-between text-xs font-semibold mb-2 tabular-nums">
          <span className="text-gray-400">{startYear}</span>
          <span className="px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-600 font-bold">
            {currentYear}
          </span>
          <span className={isFinished ? "text-purple-600 font-bold" : "text-gray-400"}>
            {endYear}
          </span>
        </div>

        <div className="relative w-full h-3 bg-gray-100 rounded-full flex items-center">
          <div
            className="h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
          <div
            className="w-5 h-5 bg-white border-2 border-purple-500 rounded-full shadow-md absolute -translate-x-1/2 flex items-center justify-center"
            style={{ left: `${progress}%` }}
          >
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
          </div>
        </div>

        <div className="h-7 mt-2.5 flex items-center justify-center">
          {isFinished ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-xs font-bold animate-pop-age">
              Congratss ultah yg ke-{finalAge} Tahun!
            </span>
          ) : (
            <span className="text-[11px] text-gray-400">Ngitung dlu</span>
          )}
        </div>
      </div>

      <SpinnerButton to="/letter" />
    </section>
  );
}
