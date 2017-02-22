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
                value: '',
                errors: []
            }
        },

        render() {
            return (
                <input
                    onChange={this.handleInputChange}
                    value={this.getValueOrEmpty('initialValue')}
                    id={this.getValueOrEmpty('idName')}
                    className={'input ' + this.getValueOrEmpty('className')}
                    onClick={this.getValueOrEmptyFunction('onClick')}
                />
            );
        },

        handleInputChange(e) {
            if (this.props.hasOwnProperty('validation'))
                this.handleValidation();

            if (this.props.hasOwnProperty('onChange'))
                this.props.onChange(e, this);
            else
                this.setState({value: e.target.value});
        },

        handleValidation() {
            this.props.validation.map((validate) => {
                validate(this);
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