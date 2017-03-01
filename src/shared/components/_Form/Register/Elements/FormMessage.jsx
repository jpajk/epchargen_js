import React from 'react';

class FormMessage extends React.Component
{
    constructor(props) {
        super(props);
    }

    static propTypes = {
        message: React.PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="form-message">{this.props.message}</div>
        );
    }
}

export default FormMessage;