import React from 'react';
import FormMessage from './FormMessage';
import { observer, inject } from 'mobx-react';

@inject('ObservableMessageStore')
@observer
class FormMessages extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        const store = this.props.ObservableMessageStore;

        return (
            <div className="form-messages">
                {store.messages.map((m, i) => {
                    return m
                })}
            </div>
        );
    }
}

export default FormMessages;