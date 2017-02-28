import { observable, computed } from 'mobx';

class ObservableMessageStore {
    @observable messages = [];

    @computed get currentMessages() {
        return this.messages;
    }

    addMessage(message) {
        this.todos.push({
            message: message
        });
    }
}

export default ObservableMessageStore;