import React from 'react';


const Row = React.createClass
(
    {
        propTypes: {
            id: React.PropTypes.string,
            className: React.PropTypes.string,
        },

        render() {
            let id = this.props.id || '';
            let className = this.props.className || '';

            return (
                <div id={id} className={'row ' + className}>{this.props.children}</div>
            );
        }
    }
);

export default Row;