function saturdayFun(msg = 'roller-skate') {
    return `This Saturday, I want to ${msg}!`;
};

function mondayWork(msg = 'go to the office') {
    return `This Monday, I will ${msg}.`;
}

function wrapAdjective(highlight) {
    const innerFunction = function (msg) {
        return `You are ${highlight}${msg}${highlight}!`
    }
    return innerFunction;
}
