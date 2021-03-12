import React from 'react'
import Categories from '../components/Categories/Categories'
import SortPopup from '../components/SortPopup/SortPopup'
import PizzaItem from '../components/PizzaItem/PizzaItem'
import { setCategory } from '../redux/actions/filters'
import { useSelector, useDispatch } from 'react-redux'

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const sort = [
  { name: "популярности", type: "popular" },
  { name: 'по цене', type: "price" },
  { name: 'по алфавиту', type: "alphabet" }]


function Home() {

  const items = useSelector(({ pizzas }) => pizzas.items)

  const dispatch = useDispatch()

  const onSelectCaregory = React.useCallback((index)=>{   //создание одной и той же ссылки для избежания лишнего ререндера
    dispatch(setCategory(index))
  }, [])
   
 
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCaregory}
          items={categories} />
        <SortPopup items={sort} />

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">


        {
          items.map((item, insex) => {


            return (
              <PizzaItem key={item.id} {...item} />
            )
          })
        }



      </div>
    </div>
  )
}

export default Home
