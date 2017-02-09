import React from 'react';

const Input = React.createClass(
    {
        propTypes: {
            value: React.PropTypes.string,
            labelValue: React.PropTypes.string,
            handleSubmit: React.PropTypes.func,
            type: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired
        },

        render() {
            let label = (this.props.hasOwnProperty('labelValue')) ?
                        (<label htmlFor={this.props.name}>
                            {this.props.labelValue}
                        </label>) : '';

            return (
                <div className="input-group">
                    {label}
                    <input
                        onChange={this.handleInputChange}
                        type={this.props.type}
                        name={this.props.name}
                        onClick={
                            this.props.hasOwnProperty('handleSubmit') ?
                            this.props.handleSubmit :
                            function() {}
                        }
                    />
                </div>
            );
        },

        handleInputChange(event) {
            console.log(event.target.value);
            this.setState({value: event.target.value});
        },

        getValue() {
            return this.state.value;
        }
    }
);

export default Input;