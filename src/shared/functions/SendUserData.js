export default {
    submitCharacterSheet: {
        route: '/submit_character_sheet',
        func: (response) => {
            console.log(response, 'this is user data');
        },
        body: {
            yadda: "yadda"
        }
    }
}