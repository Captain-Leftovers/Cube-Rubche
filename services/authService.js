const User = require("../models/User");

const register = function (username, password, repeatPassword) {
return User.create({username, password});
};

module.exports = { register };
