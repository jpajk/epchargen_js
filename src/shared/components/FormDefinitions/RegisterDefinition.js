"use strict";

import Validation from './Validation/Validation';
import { addMessage } from '../../actions';

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
        let dispatcher = ({ dispatch }) => {
            console.log('dispatched', dispatch);
        };
        console.log(connect);
        connect()(dispatcher);

        // let key = 'email';
        // clog(Validation.isEmail(val));
        // if (!Validation.isEmail(val))
        //     component.addToErrors(key, 'This is not a valid email');
        // else
        //     component.removeFromErrors(key);
        //
        // clog(component.getErrors());
    }

    static submitHandler(data, component) {

    }
}

export default RegisterDefinition;