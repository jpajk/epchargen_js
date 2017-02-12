import React from 'react';


const Container = React.createClass
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
                <div id={id} className={'container ' + className}>{this.props.children}</div>
            );
        }
    }
);

export default Container;