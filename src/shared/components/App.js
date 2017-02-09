import React from 'react';
import Menu from './Menu/Menu';
import TabHandler from './TabHandler/TabHandler';

// todo: rewrite components
const App = React.createClass(
{
    render() {
        return (
            <div id="app-wrapper">
                <Menu
                    handleTabChange={this.handleTabChange}
                />
                <TabHandler tab={this.state.tab} />
            </div>
        );
    },

    getInitialState() {
        return {
            tab: 0,
            formValues: {
                playerName: '',
                characterName: ''
            }
        };
    },

    handleTabChange(tab) {
        console.log(tab);
        this.setState({
           tab: tab
        });
    },

    componentDidMount() {
        require('./skeleton.css');
    }
}
);

export default App;