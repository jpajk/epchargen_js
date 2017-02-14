import React from 'react';

const Input = React.createClass(
    {
        propTypes: {
            value: React.PropTypes.string,
            labelValue: React.PropTypes.string,
            initial: React.PropTypes.object,
            className: React.PropTypes.string,
            validation: React.PropTypes.func,
            type: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
        },

        getInitialState() {
            if (this.props.hasOwnProperty('initial'))
                return this.props.initial;
            else
                return {};
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
                        value={this.state.value}
                    />
                </div>
            );
        },

        handleInputChange(event) {
            let value = (this.props.hasOwnProperty('validation'))
                        ? this.props.validation(event)
                        : event.target.value;

            this.setState({value: value});
        },

        getValue() {
            return this.state.value;
        }
    }
);

export default Input;