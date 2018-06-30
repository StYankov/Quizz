export const START_GAME = "START_GAME";
export const FINISH_ROUND = "FINISH_ROUND";
export const FINISH_GAME = "FINISH_GAME";

export const startGame = () => ({
    type: START_GAME
});

export const finishRound = (time, roundCount, points, answered) => ({
    type: FINISH_ROUND,
    time: time,
    round: roundCount,
    points,
    answered
});

export const finishGame = () => ({
    type: FINISH_GAME
});