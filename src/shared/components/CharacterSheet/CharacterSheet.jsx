import React from 'react';
import Form from '../Form/Form';
import Input from '../Form/Input';
import SendUserData from '../../functions/SendUserData';
import performFetch from '../../functions/Fetch';

const CharacterSheet = React.createClass(
    {
        render() {
            return (
                <Form handleOnSubmit={this.handleFormSubmit}>
                    <Input type="text" name="player_name" labelValue="Player name"/>
                    <Input type="text" name="character_name" labelValue="Character name"/>
                    <Input type="submit" name="submit_sheet" handleSubmit={this.handleFormSubmit}/>
                </Form>
            );
        },

        handleFormSubmit(e) {
            e.preventDefault();

            console.log(SendUserData.body);

            performFetch(
                SendUserData.submitCharacterSheet.route,
                SendUserData.submitCharacterSheet.func,
                SendUserData.submitCharacterSheet.body
            );
        }
    }
);

export default CharacterSheet;