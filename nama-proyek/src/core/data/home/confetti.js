export const generateConfetti = (count = 45) => {
  const colors = ["bg-pink-400", "bg-purple-400", "bg-yellow-400", "bg-blue-400", "bg-emerald-400"];
  return Array.from({ length: count }, (_, i) => ({
    id: `${Date.now()}-${i}`,
    color: colors[Math.floor(Math.random() * colors.length)],
    left: `${Math.floor(Math.random() * 100)}%`,
    duration: `${(Math.random() * 2 + 2).toFixed(1)}s`,
    delay: `${(Math.random() * 0.4).toFixed(2)}s`,
    size: Math.floor(Math.random() * 6) + 6,
  }));
};