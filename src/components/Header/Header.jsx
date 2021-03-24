import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {

  const {totalPrice, totalCount} = useSelector(({cart})=> ({
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount
  }))
  return (
    <div className="header">
      <div className="container">
        <Link to ='/'>
          <div className="header__logo">
            {/* <img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" /> */}
            <div>
              <h1>React Piza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>


        <Link to='/cart'>
          <Button totalPrice={totalPrice} totalCount={totalCount} />
        </Link>
      </div>
    </div>
  )
}

export default Header;