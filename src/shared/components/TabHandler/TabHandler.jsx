import React from 'react';
import CharacterSheet from '../CharacterSheet/CharacterSheet';

const App = React.createClass(
    {
        propTypes: {
            tab: React.PropTypes.number.isRequired
        },

        render() {
            return (
                <div>
                    {this.handleTabs()}
                </div>
            );
        },

        handleTabs() {
            let tabs = {
                0: '',
                1: <CharacterSheet/>,
            };

            return tabs[this.props.tab];
        }
    }
);

export default App;