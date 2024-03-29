import readlineSync from 'readline-sync';
import { getUserName, getRandomNummer } from '../index.js';

const roundsCount = 3;

const getGcd = (num1, num2) => {
  let count;

  if (num1 > num2) {
    for (let i = 1; i <= num2; i += 1) {
      const gcd1 = num1 % i;
      const gcd2 = num2 % i;
      if (gcd1 === 0 && gcd2 === 0) {
        count = i;
      }
    }
  }

  if (num1 < num2) {
    for (let i = 1; i <= num1; i += 1) {
      const gcd1 = num1 % i;
      const gcd2 = num2 % i;
      if (gcd1 === 0 && gcd2 === 0) {
        count = i;
      }
    }
  }

  return count;
};

const runGcdGame = () => {
  const userName = getUserName();
  console.log('Find the greatest common divisor of given numbers.');
  let count = 0;

  while (count < roundsCount) {
    const num1 = getRandomNummer(1, 100);
    const num2 = getRandomNummer(1, 100);
    const gcdResult = getGcd(num1, num2);

    console.log(`Question: ${num1} ${num2}`);
    const answerOfPlayer = readlineSync.question('Your answer: ');

    if (answerOfPlayer === gcdResult.toString()) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answerOfPlayer}' is wrong answer ;(. Correct answer was '${gcdResult}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGcdGame;
