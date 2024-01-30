import readlineSync from 'readline-sync'
import { getUserName, getRandomNummer } from '../index.js'

const roundsCount = 3

const runPrimeGame = () => {
  const userName = getUserName()
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  let count = 0

  while (count < roundsCount) {
    const randomNumber = getRandomNummer(1, 100)
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no'
    console.log(`Question: ${randomNumber}`)
    const answerOfPlayer = readlineSync.question('Your answer: ')

    if (answerOfPlayer === correctAnswer) {
      console.log('Correct!')
      count += 1
    } else {
      console.log(
        `'${answerOfPlayer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      )
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }

  console.log(`Congratulations, ${userName}!`)
}

const isPrime = (num) => {
  if (num <= 1) {
    return false
  } else if (num === 2) {
    return true
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
}

export { runPrimeGame }
