import React from 'react'
import Categories from '../components/Categories/Categories'
import SortPopup from '../components/SortPopup/SortPopup'
import PizzaItem from '../components/PizzaItem/PizzaItem'


function Home({pizzas}) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup items={[
                   {name:"популярности", type: "popular"},
                   {name: 'по цене', type: "price"}, 
                   {name:'по алфавиту', type:"alphabet"}]} />

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">


{
  pizzas.map((item, insex)=>{
    return(
        <PizzaItem key ={item.id} {...item} />
    )
  })
}
        
       
       
      </div>
    </div>
  )
}

export default Home
