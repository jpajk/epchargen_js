"use strict";

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
                    validation: [(value) => { console.log(value) }]
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

    static submitHandler(data, component) {

    }
}

export default RegisterDefinition;