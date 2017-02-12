import React from 'react';


const Row = React.createClass
(
    {
        render() {
            return (
                <div id="app-wrapper">{this.props.children}</div>
            );
        }
    }
);

export default Row;