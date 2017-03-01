import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('ObservableMessageStore')
@observer
class Input extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            value: this.getValueOrEmpty('initialValue'),
        };

        this.store = this.props.ObservableMessageStore;
    }

    static propTypes = {
        type: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,

        validation: React.PropTypes.array,
        onChange: React.PropTypes.func,
        onClick: React.PropTypes.func,

        idName: React.PropTypes.string,
        className: React.PropTypes.string,
        initialValue: React.PropTypes.string,
    };

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
    }

    handleInputChange = (e) => {
        let val = e.target.value;

        if (this.props.hasOwnProperty('validation'))
            this.handleValidation(val);

        if (this.props.hasOwnProperty('onChange'))
            val = this.props.onChange(e, this);
        else
            this.setState({ value: val });
    };

    handleValidation(val) {
        this.props.validation.map((validate) => {
            validate(val, this);
        });


    };

    getValueOrEmpty(val) {
        return this.props.hasOwnProperty(val) ? this.props[val] : '';
    }

    getValueOrEmptyFunction(val) {
        return this.props.hasOwnProperty(val) ? this.props[val] : () => {};
    }

    getErrors() {
        return this.state.messages;
    }

    addToErrors(key, message) {
        if (!this.props.hasOwnProperty(key)) {
            let messages = this.state.messages;
            messages[key] = message;

            this.setState({ messages: messages });
        }
    }

    removeFromErrors(key) {
        let messages = this.state.messages;
        if (this.props.hasOwnProperty(key)) {
            delete messages[key];

            this.setState({ messages: messages });
        }
    }

    getValue() {
        return this.state.value;
    }
}

export default Input;