import React from 'react';
import InputGroup from './InputGroup';

class InputWrapper extends React.Component
{
    constructor(props) {
        super(props);
    }

    static propTypes = {
        /** Label props */
            inputGroupSchema: React.PropTypes.object.isRequired,
    }

    /**
     * @see InputGroup
     * @returns {XML}
     */
    render() {
        return (
            <div className="input-wrapper">
                {this.props.inputGroupSchema.schema.map((ig, i) => {
                    return <InputGroup
                        key={i}
                        ref={'ig-' + i} {...ig}
                    />
                })}
            </div>
        );
    }

    getInputValues() {
        let input_groups = {};

        for (let key in this.refs) {
            if (this.refs.hasOwnProperty(key)) {
                let input = this.refs[key];

                input_groups[input.props.name] = input.getInputValue();
            }
        }

        return input_groups;
    }
}

export default InputWrapper;
