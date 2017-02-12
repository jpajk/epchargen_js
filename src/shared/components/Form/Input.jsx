import React from 'react';

const Input = React.createClass(
    {
        propTypes: {
            value: React.PropTypes.string,
            labelValue: React.PropTypes.string,
            handleSubmit: React.PropTypes.func,
            className: React.PropTypes.string,
            type: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
        },

        render() {
            let label = (this.props.hasOwnProperty('labelValue')) ?
                        (<label htmlFor={this.props.name}>
                            {this.props.labelValue}
                        </label>) : '';

            let className = this.props.hasOwnProperty('className') ? this.props.className : '';

            return (
                <div className={"input-group " + className}>
                    {label}
                    <input
                        onChange={this.handleInputChange}
                        type={this.props.type}
                        name={this.props.name}
                        onClick={
                            this.props.hasOwnProperty('handleSubmit') ?
                            this.props.handleSubmit :
                            () => {}
                        }
                    />
                </div>
            );
        },

        handleInputChange(event) {
            this.setState({value: event.target.value});
        },

        getValue() {
            return this.state.value;
        }
    }
);

export default Input;