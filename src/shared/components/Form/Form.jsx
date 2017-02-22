import React from 'react';

const Form = React.createClass(
    {
        propTypes: {
            handleOnSubmit: React.PropTypes.func,
            className: React.PropTypes.string,
        },

        render() {
            let className = this.props.className || '';

            return (
                <form className={className}>
                    {this.props.children}
                </form>
            );
        },
    },
);

export default Form;