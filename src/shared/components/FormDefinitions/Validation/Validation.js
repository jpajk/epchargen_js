class Validation
{
    /**
     * @param {string} string
     */
    static isEmail(string) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(string);
    }

    /**
     * @param {string} string
     * @param {int} length
     */
    static hasLengthOf(string, length) {
        return string.length === length;
    }
}

export default Validation;