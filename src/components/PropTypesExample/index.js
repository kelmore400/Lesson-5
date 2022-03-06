import React from "react";
import PropTypes from "prop-types";

class PropTypesExample extends React.Component {
    render() {
        return (
            <h2>Hello, my name is {this.props.name}. I am {this.props.age} years old.</h2>
        );
    }
}
PropTypesExample.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
}
export default PropTypesExample;