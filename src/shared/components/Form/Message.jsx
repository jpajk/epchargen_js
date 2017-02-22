class Message
{
    /**
     * @param {string} message
     * @param {string} className
     */
    constructor(message, className) {
        this.setMessage(message);
        this.setClassName(className);
    }

    setMessage(m) {
        this._m = m;
    }

    getMessage() {
        return this._m;
    }

    setClassName(c) {
        this._c = c;
    }

    getClassName() {
        return this._c;
    }

    static generateMessage(message, className, cb) {
        let m = new Message();

        m.setMessage(message);
        m.setClassName(className);

        cb(m);
    }
}

export default Message;