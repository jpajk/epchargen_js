import React from 'react';
import MenuItem from './MenuItem';
import Constants from '../Constants/Constants'

const Menu = React.createClass(
    {
        propTypes: {
            handleTabChange: React.PropTypes.func.isRequired,
        },

        render() {
            let constants = new Constants();
            let one = constants.get('idTabCreate');
            let two = constants.get('idTabLoad');

            return (
                <div id="main-menu">
                    <ul>
                        <MenuItem
                            id={one}
                            content="Create character sheet"
                            handle={this.handleChange}
                        />
                        <MenuItem
                            id={two}
                            content="Load character sheet"
                            handle={this.handleChange}
                        />
                    </ul>
                </div>
            );
        },

        handleChange(idTab) {
            this.props.handleTabChange(idTab);
        }
    }
);

export default Menu;