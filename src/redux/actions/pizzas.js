import axios from 'axios'

export const setLoaded = payload => ({
  type: "SET_LOADED",
  payload
})

export const fetchPizzas = (filterCategory, filtersortBy)=> (dispatch) =>{
  dispatch(setLoaded(false))
    // axios.get('http://localhost:3001/pizzas')
    // axios.get(`http://localhost:3001/pizzas?category=${filterCategory === null ? '': filterCategory }`)
    axios.get(`/pizzas?${filterCategory !== null ? `category=${filterCategory}`: '' }&_sort=${filtersortBy}&_order=asc`)
    .then(res => {
      dispatch(setPizzas(res.data))
    })
} 

export const setPizzas = (items)=>({
    type: "SET_PIZZAS", 
    payload: items
})
