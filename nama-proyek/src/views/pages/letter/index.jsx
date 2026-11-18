import { useState } from "react";
import SpinnerButton from "../../components/button";

export default function BirthdayLetter({
  friendName = "Rahel",
  senderName = "Yusak",
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-pink-50/30 to-slate-50 flex flex-col items-center">
      <div className="text-center max-w-md mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-1">
          Surat Dari Gwehh
        </h2>
        <span className="text-xs font-semibold tracking-widest uppercase text-pink-500">
          Special Message
        </span>
        <p className="text-sm text-gray-500 mt-2">
          {isOpen
            ? "Thank uuuuu"
            : "Klik amplop nyakk."}
        </p>
      </div>

      {/* KONDISI 1: AMPLOP TERTUTUP */}
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Buka Surat Ulang Tahun"
          className="group relative w-80 sm:w-96 h-56 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl border-2 border-pink-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Lipatan Segitiga Atas Amplop */}
          <div
            className="absolute top-0 left-0 right-0 h-28 bg-pink-200/80 border-b border-pink-300/50 transition-transform duration-300 group-hover:scale-y-95 origin-top"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
          />

          {/* Lipatan Kiri & Kanan Amplop */}
          <div
            className="absolute inset-0 bg-white/30"
            style={{ clipPath: "polygon(0 0, 45% 55%, 0 100%)" }}
          />
          <div
            className="absolute inset-0 bg-white/30"
            style={{ clipPath: "polygon(100% 0, 55% 55%, 100% 100%)" }}
          />

          {/* Segel Hati di Tengah */}
          <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-pink-300 shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            💖
          </div>
          <div className="relative z-10 mt-3 px-4 py-1 rounded-full bg-white/80 backdrop-blur-xs text-xs font-semibold text-gray-700 shadow-2xs">
            Untuk: {friendName} ✨
          </div>
        </button>
      ) : (
        <div className="w-full max-w-lg bg-[#fffdf9] rounded-2xl border border-amber-200/80 shadow-lg p-6 sm:p-10 text-left relative animate-fade-in">
          <div className="w-24 h-6 bg-pink-200/70 border-x border-pink-300/40 absolute -top-3 left-1/2 -translate-x-1/2 -rotate-2 rounded-xs" />
          <div className="flex items-center justify-between border-b border-dashed border-gray-200 pb-4 mb-6">
            <div>
              <p className="text-xs text-gray-400">16 November 2026</p>
              <h3 className="text-lg font-bold text-gray-800 mt-0.5">
                Hai {friendName},
              </h3>
            </div>
            <span className="text-2xl">🎂</span>
          </div>

          {/* Isi Surat Utama */}
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              Hi gimana rasanya 18 tahun hidup di dunia ? wkwk. tank u bngt udah fight udah try hardd tapi kmu ga sendiri kok ada temen2mu, ada akuu (cihuyy).
            </p>

            {/* Kotak Doa & Harapan */}
            <div className="my-5 p-4 rounded-xl bg-pink-50/70 border border-pink-100">
              <p className="text-xs font-bold uppercase tracking-wider text-pink-600 mb-2">
                ✨ Doaku Buat Kamu :
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>• Yang pasti sehat selalu, Makin cantikk makin pinter.</li>
                <li>• Bisa dipakai tuhan,sama jadi kesaksian.</li>
                <li>• Semua target dan wishlist yang kamu doain tercapai.</li>
                <li>• <b>Mazmur 20:4,</b> "Kiranya diberikan-Nya kepadamu apa yang kaukehendaki dan dijadikan-Nya berhasil apa yang kaurancangkan."</li>
              </ul>
            </div>

            <p>
              Semoga diumur yang baru ini jadi salah satu chapter paling membahagiakan
              dalam hidupmu. ohh iya soal dagumu jgn insecure yaa, kmu dah cantikk just the way u r. lagi pula aku suka kmu bkn krna fisiknya. dan aku g perna jadiin kmu 2nd choice
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-dashed border-gray-200 flex items-end justify-between">
            <div>
              <p className="text-xs text-gray-400">Dari,</p>
              <p className="text-base font-bold text-pink-600 mt-0.5">
                {senderName} 🐷
              </p>
            </div>
          </div>
        </div>
      )}

      <SpinnerButton to="/last" />
    </section>
  );
}
