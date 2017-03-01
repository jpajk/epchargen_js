"use strict";

import Validation from './Validation/Validation';

class RegisterDefinition
{
    static getFormSchema() {
        return {
            schema: [
                {
                    type: "text",
                    name: "email",
                    labelValue: "E-mail",
                    initialValue: "",
                    validation: [RegisterDefinition.emailValidation]
                },
                {
                    type: "text",
                    name: "nick",
                    labelValue: "Nick",
                    initialValue: "",
                    validation: [(value) => { console.log(value) }]
                },
                {
                    type: "text",
                    name: "password",
                    labelValue: "Password",
                    initialValue: "",
                    validation: [(value) => { console.log(value) }]
                },
            ],
            submit: {
                submitName: "submit",
                submitValue: "submit",
                submitHandler: this.submitHandler
            }
        }
    }

    static emailValidation(val, component) {
        let message = 'The e-mail is not correct';
        let store = component.props.ObservableMessageStore;

        if (!Validation.isEmail(val))
            store.addMessage(message);
        else
            store.removeMessage(message);

        clog(component.props.ObservableMessageStore);

    }

    static submitHandler(data, component) {

    }
}

export default RegisterDefinition;