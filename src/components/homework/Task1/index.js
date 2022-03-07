import React from 'react';

class RegistrationForm extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        };
        this.result = '';
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e) {
        const {value, name} = e.target;
        this.setState({
            [name]: value,
        });
    }
    handleSubmit(e) {
        this.result = JSON.stringify(this.state);
        this.setState({ result: this.result});
        e.preventDefault();
    }
    render(){
        return (
            <div className="reg-form">
                <h2>Task 1</h2>
                <label>Name: <input type="text" name="name" value={this.state.name} onChange={this.handleInput}/></label>
                <label>Email: <input type="email" name="email" value={this.state.email} onChange={this.handleInput}/></label>
                <label>Password: <input type="password" name="password" value={this.state.password} onChange={this.handleInput}/></label>
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                <p>You entered: {this.result}</p>
            </div>
        )
    }
}

export default RegistrationForm;