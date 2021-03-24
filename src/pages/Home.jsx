import React from 'react'
import Categories from '../components/Categories/Categories'
import SortPopup from '../components/SortPopup/SortPopup'
import PizzaItem from '../components/PizzaItem/PizzaItem'
import { setCategory } from '../redux/actions/filters'
import { useSelector, useDispatch } from 'react-redux'
// import { useDispatch } from 'react-redux'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizza } from '../redux/actions/cart'
import MyLoader from '../components/Loader'

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const sort = [
  { name: "популярности", type: "popular" },
  { name: 'по цене', type: "price" },
  { name: 'по алфавиту', type: "name" }]


function Home() {

  const dispatch = useDispatch()


  const items = useSelector(({ pizzas }) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const loaded = useSelector(({ pizzas }) => pizzas.loaded)
  const filterCategory = useSelector(({ filters }) => filters.category)
  const filtersortBy = useSelector(({ filters }) => filters.sortBy)

  // console.log('cartItems', cartItems);
  // console.log('filter', filtersortBy);



  // const dispatch = useDispatch()

  const onSelectCaregory = React.useCallback((index) => {   //создание одной и той же ссылки для избежания лишнего ререндера

    dispatch(setCategory(index))
  }, [])

  React.useEffect(() => {

    dispatch(fetchPizzas(filterCategory, filtersortBy))


  }, [filterCategory, filtersortBy])

  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const handleAddPizza = (obj) => {
    dispatch(addPizza(obj))
  }
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          filterCategory={filterCategory}
          onClickItem={onSelectCaregory}
          items={categories} />
        <SortPopup items={sort}
          filtersortBy={filtersortBy} />

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">







        {


          loaded ? items.map((item, index) => {



            return (
              <PizzaItem 
              // addedCount = {cartItems[item.id] && cartItems[item.id].length}
              onClickAddPizza={handleAddPizza} key={item.id} {...item} />
            )
          })
            :
            // Array(10).fill(<MyLoader />)
            arr.map((i, index) => <MyLoader key={index} />)

        }



      </div>
    </div>
  )
}

export default Home
