import { FINISH_ROUND, START_GAME, FINISH_GAME } from '../actions/gameActions';

const startState = {
    inAction: false,
    totalTime: 0,
    currentRound: 0,
    points: 0,
    answered: 0,
    finished: false
}

const game = (state = startState, action) => {
    switch(action.type) {
        case START_GAME: {
            return {
                ...startState,
                inAction: true
            }
        }
        case FINISH_ROUND: {
            return {
                ...state,
                currentRound: action.round,
                totalTime: state.totalTime + action.time,
                points: state.points + action.points,
                answered: state.answered + action.answered
            }
        }
        case FINISH_GAME: {
            return {
                ...state,
                inAction: false,
                finished: true
            }
        }
        default: return state;
    }
}

export default game;