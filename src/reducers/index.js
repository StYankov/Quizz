import { combineReducers } from 'redux';
import quizzes from './quizzReducers';
import game from './gameReducers';

export default combineReducers({
    quizz: quizzes,
    game: game 
});