import React from 'react';
import Input from './Input';

const InputWrapper = React.createClass
(
    {
        propTypes: {
            /**
             * className string
             * type string
             * name string
             * labelValue string
             * validation func
             * initial int
             * ref string
             */
            inputSchema: React.PropTypes.object.isRequired
        },

        render() {
            return (
                <div>
                    {this.props.inputSchema.schema.map((input, i) => {
                        return <Input ref={'i-' + i} key={i} {...input} />
                    })}
                </div>
            );
        },

        getInputs() {
            let inputs = {};

            for (let key in this.refs) {
                if (this.refs.hasOwnProperty(key)) {
                    let input = this.refs[key];

                    inputs[input.props.name] = input.getValue();
                }
            }

            return inputs;
        }

    }
);

export default InputWrapper;