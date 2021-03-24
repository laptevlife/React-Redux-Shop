const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_PIZZA':
            const newItems = {
                ...state.items,
                // [action.payload.id]: [...state.items[action.payload.id], action.payload]
                [action.payload.id]: !state.items[action.payload.id]
                                        ?[action.payload]
                                        :[...state.items[action.payload.id], action.payload]
            }
            // console.log(action.payload);
            console.log(!state.items[action.payload.id]);
            
            
            
            const allPizzas = [].concat.apply([], Object.values(newItems))
            // // console.log(newItems);
            // console.log(Object.values(newItems));
            // console.log(typeof(Object.values(newItems)));
            // console.log(Object.keys(newItems));
            
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length ,
                totalPrice: allPizzas.reduce((sum , obj)=> obj.price+sum, 0)
            }
       
            
            
 
            
        default:
            return state
    };


}

export default cart;

// const newItems = {
//     ...state.items,
//     [action.payload.id]: !state.items[action.payload.id]
//     ?[action.payload]
//     :[...state.items[action.payload.id], action.payload]
// }
// // console.log(action.payload);
// // console.log(newItems);



// const allPizzas = [].concat.apply([], Object.values(newItems))
// console.log(Object.values(newItems));

// return {
//     ...state,
//     items: newItems,
//     totalCount: allPizzas.length ,
//     totalPrice: allPizzas.reduce((sum , obj)=> obj.price+sum, 0)
// }}