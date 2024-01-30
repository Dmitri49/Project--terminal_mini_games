import readlineSync from 'readline-sync';
import { getUserName, getRandomNummer } from '../index.js';

const isEven = (num) => num % 2 === 0;

const runEvenGame = () => {
  const userName = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;

  while (count < 3) {
    const randomNumber = getRandomNummer(0, 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const answerOfPlayer = readlineSync.question('Your answer: ');

    if (answerOfPlayer === correctAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answerOfPlayer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runEvenGame;
