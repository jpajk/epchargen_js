import React from 'react';
import GenericForm from '../_Form/Register/Form';
import RegisterDefinition from '../FormDefinitions/RegisterDefinition';
import ObservableMessageStore from '../../../stores/MessageStore';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

const Register = React.createClass
(
    {
        render() {
            return (
                <div>
                    <Provider ObservableMessageStore={ObservableMessageStore.instantiate()}>
                        <GenericForm
                            inputGroupSchema={RegisterDefinition.getFormSchema}
                            handleSubmit={(e)=>{console.log(e)}}
                        />
                    </Provider>
                    <DevTools/>
                </div>
            );
        },
    }
);

export default Register;