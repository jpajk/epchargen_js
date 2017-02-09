import React from 'react';

const Form = React.createClass(
    {
        propTypes: {
            handleOnSubmit: React.PropTypes.func.isRequired,
        },

        render() {
            return (
                <form>
                    {this.props.children}
                </form>
            );
        }
    }
);

export default Form;