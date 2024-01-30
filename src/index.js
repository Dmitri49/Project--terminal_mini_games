import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

const getRandomNummer = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
};

export { getUserName, getRandomNummer };
