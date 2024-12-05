let message

function saturdayFun(activity = "roller-skate"){
message = `This Saturday, I want to ${activity}!`

return message
}

const mondayWork = function (activity = "go to the office"){
    message = `This Monday, I will ${activity}.`
    return message
}

function wrapAdjective(highlight = "*"){
   return function(adjective = "special"){
        return `You are ${highlight}${adjective}${highlight}!`
    }
}
