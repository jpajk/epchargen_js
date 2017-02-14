import React from 'react';

const InputWrapper = React.createClass
(
    {
        propTypes: {
            getInputValues: React.PropTypes.func.isRequired,
        },

        render() {
            return (
                <span>
                    {this.props.children}
                </span>
            );
        },

        getChildren() {
            return this.props.children;
        },
    }
);

export default InputWrapper;