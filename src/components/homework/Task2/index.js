import React from 'react';
import PropTypes from 'prop-types';

class СonversionForm extends React.Component{
    constructor(){
        super();
        this.state = {
            value1: '',
            value2: '',
            result1: '',
            result2: ''
        };
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e) {
        const {value, name} = e.target;
        this.setState({
            [name]: value,
        });
        e.target.name === 'value1' ? ( this.setState({
            result1: e.target.value * 0.5,
        })) : (this.setState({
            result2: e.target.value * 0.05,
        }))
    }
    render(){
        return (
            <div className="conv-form">
                <h2>Task 2</h2>
                <label>Conversion (0.5):</label><input type="number" name="value1" value={this.state.value1} onChange={this.handleInput}/>
                <p>Result: {this.state.result1}</p>
                <label>Conversion (0.05):</label><input type="number" name="value2" value={this.state.value2} onChange={this.handleInput}/>
                <p>Result: {this.state.result2}</p>
            </div>
        )
    }
}

export default СonversionForm;