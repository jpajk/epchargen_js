import React from 'react';


const Container = React.createClass
(
    {
        propTypes: {
            id: React.PropTypes.string,
            className: React.PropTypes.string,
            columns: React.PropTypes.string.isRequired
        },

        determineClassName() {
            let singular = ['one', 'one-half'];

            console.log(singular.indexOf(this.props.columns) >= 0);
            if (singular.indexOf(this.props.columns) >= 0)
                return 'column';
            else
                return 'columns';

        },

        render() {
            let id = this.props.id || '';
            let className = this.props.columns || '';

            return (
                <div id={id} className={className + ' ' +  this.determineClassName()}>{this.props.children}</div>
            );
        }
    }
);

export default Container;