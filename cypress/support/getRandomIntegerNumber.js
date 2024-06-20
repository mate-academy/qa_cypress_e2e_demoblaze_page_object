function getRandomIntegerNumber(min, max) {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.round(randomNumber);
}

export default getRandomIntegerNumber;
