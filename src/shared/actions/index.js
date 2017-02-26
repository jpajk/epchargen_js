export const addMessage = (key, text) => {return {
    type: 'ADD_MESSAGE',
    message: text,
    key: key
}};