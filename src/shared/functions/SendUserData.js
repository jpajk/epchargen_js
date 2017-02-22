export default {
    /** Send ajax to submit the player character */
    submitCharacterSheet: {
        route: '/submit_character_sheet',
        func: (response) => {
            console.log(response, 'this is user data');
        },
        body: (data) => {
            data = data || {};
            let ret = {};

            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    ret[key] = data[key];
                }
            }

            return ret;
        }
    },
    /** Seed the character sheet component with initial data */
    getInitialAptitudes: {
        route: '/create_seed',
        func: (component) => {
            return (aptitudes) => {
                component.setState({ aptitudes: aptitudes });
            };
        },
        body: {}
    },
    /** Submit data for account registration */
    submitAccount: {
        route: '/submit_account',
        func: (response) => {
            console.log(response, ' account creation');
        },
        body: (data) => {
            data = data || {};
            let ret = {};

            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    ret[key] = data[key];
                }
            }

            return ret;
        }
    }
}