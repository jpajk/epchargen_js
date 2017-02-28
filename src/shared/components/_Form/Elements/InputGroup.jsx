import React from 'react';
import Label from './Label';
import Input from './Input';

class InputGroup extends React.Component
{
    constructor(props) {
        super(props);
    }

    static propTypes = {
        /** Label props */
            labelValue: React.PropTypes.string.isRequired,

        /** Input props */
            type: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        validation: React.PropTypes.array.isRequired,

        /** Self props */
            className: React.PropTypes.string,
    }

    render() {
        return (
            <div className={'input-group ' + this.getValueOrEmpty('className')}>
                <Label htmlFor={this.props.name} labelValue={this.props.labelValue}/>
                <Input
                    ref="input"
                    type={this.props.type}
                    name={this.props.name}
                    validation={this.props.validation}
                    initialValue={this.getValueOrEmpty('initialValue')}
                />
            </div>
        );
    }

    getValueOrEmpty(val) {
        return this.props.hasOwnProperty(val) ? this.props[val] : '';
    }

    getInputValue() {
        return this.refs.input.getValue();
    }
}


export default InputGroup;