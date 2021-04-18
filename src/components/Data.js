
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
class Data extends React.Component {
    constructor() {
        super()
        this.state = {
           
            name: "",
           

        }
      
        this.changeUserName = this.changeUserName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
   
    }
    onSubmit(event) {
        event.preventDefault()
        const registered = {
           
            name: this.state.name,
           
        }
        axios.post("/send", registered).then((response) => {
            console.log(response.data)
            this.setState({
               
                name: "",
               

            })
            alert(` You are logged in! `);
        })
    }

    changeUserName(event) {
        this.setState({ name: event.target.value })
    }
  
  
    render() {
        return (
            <div className="container">
                <div className="form-div">
                    <form onSubmit={this.onSubmit}>
                       
                        <input type="text" placeholder="name"
                            onChange={this.changeUserName}
                            value={this.state.name}
                            className="form-control form-group"
                        />
                       
                      
                        <button className="btn btn-danger btn-block" >Send</button>

                    </form>
                </div>
            </div>
        )
    }
}
export default Data