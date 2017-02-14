export default class Validate {
    isBetweenZeroAndThirty = (event) => {
        let value = parseInt(event.target.value);

        if (this._greaterThan(value, 30)) return 0;
        if (this._smallerThan(value, 0)) return 0;

        return value;
    };

    _greaterThan = (val1, val2) => {
        return val1 > val2;
    };

    _smallerThan = (val, val2) => {
        return val < val2;
    };
};