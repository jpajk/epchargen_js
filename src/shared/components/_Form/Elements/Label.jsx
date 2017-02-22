import React from 'react';

const Label = React.createClass
(
    {
        propTypes: {
            htmlFor: React.PropTypes.string.isRequired,
            labelValue: React.PropTypes.string.isRequired,
        },

        render() {
            return (
                <label htmlFor={this.props.name}>
                    {this.props.labelValue}
                </label>
            );
        }
    }
);

export default Label;