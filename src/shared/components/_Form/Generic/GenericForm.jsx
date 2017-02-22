import React from 'react';
import InputWrapper from '../Elements/InputWrapper';
import Submit from '../Elements/Submit';

const GenericForm = React.createClass
(
    {
        propTypes: {
            /** InputWrapper props */
            inputGroupSchema: React.PropTypes.func.isRequired,

            /** Self props */
            className: React.PropTypes.string,
            idName: React.PropTypes.string,

            /** Submit props */
            submitName: React.PropTypes.string,
            handleSubmit: React.PropTypes.func.isRequired,
        },

        render() {
            return (
                <div id={this.props.idName} className={this.props.className}>
                    <InputWrapper ref="input_wrapper" inputGroupSchema={this.props.inputGroupSchema}/>
                    <Submit handleSubmit={this.handleSubmit} name={this.props.submitName} />
                </div>
            );
        },

        handleSubmit() {
            let inputs = this.refs.input_wrapper.getInputs();
            this.props.handleSubmit(inputs, this);
        }
    }
);

export default GenericForm;