function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function wrapAdjective(visual = "*") {
    return function (however = "special") {
        return `You are ${visual}${however}${visual}!`
    }
}
wrapAdjective("%")("a dedicated programmer")
const Calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b;
    }
}
let actionApplyer = function (start, ray) {
    let a = start
    for (let i = 0; i < ray.length; i++) {
        a = ray[i](a)
    }
    return a
}