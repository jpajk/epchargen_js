import React from 'react';
import Input from './Input';

const Submit = React.createClass
(
    {
        propTypes: {
            name: React.PropTypes.string.isRequired,
            initialValue: React.PropTypes.string.isRequired,
            handleSubmit: React.PropTypes.func.isRequired,
        },

        render() {
            return (
                <Input
                    type="submit"
                    name={this.props.name}
                    onClick={this.props.handleSubmit}
                    initialValue={this.props.initialValue}
                />
            );
        }
    }
);

export default Submit;