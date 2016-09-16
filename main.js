let App = React.createClass({
  getInitialState() {
    return {
      firstNumber: Math.floor(Math.random()*(200)),
      secondNumber: Math.floor(Math.random()*(200)),
      answer: 0,
      userAnswer: 0,
      answerB: '',
    }
  },

  submitAnswer(e){
    let { userAnswer, answer, answerB, firstNumber, secondNumber } = this.state;
    let sum = firstNumber + secondNumber;

    this.setState({
      answer: sum,
    })

    if (sum == answerB) {
      this.refs.message.innerHTML = 'Correct!';
    } else {
      this.refs.message.innerHTML = 'Wrong!';
      this.refs.correctAnswer.innerHTML = 'Correct Answer = '+sum;
    }

    let number1 = Math.floor(Math.random()*(20));
    let number2 = Math.floor(Math.random()*(20));
    let theAnswer = firstNumber + secondNumber;

    setTimeout(() => {
      this.setState({
        firstNumber: number1,
        secondNumber: number2,
        answer: theAnswer,
        answerB: '',
      })
      this.refs.correctAnswer.innerHTML = '';
      this.refs.message.innerHTML = '';
    }, 3000)
  },

  buttonPress(e){
    let number = e.target.id;
    let { userAnswer, answerB } = this.state;

    this.setState({
      answerB: answerB+number,
    });
  },

  clearAnswer(){
    let { answerB } = this.state;

    this.setState({
      answerB: '',
    })
  },

  render() {
    let { firstNumber, secondNumber, answer, userAnswer, answerB } = this.state;

    return (
      <div className='container text-center'>
        <h1>Math Game</h1>
          <h3 ref='newProblem'>{firstNumber}+{secondNumber}=</h3>
          <h4 ref='answerB'>{answerB}</h4>
          <h3 ref='correctAnswer'></h3>

          <div className='cont2'>
          <div className='row'>
            <button className='btn btn-default' onClick={this.buttonPress} id='7'>7</button>
            <button className='btn btn-default' onClick={this.buttonPress} id='8'>8</button>
            <button className='btn btn-default' onClick={this.buttonPress} id='9'>9</button>
          </div>
          <div className='row'>
            <button className='btn btn-default' onClick={this.buttonPress} id='4'>4</button>
            <button className='btn btn-default' onClick={this.buttonPress} id='5'>5</button>
            <button className='btn btn-default' onClick={this.buttonPress} id='6'>6</button>
          </div>
            <button className='btn btn-default' onClick={this.buttonPress} id='1'>1</button>
            <button className='btn btn-default' onClick={this.buttonPress} id='2'>2</button>
            <button className='btn btn-default' onClick={this.buttonPress} id='3'>3</button>
          <div className='row'>
            <button className='btn btn-default' onClick={this.buttonPress} id='0'>0</button>
            <button className='btn btn-default btn-danger' onClick={this.clearAnswer} ref='clearAnswer'> Clear </button>
          </div>
          <button className='btn btn-default btn-success' onClick={this.submitAnswer} ref='submitAnswer'>Submit</button>
          </div>

        <h3 ref='message'></h3>

      </div>
    )
  }
})

 ReactDOM.render(
   <App/>,
   document.getElementById('root')
 );
