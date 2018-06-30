export const GENERATE_QUIZZ = 'GENERATE_QUIZZ';
export const ANSWER_QUIZZ = 'ANSWER_QUIZZ';

export const generateQuizz = quizz_count => ({
    type: GENERATE_QUIZZ
});

export const answerQuizz = (answered, time) => ({
    type: ANSWER_QUIZZ,
    answered,
    time
});