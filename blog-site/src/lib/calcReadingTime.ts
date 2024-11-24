const calcReadingTime = (text: string): number => {
  const wpm = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
};

export default calcReadingTime;
