import React from 'react';
import GenericForm from '../_Form/Generic/GenericForm';
import RegisterDefinition from '../FormDefinitions/RegisterDefinition';

const Register = React.createClass
(
    {
        render() {
            return (
                <div>
                    <GenericForm
                        inputGroupSchema={RegisterDefinition.getFormSchema}
                        handleSubmit={(e)=>{console.log(e)}}
                    />
                </div>
            );
        },

        /**
         * todo refactor, also find an efficient way of handling for validation
         * @param e
         */
        // handleFormSubmit(e) {
        //     e.preventDefault();
        //     let data = {};
        //     data.register = this.refs.register_form.getInputs();
        //
        //     let s = SendUserData.submitAccount;
        //     performFetch(s.route, s.func, s.body(data));
        // }
    }
);

export default Register;