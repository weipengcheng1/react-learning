/**
 * 该文件专门为count组件生成action对象
 */


//同步action 返回值为object
const createIncrementAction = (data) => {
    return {type: "addition", data}
}


const createSubtraction = (data) => {
    return {type: "subtraction", data}
}

//异步action 返回值为function 异步action中一般都会调用同步action
const createAsyncAddition = (data, timer) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, timer)
    }
}


export {
    createSubtraction,
    createIncrementAction,
    createAsyncAddition
}