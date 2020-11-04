import {createStore} from 'redux'
import rootReducer from './reducers'


const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// console.log('GS',  store.getState());


export default store;