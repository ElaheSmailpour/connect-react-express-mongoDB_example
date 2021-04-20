
import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
class Question extends React.Component {
    constructor() {
        super()
        this.state = {
            question: "",
            answer:["" ,"","",""],
            
           correct: ""

        }
        this.changeQuestion = this.changeQuestion.bind(this)
        this.changeAnswer1 = this.changeAnswer1.bind(this)
        this.changeAnswer2 = this.changeAnswer2.bind(this)
        this.changeAnswer3 = this.changeAnswer3.bind(this)
        this.changeAnswer4 = this.changeAnswer4.bind(this)
        this.changeCorrect = this.changeCorrect.bind(this)
        this.questionsenden = this.questionsenden.bind(this)
    }
    questionsenden(event) {
        event.preventDefault()
        const senden = {
            question: this.state.question,
            answer: this.state.answer,
            correct: this.state.correct,
            
        }
        axios.post("/questions", senden).then((response) => {
           
            console.log(response.data)
            this.setState({
                question: "",
                answer:["" ,"","",""],
                correct: "",
                
            })
        })
    }
    changeQuestion(event) {
       
        this.setState({...this.state,question: event.target.value })
    }
    changeAnswer1(event) {
        const meinelocal=[...this.state.answer]
        meinelocal[0]=event.target.value;
        this.setState({...this.state,answer:meinelocal })
      
    }
    changeAnswer2(event) {
        
        const meinelocal2=[...this.state.answer]
        meinelocal2[1]=event.target.value;
        this.setState({...this.state,answer:meinelocal2 })
    }
    changeAnswer3(event) {
        const meinelocal3=[...this.state.answer]
        meinelocal3[2]=event.target.value;
        this.setState({...this.state,answer:meinelocal3 })
    }
    changeAnswer4(event) {
       const meinelocal4=[...this.state.answer]
        meinelocal4[3]=event.target.value;
        this.setState({...this.state,answer:meinelocal4 })
    }
        changeCorrect(event) {
       
        this.setState({ ...this.state,correct: event.target.value })
    }
  
    render() {
        return (
            <div className="container">
                <div className="form-div">
                    <form action="#" method="post">
                    
                        <input type="text" placeholder="Question"
                            onChange={this.changeQuestion}
                            value={this.state.question}
                            className="form-control form-group"
                        />
                        <input type="text" placeholder="answer"
                            onChange={this.changeAnswer1}
                            value={this.state.answer[0]}
                            className="form-control form-group"
                        />
                        <input type="text" placeholder="answer"
                            onChange={this.changeAnswer2}
                            value={this.state.answer[1]}
                            className="form-control form-group"
                        />
                         <input type="text" placeholder="answer"
                            onChange={this.changeAnswer3}
                            value={this.state.answer[2]}
                            className="form-control form-group"
                        />
                         <input type="text" placeholder="answer"
                            onChange={this.changeAnswer4}
                            value={this.state.answer[3]}
                            className="form-control form-group"
                        />
                        
                        <input type="text" placeholder="Correct"
                            onChange={this.changeCorrect}
                            value={this.state.correct}
                            className="form-control form-group"
                        />
                        <button  className="btn btn-danger btn-block"  onClick={this.questionsenden}>send</button>
                        
                    </form>
                </div>
            </div>
        )
    }
}
export default Question