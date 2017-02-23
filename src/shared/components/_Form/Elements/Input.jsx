import React from 'react';

const Input = React.createClass
(
    {
        propTypes: {
            type: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,

            validation: React.PropTypes.array,
            onChange: React.PropTypes.func,
            onClick: React.PropTypes.func,

            idName: React.PropTypes.string,
            className: React.PropTypes.string,
            initialValue: React.PropTypes.string,
        },

        getInitialState() {
            return {
                value: this.getValueOrEmpty('initialValue'),
                errors: []
            }
        },

        render() {
            return (
                <input
                    type={this.props.type}
                    name={this.props.name}
                    onChange={this.handleInputChange}
                    value={this.state.value}
                    id={this.getValueOrEmpty('idName')}
                    className={'input ' + this.getValueOrEmpty('className')}
                    onClick={this.getValueOrEmptyFunction('onClick')}
                />
            );
        },

        handleInputChange(e) {
            let val = e.target.value;

            if (this.props.hasOwnProperty('validation'))
                this.handleValidation(val);

            if (this.props.hasOwnProperty('onChange'))
                val = this.props.onChange(e, this);
            else
                this.setState({value: val});
        },

        handleValidation(val) {
            this.props.validation.map((validate) => {
                validate(val, this);
            });
        },

        getValueOrEmpty(val) {
            return this.props.hasOwnProperty(val) ? this.props[val] : '';
        },

        getValueOrEmptyFunction(val) {
            return this.props.hasOwnProperty(val) ? this.props[val] : () => {};
        },

        getErrors() {
            return this.state.errors;
        },

        getValue() {
            return this.state.value;
        }
    }
);

export default Input;