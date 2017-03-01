import { observable, computed, action } from 'mobx';

class ObservableMessageStore {
    @observable messages = [];

    @computed get currentMessages() {
        return this.messages;
    }

    @action
    addMessage(message) {
        if (!(this.messages.indexOf(message) >= 0))
            this.messages.push(message);
    }

    @action
    removeMessage(message) {
        let i = this.messages.indexOf(message);
        if (i >= 0)
            this.messages.splice(i, 1);
    }

    static instantiate() {
        const store = new ObservableMessageStore();
        store.messages = [];
        return store;
    }
}

export default ObservableMessageStore;