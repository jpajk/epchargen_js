import React from 'react';

class Label extends React.Component
{
        constructor(props) {
            super(props);
        }

        static propTypes = {
            htmlFor: React.PropTypes.string.isRequired,
            labelValue: React.PropTypes.string.isRequired,
        }

        render() {
            return (
                <label htmlFor={this.props.name}>
                    {this.props.labelValue}
                </label>
            );
        }
    }


export default Label;