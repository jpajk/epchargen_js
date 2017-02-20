import React from 'react';
import Form from '../Form/Form';
import Submit from '../Form/Submit';
import Aptitudes from './Aptitudes';

import SendUserData from '../../functions/SendUserData';
import performFetch from '../../functions/Fetch';

const CharacterSheet = React.createClass(
    {
        getInitialState() {
            return {
                aptitudes      : [],
                aptitudesValues: []
            };
        },

        render() {
            return (
                <Form className="form-aptitudes" handleOnSubmit={this.handleFormSubmit}>
                    <Aptitudes ref="apt" aptitudes={this.state.aptitudes} />
                    <Submit handleSubmit={this.handleFormSubmit} name="submit_sheet"/>
                </Form>
            );
        },

        /**
         * Handle character sheet ajax
         * @param e
         */
        handleFormSubmit(e) {
            e.preventDefault();
            let data = {};
            data.apts = this.refs.apt.getInputs();

            let s = SendUserData.submitCharacterSheet;
            performFetch(s.route, s.func, s.body(data));
        },

        /** Seed character sheet with initial data */
        componentDidMount() {
            let g = SendUserData.getInitialAptitudes;
            performFetch(g.route, g.func(this), g.body);
        }
    }
);

export default CharacterSheet;