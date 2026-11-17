import { useState, useRef } from "react";
import { QUIZ_QUESTIONS } from "../../../core/data/last/quiz";
import { SONG_LYRICS } from "../../../core/data/last/lyrics";

export default function ClosingSection({
  songTitle = "Opalite",
  songArtist = "Taylor Swift",
  songSrc = "/music/opalite.mpeg",
  spotifyPlaylistUrl = "https://open.spotify.com/playlist/0bAPjhgSpRh94DyiHQXzYB?si=BKj2GiRMSQ-1V735SudGAQ&utm_source=copy-link",
  spotifyCodeImage = "/images/spotify.png",
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLyricIdx, setCurrentLyricIdx] = useState(0);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const currentTime = audioRef.current.currentTime;

    for (let i = SONG_LYRICS.length - 1; i >= 0; i--) {
      if (currentTime >= SONG_LYRICS[i].time) {
        setCurrentLyricIdx(i);
        break;
      }
    }
  };

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIdx];

  const handleNext = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const activeLyric = SONG_LYRICS[currentLyricIdx]?.text || "";
  const nextLyric = SONG_LYRICS[currentLyricIdx + 1]?.text || "♪";

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 via-purple-50/30 to-pink-50/50 flex flex-col items-center gap-16">
      <div className="text-center max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Waiittt ini last <br /> (ga bohong)
        </h2>
      </div>

      <div className="w-full max-w-md bg-white rounded-3xl border border-pink-100 shadow-md p-6 flex flex-col gap-5">
        <audio
          ref={audioRef}
          src={songSrc}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => {
            setIsPlaying(false);
            setCurrentLyricIdx(0);
          }}
        />
        <div className="flex items-center gap-5">
          <div
            className={`relative w-20 h-20 rounded-full bg-gray-900 border-4 border-gray-800 shadow-inner flex items-center justify-center shrink-0 border-r-gray-400 border-l-gray-400 ${
              isPlaying ? "animate-spin" : ""
            }`}
            style={{ animationDuration: "4s" }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
            </div>
          </div>

          <div className="flex-1 min-w-0 text-left">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-pink-500">
              {isPlaying ? "Sedang Diputar 🎶" : "Belum Diputar"}
            </span>
            <h3 className="text-base font-bold text-gray-800 truncate mt-0.5">
              {songTitle}
            </h3>
            <p className="text-xs text-gray-500 truncate">{songArtist}</p>

            <button
              onClick={toggleMusic}
              className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-semibold shadow-xs hover:opacity-90 transition cursor-pointer"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </div>
        <div className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 p-4 text-left shadow-inner overflow-hidden">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1.5">
            Lyrics
          </p>
          <div className="space-y-1 min-h-[3.25rem] flex flex-col justify-center">
            <p
              key={currentLyricIdx}
              className="text-sm sm:text-base font-bold text-white leading-snug transition-all duration-300 animate-fade-in"
            >
              {activeLyric}
            </p>
            <p className="text-xs sm:text-sm font-medium text-white/50 truncate">
              {nextLyric}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-md bg-white rounded-3xl border border-purple-100 shadow-md p-6 sm:p-8 text-left">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
            Mini Quiz
          </span>
          {!isFinished && (
            <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold">
              {currentIdx + 1} / {QUIZ_QUESTIONS.length}
            </span>
          )}
        </div>

        {!isFinished ? (
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4 leading-snug">
              {currentQuestion.question}
            </h3>
            <div className="space-y-2.5">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedOption?.label === opt.label;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedOption(opt)}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition cursor-pointer ${
                      isSelected
                        ? "border-purple-500 bg-purple-50 text-purple-900 font-semibold shadow-2xs"
                        : "border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-purple-50/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
            {selectedOption && (
              <div className="mt-4 p-4 rounded-2xl bg-pink-50/80 border border-pink-200 animate-fade-in">
                <p className="text-xs font-bold text-pink-600 mb-1">Jawaban :</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedOption.reply}
                </p>

                <button
                  onClick={handleNext}
                  className="mt-3 w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold shadow-xs hover:opacity-90 transition cursor-pointer"
                >
                  {currentIdx + 1 < QUIZ_QUESTIONS.length ? "→" : "Lihat Hasil Akhir ✨"}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-4 animate-fade-in">
            <h3 className="text-lg font-bold text-gray-800">
              <img src="/images/k.png" alt="Hasil Quiz" className="mx-auto rounded-xl" />
            </h3>
          </div>
        )}
      </div>
      <div className="w-full max-w-md bg-gray-900 text-white rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col items-center text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
          Playlist
        </span>
        <div className="my-6 p-3 bg-[#1DB954] rounded-2xl shadow-lg">
          <img
            src={spotifyCodeImage}
            alt="Scan Spotify Playlist Code"
            className="w-64 h-auto rounded-lg"
          />
        </div>
        <a
          href={spotifyPlaylistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-gray-950 font-bold text-sm transition shadow-md"
        >
          🎧 Buka Langsung di Spotify
        </a>
      </div>

      <p className="text-xs text-gray-400 text-center">Bye, Kapan-kapan lagi</p>
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mt-90">
        luv u still btw
      </div>
    </section>
  );
}
