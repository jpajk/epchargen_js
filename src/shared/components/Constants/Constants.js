export default class Constants {
    constructor() {
        this.constants = {
            'idTabCreate': 1,
            'idTabLoad'  : 2
        };
    }

    get(key) {
        return this.constants[key];
    }

}