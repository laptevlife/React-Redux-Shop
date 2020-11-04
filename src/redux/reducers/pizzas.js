const initialState = {
    items : [],
    loaded: false
}

const pizzas=(state = initialState, action)=>{
    if(action.type==="SET_PIZZAS"){
        return {
            ...state, 
            items: action.payload
        }
    }
    return state
}

export default pizzas;