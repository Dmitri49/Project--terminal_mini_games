import readlineSync from 'readline-sync'

const runEvenGame = () => {
    console.log('Welcome to the Brain Games!')
    const userName = getName()
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    let count = 0

    while (count < 3) {
        let randomNumber = getRandomNumber()
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

const getName = () => {
    const userName = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${userName}!`)
    return userName
}

const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
}

export {runEvenGame}