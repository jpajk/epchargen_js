import React from 'react';
import Form from '../Form/Form';
import InputWrapper from '../Form/InputWrapper';
import Submit from '../Form/Submit';
import SendUserData from '../../functions/SendUserData';
import performFetch from '../../functions/Fetch';

const Register = React.createClass
(
    {
        render() {
            return (
                <Form>
                    <InputWrapper ref="register_form" inputSchema={this.getFormSchema}/>
                    <Submit handleSubmit={this.handleFormSubmit} name="submit_account"/>
                </Form>
            );
        },

        /**
         * todo refactor, also find an efficient way of handling for validation
         * @param e
         */
        handleFormSubmit(e) {
            e.preventDefault();
            let data = {};
            data.register = this.refs.register_form.getInputs();

            let s = SendUserData.submitAccount;
            performFetch(s.route, s.func, s.body(data));
        },

        getFormSchema() {
            return [
                {
                    type: "text",
                    name: "email",
                    labelValue: "E-mail",
                    initial: {value: ""}
                },
                {
                    type: "text",
                    name: "nick",
                    labelValue: "Nick",
                    initial: {value: ""}
                },
                {
                    type: "text",
                    name: "password",
                    labelValue: "Password",
                    initial: {value: ""}
                },
            ];
        }
    }
);

export default Register;