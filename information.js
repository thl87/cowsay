const userInfo = {
    firstName: "thomas",
    campus: "nantes",
}

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: (`I'm ${userInfo.firstName} and I'm from ${userInfo.campus}`),
    e: "oO",
    T: "U "
}));


module.exports = {
    userInfo,
};


