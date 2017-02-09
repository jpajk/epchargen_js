import React from 'react';

const MenuItem = React.createClass(
    {
        propTypes: {
            id: React.PropTypes.number.isRequired,
            content: React.PropTypes.string.isRequired,
            handle: React.PropTypes.func.isRequired,
        },

        render() {
            return (
                <li>
                    <button onClick={() => { this.props.handle(this.props.id) } }>
                        {this.props.content}
                    </button>
                </li>
            );
        },

    }
);

export default MenuItem;