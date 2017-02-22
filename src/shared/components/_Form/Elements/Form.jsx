import React from 'react';

const Form = React.createClass
(
    {
        render() {
            return <form>{this.props.children}</form>;
        }
    }
);

export default Form;
