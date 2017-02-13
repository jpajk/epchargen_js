export default {
    /** Send ajax to submit the player character */
    submitCharacterSheet: {
        route: '/submit_character_sheet',
        func: (response) => {
            console.log(response, 'this is user data');
        },
        body: {
            yadda: "yadda"
        }
    },
    /** Seed the component with initial data */
    getInitialAptitudes: {
        route: '/create_seed',
        func: (component) => {
            return (aptitudes) => {
                component.setState({ aptitudes: aptitudes });
            };
        },
        body: {}
    }
}