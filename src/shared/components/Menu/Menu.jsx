import React from 'react';
import MenuItem from './MenuItem';
import Constants from '../Constants/Constants'
import { Link } from 'react-router';

const Menu = React.createClass(
    {
        render() {
            let constants = new Constants();
            let one = constants.get('idTabCreate');
            let two = constants.get('idTabLoad');

            return (
                <div id="main-menu">
                    <ul>
                        <Link to="/create" >Create character sheet</Link>
                        <Link to="/load" >Load character sheet</Link>
                    </ul>
                </div>
            );
        },
    }
);

export default Menu;