const countReducer = (preState = 0, {type, data}) => {
    console.log(preState, type, data)
    switch (type) {
        case "addition":
            return preState + data
        case "subtraction":
            return preState - data
        default :
            return preState
    }

}

export default countReducer;