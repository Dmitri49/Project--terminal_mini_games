import readlineSync from 'readline-sync'
import { getUserName, getRandomNummer } from '../index.js'

const roundsCount = 3

const runCalcGame = () => {
  const userName = getUserName()
  console.log('What is the result of the expression?')
  let count = 0

  while (count < roundsCount) {
    const equasion = getEquasion()
    console.log(`Question: ${equasion.equasion}`)
    const answerOfPlayer = readlineSync.question('Your answer: ')

    if (answerOfPlayer === equasion.result) {
      console.log('Correct!')
      count += 1
    } else {
      console.log(
        `'${answerOfPlayer}' is wrong answer ;(. Correct answer was '${equasion.result}'.`
      )
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }

  console.log(`Congratulations, ${userName}!`)
}

const getEquasion = () => {
  const firstNum = getRandomNummer(0, 100)
  const secondNum = getRandomNummer(0, 100)
  const symbols = ['+', '-', '*']
  const randomSimbol = symbols[Math.floor(Math.random() * symbols.length)]

  if (randomSimbol === '+') {
    return {
      equasion: `${firstNum} + ${secondNum}`,
      result: `${firstNum + secondNum}`,
    }
  } else if (randomSimbol === '-') {
    return {
      equasion: `${firstNum} - ${secondNum}`,
      result: `${firstNum - secondNum}`,
    }
  } else if (randomSimbol === '*') {
    return {
      equasion: `${firstNum} * ${secondNum}`,
      result: `${firstNum * secondNum}`,
    }
  }
}

export { runCalcGame }
