import { GENERATE_QUIZZ } from '../actions/quizzActions';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNumber(beforeNumber) {
    let randomNumber = getRandomInt(1, 1000);
    
    if(beforeNumber) {
        while(Math.abs(randomNumber - beforeNumber) < getRandomInt(1, 50)) {
            randomNumber = getRandomInt(0, 1000);
        }
    }

    return randomNumber;
}

function generateAnswer(otherAnswers, trueAnswer) {
    let answer = getRandomInt(-20, getRandomInt(5, 20)) + trueAnswer;

    while(otherAnswers.indexOf(answer) !== -1) {
        answer = getRandomInt(-20, getRandomInt(5, 20)) + trueAnswer;
    }

    return answer;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function generateAnswers(actualAnswer) {
    let answers = [actualAnswer];

    while(answers.length < 4) {
        let answer = generateAnswer(answers, actualAnswer);
        answers.push(answer);
    }

    answers = shuffle(answers);
    
    return {
        answers: answers, 
        correctID: answers.indexOf(actualAnswer)
    }

}

const quizzes = (state = {}, action) => {
    switch(action.type) {
        case GENERATE_QUIZZ: {
            let firstNumber = generateNumber();
            let secondNumber = generateNumber(firstNumber);

            if(secondNumber > firstNumber) {
                [firstNumber,secondNumber] = [secondNumber, firstNumber];
            }

            const answers = generateAnswers(firstNumber - secondNumber);

            return {
                firstNumber,
                secondNumber,
                answers
            }
        }
        default: return {};
    }
}

export default quizzes;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     