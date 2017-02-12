import React from 'react';
import Form from '../Form/Form';
import Input from '../Form/Input';
import Column from '../Grid/Column';

import SendUserData from '../../functions/SendUserData';
import performFetch from '../../functions/Fetch';

const CharacterSheet = React.createClass(
    {
        render() {
            return (
                <Form className="form-aptitudes" handleOnSubmit={this.handleFormSubmit}>
                    <Column columns="eight">
                        <Input className="atr-input" type="text" name="cog" labelValue="COG"/>
                        <Input className="atr-input" type="text" name="coo" labelValue="COO"/>
                        <Input className="atr-input" type="text" name="ref" labelValue="REF"/>
                        <Input className="atr-input" type="text" name="sav" labelValue="SAV"/>
                        <Input className="atr-input" type="text" name="som" labelValue="SOM"/>
                        <Input className="atr-input" type="text" name="int" labelValue="INT"/>
                        <Input className="atr-input" type="text" name="wil" labelValue="WIL"/>
                    </Column>
                    <Input type="submit" name="submit_sheet" handleSubmit={this.handleFormSubmit}/>
                </Form>
            );
        },

        handleFormSubmit(e) {
            e.preventDefault();

            console.log(SendUserData.body);
            /** body will also become a function */

            performFetch(
                SendUserData.submitCharacterSheet.route,
                SendUserData.submitCharacterSheet.func,
                SendUserData.submitCharacterSheet.body
            );
        }
    }
);

export default CharacterSheet;