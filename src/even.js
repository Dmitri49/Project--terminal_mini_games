import readlineSync from 'readline-sync'
import { getUserName, getRandomNummer } from '../src/index.js'

const runEvenGame = () => {
    const userName = getUserName()
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    let count = 0

    while (count < 3) {
        let randomNumber = getRandomNummer(0, 100)
        console.log('Question: ' + randomNumber)
        const answerOfPlayer = readlineSync.question('Your answer: ')

        if (randomNumber % 2 === 0 && answerOfPlayer === 'yes') {
            console.log('Correct!')
            count += 1
        } else if (randomNumber % 2 !== 0 && answerOfPlayer === 'no') {
            console.log('Correct!')
            count += 1
        } else {
            console.log(`Let's try again, ${userName}!`)
            count = 0
        }
    }

    console.log(`Congratulations, ${userName}!`)
}

export {runEvenGame}