import readlineSync from 'readline-sync';
import { getUserName, getRandomNummer } from '../index.js';

const roundsCount = 3;

const getProgression = () => {
  const lengthOfString = getRandomNummer(5, 10);
  const step = getRandomNummer(1, 10);
  const unknowNum = getRandomNummer(1, lengthOfString);
  let task = '';
  let count = step;
  let result;

  for (let i = 1; i <= lengthOfString; i += 1) {
    if (i === unknowNum) {
      task += '.. ';
      result = count;
    } else {
      task += `${count} `;
    }
    count += step;
  }

  return {
    task: task.trim(),
    res: result,
  };
};

const runProgressionGame = () => {
  const userName = getUserName();
  console.log('What number is missing in the progression?');
  let count = 0;

  while (count < roundsCount) {
    const task = getProgression();
    console.log(`Question: ${task.task}`);
    const answerOfPlayer = readlineSync.question('Your answer: ');

    if (answerOfPlayer === task.res.toString()) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answerOfPlayer}' is wrong answer ;(. Correct answer was '${task.res}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runProgressionGame;
