import bcrypt from 'bcrypt';

class Password
{
    // todo validation
    /**
     * @param {func} cb
     * @param {string} password
     */
    static hashPassword(password, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                cb(hash);
            });
        });
    }

    /**
     * @param {func} cb
     * @param {string} password
     * @param {string} hashed_password
     */
    static comparePassword(password, hashed_password, cb) {
        bcrypt.compare(password, hashed_password, (err, res) => {
            if (err)
                console.log(err);

            cb(res);
        });
    }
}

export default Password;