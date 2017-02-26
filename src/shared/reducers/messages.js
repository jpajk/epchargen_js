const messages = (state={}, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            if (!state.hasOwnProperty(key)) {
                let messages = state.messages;
                messages[action.key] = action.message;

                state = { ...state, messages: messages }

            }
    }

    return state;
};

export default messages;