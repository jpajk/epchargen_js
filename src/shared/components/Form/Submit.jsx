import React from 'react';

const Submit = React.createClass
(
    {
        propTypes: {
            className: React.PropTypes.string,
            handleSubmit: React.PropTypes.func.isRequired,
            name: React.PropTypes.string.isRequired,
        },

        render() {
            let className = this.props.hasOwnProperty('className') ? this.props.className : '';

            return (
                <div className={"input-group " + className}>
                    <input
                        type="submit"
                        name={this.props.name}
                        onClick={this.props.handleSubmit}
                    />
                </div>
            );
        }
    }
);

export default Submit;