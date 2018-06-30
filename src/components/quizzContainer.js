import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startGame, finishRound, finishGame } from '../actions/gameActions';
import { generateQuizz } from '../actions/quizzActions';

import QuizzForm from './quizzForm';

const MAXIMUM_ROUNDS = 5;

class ContainerBox extends Component {
    
    state = {
        startDate: null
    }

    startGame() {
        if(!this.props.game.inAction) {
            this.props.startGame();
            this.props.generateQuiz();
            this.setState({ startDate: Date.now() });
        }
    }

    onQuestionAnswered(id) {
        const correctAnswerID = this.props.question.answers.correctID;
        const dateInterval = Date.now() - this.state.startDate;
        const currentRound = this.props.game.currentRound;

        if(correctAnswerID === id) { // Correct Answer
            this.props.finishRound(dateInterval, currentRound + 1, 1 + Math.floor((currentRound / 3.0)), 1);
        } else {
            this.props.finishRound(dateInterval, currentRound + 1, 0, 0);
        }


        if(this.props.game.currentRound >= MAXIMUM_ROUNDS - 1) {
            this.props.finishGame();
            return;
        }

        this.newRound();

    }

    newRound() {
        this.props.generateQuiz();
    }

    render() {
        console.log(this.props.game);

        const isPlaying = this.props.game.inAction;
        const question = this.props.question;
        let headerText = '', points = '', round = '';

        if(isPlaying) {
            headerText = `${question.firstNumber} - ${question.secondNumber} = ?`;
            round = this.props.game.currentRound;
            points = "Точки: " + this.props.game.points;
        } 
        else if(!isPlaying && (this.props.game.totalTime > 0)) {
            const game = this.props.game;
            headerText = `Играта приключи\n. Имате ${game.points} точки и отговорихте правилно на ${game.answered} от ${MAXIMUM_ROUNDS} въпроса.\n Общо отнето време ${Math.round(game.totalTime / 10) / 100} сек.`;
        }
        else {
            headerText = 'Кликнете тук за да започнете игра';
        }

        return (
            <div className="quizz-box" onClick={this.startGame.bind(this)}>
                <h3>{headerText}</h3>
                <h5 className="round-counter">{round}</h5>
                {isPlaying ? <QuizzForm answers={question.answers} onAnswered={this.onQuestionAnswered.bind(this)} /> : null }
                <h5 className="total-points">{points}</h5>
            </div>
        )
    }
} 

const mapStateToProps = state => ({
    game: state.game,
    question: state.quizz
});

const mapDispatchToProps = dispatch => ({
    startGame: () =>  dispatch(startGame()),
    finishRound: (time, roundCount, points, answered) => dispatch(finishRound(time, roundCount, points, answered)),
    finishGame: () => dispatch(finishGame()),
    generateQuiz: () => dispatch(generateQuizz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerBox);