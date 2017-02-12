import React from 'react';
import Menu from '../Menu/Menu';
import TabHandler from '../TabHandler/TabHandler';
import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Column from '../Grid/Column';
import Wrapper from '../Grid/Wrapper';

const Index = React.createClass
(
    {
        render() {
            return (
                <Wrapper>
                    <Container id="app-wrapper" className="container">
                        <Row>
                            <Column columns="four">
                                <Menu />
                            </Column>
                            <TabHandler tab={this.state.tab} />
                        </Row>
                    </Container>
                </Wrapper>
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
            this.setState({
                tab: tab
            });
        },

        componentDidMount() {
            require('../skeleton.css');
        }
    }
);

export default Index;