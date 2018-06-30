import React from 'react';

const RadioButton = ({title, id, onClick}) => (
    <div className="answer">
        <input type="radio" name="answer" />
        <label htmlFor="answer" className="label" onClick={() => onClick(id)}>{title}</label>
    </div>
);

class QuizForm extends React.Component {
    constructor(props){
        super(props);

        this.triggerFormSend = this.triggerFormSend.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    triggerFormSend(id) {
        //this.submit.click();
        this.props.onAnswered(id);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        let answers = this.props.answers.answers;
        const radios = answers.map((answ, i) => <RadioButton key={answ} title={answ} id={i} onClick={this.triggerFormSend} />);

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="answers">
                    {radios}
                </div>
                <input type="submit" style={{display: 'none'}} value="submit" ref={node => {this.submit = node}}/>
            </form>
        );
    }
}

export default QuizForm;
