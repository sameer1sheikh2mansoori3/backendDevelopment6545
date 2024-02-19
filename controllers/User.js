const User = require('./../models/User');

module.exports.register = async function (req, res, next) {
    const user = new User(req.body);
    await user.save();

    // const user = await User.create(req.body);
    user.password = undefined;
    res.status(200).send({
        status: 'success',
        message: 'User saved successfully',
        data: {
            user
        }
    });
}