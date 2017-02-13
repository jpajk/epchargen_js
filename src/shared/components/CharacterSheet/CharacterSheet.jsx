import React from 'react';
import Form from '../Form/Form';
import Input from '../Form/Input';
import Column from '../Grid/Column';

import SendUserData from '../../functions/SendUserData';
import performFetch from '../../functions/Fetch';

const CharacterSheet = React.createClass(
    {
        getInitialState() {
            return {
                aptitudes: []
            };
        },

        render() {
            return (
                <Form className="form-aptitudes" handleOnSubmit={this.handleFormSubmit}>
                    <Column columns="eight">
                        {this.state.aptitudes.map((apt) => {
                            return (
                                <Input
                                    key={apt.id}
                                    className="atr-input"
                                    type="text"
                                    name={apt.name}
                                    labelValue={apt.name.toUpperCase()}
                                />
                            );
                        })}
                    </Column>
                    <Input type="submit" name="submit_sheet" handleSubmit={this.handleFormSubmit}/>
                </Form>
            );
        },

        handleFormSubmit(e) {
            e.preventDefault();
            let s = SendUserData.submitCharacterSheet;
            performFetch(s.route, s.func, s.body);
        },

        componentDidMount() {
            let g = SendUserData.getInitialAptitudes;
            performFetch(g.route, g.func(this), g.body);
        }
    }
);

export default CharacterSheet;