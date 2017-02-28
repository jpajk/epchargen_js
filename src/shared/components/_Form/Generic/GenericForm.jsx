import React from 'react';
import InputWrapper from '../Elements/InputWrapper';
import Submit from '../Elements/Submit';

class GenericForm extends React.Component
{
    constructor(props) {
        super(props);
    }

    static propTypes = {
        /** InputWrapper props */
        inputGroupSchema: React.PropTypes.func.isRequired,

        /** Self props */
        className: React.PropTypes.string,
        idName: React.PropTypes.string,

        /** Submit props */
        submitName: React.PropTypes.string,
        handleSubmit: React.PropTypes.func.isRequired,
    }

    render() {
        let schema = this.props.inputGroupSchema();

        return (
            <div id={this.props.idName} className={this.props.className}>
                <InputWrapper ref="input_wrapper" inputGroupSchema={schema}/>
                <Submit
                    initialValue={schema.submit.submitValue}
                    handleSubmit={this.handleSubmit}
                    name={schema.submit.submitName}
                />
            </div>
        );
    }

    handleSubmit() {
        let inputs = this.refs.input_wrapper.getInputValues();
        this.props.handleSubmit(inputs, this);
    }
}


export default GenericForm;