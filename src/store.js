import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import thunkMiddlware from 'redux-thunk'

const logMiddlware = ({getState}) => (next) => (action) => {
    console.log(action.type, getState())
    return next(action)
}

const stringMiddlware = () => (next) => (action) => {
    if(typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = createStore(reducer, applyMiddleware(thunkMiddlware, stringMiddlware, logMiddlware))

export default store