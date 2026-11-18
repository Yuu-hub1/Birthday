export const ALWAYS = [
    // Bait 1 (0 - 7 detik): "Losing my head over you"
  { time: 0.0, holdUntil: 13, text: "Losing", position: { top: "12%", left: "10%" }, className: "text-xl sm:text-3xl font-bold text-pink-600 -rotate-3" },
  { time: 1, holdUntil: 13, text: "my", position: { top: "18%", left: "28%" }, className: "text-sm sm:text-lg font-medium text-slate-600" },
  { time: 1.5, holdUntil: 13, text: "head", position: { top: "25%", left: "42%" }, className: "text-3xl sm:text-5xl font-extrabold text-purple-800 rotate-2" },
  { time: 2, holdUntil: 13, text: "over", position: { top: "36%", left: "58%" }, className: "text-base sm:text-xl font-serif italic text-slate-700" },
  { time: 3, holdUntil: 13, text: "you", position: { top: "45%", left: "72%" }, className: "text-2xl sm:text-4xl font-bold text-pink-500 -rotate-2" },
  { time: 4, holdUntil: 13, text: ".", position: { top: "45%", left: "80%" }, className: "text-2xl sm:text-4xl font-bold text-pink-500 -rotate-2" },
  { time: 5, holdUntil: 13, text: ".", position: { top: "45%", left: "81%" }, className: "text-2xl sm:text-4xl font-bold text-pink-500 -rotate-2" },
  { time: 6, holdUntil: 13, text: ".", position: { top: "45%", left: "82%" }, className: "text-2xl sm:text-4xl font-bold text-pink-500 -rotate-2" },

  // Bait 2 (7 - 9 detik): "I'll be here"
  { time: 8, text: "And I'll", holdUntil: 13, position: { top: "60%", left: "15%" }, className: "text-lg sm:text-2xl font-semibold text-purple-700" },
  { time: 8.5, text: "be", holdUntil: 13, position: { top: "65%", left: "26%" }, className: "text-base sm:text-xl font-normal text-slate-600" },
  { time: 9, text: "here", holdUntil: 13, position: { top: "70%", left: "36%" }, className: "text-2xl sm:text-4xl font-extrabold text-pink-600 rotate-3" },

  // Bait 3 (9 - 13 detik): "'Cuz we both know how it goes" (Sejajar mendatar dengan jarak dilonggarkan)
  { time: 9.5, text: "'Cuz", holdUntil: 13, position: { top: "78%", right: "54%" }, className: "text-base sm:text-xl font-medium text-slate-500" },
  { time: 9.7, text: "we", holdUntil: 13, position: { top: "78%", right: "47%" }, className: "text-lg sm:text-2xl font-bold text-purple-600" },
  { time: 10.1, text: "both", holdUntil: 13, position: { top: "78%", right: "38%" }, className: "text-xl sm:text-3xl font-extrabold text-pink-600 -rotate-2" },
  { time: 10.3, text: "know", holdUntil: 13, position: { top: "78%", right: "28%" }, className: "text-lg sm:text-2xl font-serif italic text-slate-700" },
  { time: 10.7, text: "how", holdUntil: 13, position: { top: "78%", right: "20%" }, className: "text-base sm:text-xl font-medium text-slate-600" },
  { time: 11, text: "it", holdUntil: 13, position: { top: "78%", right: "15%" }, className: "text-sm sm:text-lg font-normal text-slate-500" },
  { time: 11.5, text: "goes", holdUntil: 13, position: { top: "78%", right: "6%" }, className: "text-2xl sm:text-4xl font-bold text-purple-800 rotate-2" },


  // Bait 4 (13 - 16 detik): "I don't want things to change"
  { time: 12.8, text: "I", holdUntil: 19, position: { top: "20%", left: "12%" }, className: "text-xl sm:text-3xl font-bold text-slate-800" },
  {
    time: 13,
    holdUntil: 19,
    type: "image",
    src: "/images/k.png", 
    position: { top: "20%", right: "12%" },
    className: "w-36 sm:w-52 h-36 sm:h-52 object-cover rounded-2xl shadow-lg border-4 border-white rotate-3",
  },
  { time: 13.2, text: "don't", holdUntil: 19, position: { top: "28%", left: "18%" }, className: "text-2xl sm:text-4xl font-extrabold text-pink-600 -rotate-3" },
  { time: 13.7, text: "want", holdUntil: 19, position: { top: "36%", left: "26%" }, className: "text-lg sm:text-2xl font-semibold text-purple-700" },
  { time: 14, text: "things", holdUntil: 19, position: { top: "44%", left: "16%" }, className: "text-xl sm:text-3xl font-serif italic text-slate-700" },
  { time: 14.3, text: "to", holdUntil: 19, position: { top: "52%", left: "28%" }, className: "text-base sm:text-xl font-normal text-slate-500" },
  { time: 14.5, text: "change", holdUntil: 19, position: { top: "60%", left: "20%" }, className: "text-3xl sm:text-5xl font-black text-purple-900 rotate-2" },

  // Bait 5 (16 - 20 detik): "I pray they stay the same, always"
  { time: 15.0, text: "I", holdUntil: 23, position: { top: "14%", left: "40%" }, className: "text-lg sm:text-2xl font-medium text-slate-600" },
  { time: 15.5, text: "pray", holdUntil: 23, position: { top: "22%", left: "46%" }, className: "text-2xl sm:text-4xl font-serif italic text-pink-600" },
  { time: 16, text: "they", holdUntil: 23, position: { top: "30%", left: "38%" }, className: "text-base sm:text-xl font-medium text-slate-600" },
  { time: 16.4, text: "stay", holdUntil: 23, position: { top: "38%", left: "48%" }, className: "text-xl sm:text-3xl font-bold text-purple-700" },
  { time: 17, text: "the", holdUntil: 23, position: { top: "46%", left: "42%" }, className: "text-sm sm:text-lg font-normal text-slate-500" },
  { time: 17.4, text: "same,", holdUntil: 23, position: { top: "54%", left: "50%" }, className: "text-xl sm:text-3xl font-semibold text-slate-800" },
  { time: 18.4, text: "always", holdUntil: 23, position: { top: "65%", left: "45%" }, className: "text-3xl sm:text-6xl font-black text-pink-600 -rotate-3 underline italic" },

  // Bait 6 (20 - 23 detik): "And I don't care"
  { time: 22.0, text: "And", holdUntil: 28, position: { top: "25%", right: "30%" }, className: "text-base sm:text-xl font-normal text-slate-500" },
  { time: 22.7, text: "I", holdUntil: 28, position: { top: "33%", right: "24%" }, className: "text-xl sm:text-3xl font-bold text-purple-800" },
  { time: 23.2, text: "don't", holdUntil: 28, position: { top: "42%", right: "28%" }, className: "text-2xl sm:text-4xl font-extrabold text-pink-600 rotate-2" },
  { time: 23.7, text: "care", holdUntil: 28, position: { top: "52%", right: "20%" }, className: "text-3xl sm:text-5xl font-black text-slate-800 -rotate-2" },

  // Bait 7 (23 - 26 detik): "If you're with somebody else"
  { time: 23.5, text: "If", holdUntil: 28, position: { top: "72%", left: "35%" }, className: "text-base sm:text-3xl font-medium text-orange-500" },
  { time: 23.6, text: "you're", holdUntil: 28, position: { top: "76%", left: "40%" }, className: "text-lg sm:text-2xl font-bold text-purple-700" },
  { time: 24.2, text: "with", holdUntil: 28, position: { top: "80%", left: "45%" }, className: "text-base sm:text-xl font-normal text-slate-600" },
  { time: 24.8, text: "somebody", holdUntil: 28, position: { top: "74%", left: "50%" }, className: "text-2xl sm:text-4xl font-serif italic text-pink-600" },
  { time: 25.4, text: "else", holdUntil: 28, position: { top: "82%", left: "55%" }, className: "text-xl sm:text-3xl font-extrabold text-slate-800 rotate-3" },

  // Bait 8 (26 - 29 detik): "I'll give you time and space"
  { time: 26.0, text: "I'll", holdUntil: 30, position: { top: "16%", left: "18%" }, className: "text-lg sm:text-2xl font-semibold text-slate-700" },
  { time: 26.5, text: "give", holdUntil: 30, position: { top: "24%", left: "26%" }, className: "text-xl sm:text-3xl font-bold text-purple-700" },
  { time: 27.0, text: "you", holdUntil: 30, position: { top: "32%", left: "35%" }, className: "text-lg sm:text-2xl font-medium text-pink-600" },
  { time: 27.5, text: "time", holdUntil: 30, position: { top: "42%", left: "22%" }, className: "text-3xl sm:text-5xl font-black text-purple-900 -rotate-2" },
  { time: 28.0, text: "and", holdUntil: 30, position: { top: "50%", left: "38%" }, className: "text-base sm:text-xl font-normal text-slate-500" },
  { time: 28.5, text: "space", holdUntil: 30, position: { top: "58%", left: "46%" }, className: "text-3xl sm:text-5xl font-serif italic font-bold text-pink-600 rotate-3" },

  // Bait 9 (29 - 32 detik): "Just know I'm not a phase"
  { time: 29.5, text: "Just", holdUntil: 32, position: { top: "18%", right: "18%" }, className: "text-base sm:text-xl font-medium text-slate-600" },
  { time: 30, text: "know", holdUntil: 32, position: { top: "26%", right: "26%" }, className: "text-xl sm:text-3xl font-bold text-purple-800" },
  { time: 30.5, text: "I'm", holdUntil: 32, position: { top: "35%", right: "16%" }, className: "text-lg sm:text-2xl font-semibold text-slate-700" },
  { time: 30.9, text: "not", holdUntil: 32, position: { top: "44%", right: "28%" }, className: "text-2xl sm:text-4xl font-extrabold text-pink-600 -rotate-3" },
  { time: 31.0, text: "a", holdUntil: 32, position: { top: "52%", right: "22%" }, className: "text-base sm:text-xl font-normal text-slate-500" },
  { time: 31.5, text: "phase", holdUntil: 32, position: { top: "62%", right: "18%" }, className: "text-3xl sm:text-5xl font-black text-purple-900 rotate-2" },

  // Bait 10 (32 - 36 detik): "I'm always-ways-ways"
  { time: 32.0, text: "I'm", position: { top: "30%", left: "25%" }, className: "text-xl sm:text-3xl font-bold text-slate-700" },
  { time: 33.0, text: "always-", position: { top: "40%", left: "35%" }, className: "text-3xl sm:text-5xl font-black text-pink-600 -rotate-2" },
  { time: 34.0, text: "ways-", position: { top: "50%", left: "48%" }, className: "text-3xl sm:text-5xl font-extrabold text-purple-700 rotate-2" },
  { time: 35.0, text: "ways", position: { top: "60%", left: "60%" }, className: "text-4xl sm:text-6xl font-black text-pink-500 -rotate-3" },

  // Bait 11 (36 - 39 detik): "Always-ways-ways"
  { time: 36.0, text: "Always-", position: { top: "25%", right: "35%" }, className: "text-3xl sm:text-5xl font-black text-purple-800 rotate-2" },
  { time: 37.0, text: "ways-", position: { top: "42%", right: "25%" }, className: "text-3xl sm:text-5xl font-extrabold text-pink-600 -rotate-2" },
  { time: 38.0, text: "ways", position: { top: "58%", right: "15%" }, className: "text-4xl sm:text-6xl font-black text-purple-600 rotate-3" },

  // Bait 12 (39 - selesai): "I'm always-ways-ways"
  { time: 39.0, text: "I'm", position: { top: "35%", left: "30%" }, className: "text-2xl sm:text-4xl font-bold text-slate-800" },
  { time: 40.0, text: "always-", position: { top: "45%", left: "40%" }, className: "text-4xl sm:text-6xl font-black text-pink-600 -rotate-3" },
  { time: 41.0, text: "ways-", position: { top: "55%", left: "50%" }, className: "text-4xl sm:text-6xl font-extrabold text-purple-700 rotate-2" },
  { time: 42.0, text: "ways", position: { top: "65%", left: "60%" }, className: "text-5xl sm:text-7xl font-black text-pink-600" },
];
