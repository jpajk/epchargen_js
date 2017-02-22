import React from 'react';

const Messages = React.createClass
(
    {
        propTypes: {
            messages: React.PropTypes.array.isRequired,
            className: React.PropTypes.string,
        },

        render() {
            return (
                <div className={'messages ' + this.props.className || ''}>
                    {this.props.messages.map((m) => {
                        return <p className={m.getClassName()}>{m.getContent()}</p>;
                    })}
                </div>
            );
        }
    }
);

export default Messages;