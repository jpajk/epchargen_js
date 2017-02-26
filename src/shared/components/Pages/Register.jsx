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
    }
);

export default Register;