import React from "react";

class ControledComponent extends React.Component{
    state = {
        value: '',
        textArea: '',
        selectValue: ''
    }
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.selectHandleChange = this.selectHandleChange.bind(this);
        // this.handleTAChange = this.handleTAChange.bind(this);
    }
    handleChange(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value,
        });
    }
    selectHandleChange(e){
        this.setState({
            selectValue: e.target.value,
        });
    }
    // handleTAChange(e){
    //     this.setState({
    //         textArea: e.target.value,
    //     });
    // }
    render() {
        console.log(this.state);
        return(
            <div>
                <form>
                    <p>
                        <input type="text" name="value" value={this.state.value} onChange={this.handleChange}/>
                    </p>
                    <p>
                        <textarea name="textArea" value={this.state.textArea} onChange={this.handleChange}></textarea>
                    </p>
                    <p>
                        <select value={this.state.selectValue} onChange={this.selectHandleChange}>
                            <option value="orange">Orange</option>
                            <option value="apple">Apple</option>
                            <option value="tomato">Tomato</option>
                            <option value="lime">Lime</option>
                        </select>
                    </p>
                </form>
            </div>
        );
    }
}
export default ControledComponent;