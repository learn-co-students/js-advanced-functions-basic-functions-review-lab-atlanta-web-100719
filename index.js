// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}


let mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}


function wrapAdjective(flair = "*") {
    return (adj = "special") => {
        return `You are ${flair}${adj}${flair}!`;
    }
}

let Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

function actionApplyer(int, funcs) {
    if (funcs.length == 0) {
        return int
    } else {
        for (const f of funcs) {
            int = f(int)
        }
        return int;
    }
}