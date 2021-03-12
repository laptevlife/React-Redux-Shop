
import React from 'react'
import { Route } from 'react-router-dom'
import './App.css';
// import { connect } from 'react-redux'
import { Header } from './components'
import Home from './pages/Home';
import Cart from './pages/Cart';
// import axios from 'axios'
// import store from './redux/store'
// import { setPizzas } from './redux/actions/pizzas'
import { useDispatch } from 'react-redux'
import {fetchPizzas} from './redux/actions/pizzas'






function App() {

  const dispatch = useDispatch()
  React.useEffect(() => {
    // axios.get('http://localhost:3000/pizzas')
    //   .then(res => {
    //     dispatch(setPizzas(res.data))
    //   })
    dispatch(fetchPizzas())
  }, [])


// console.log('PROPS', props);


  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path='/' render={() => <Home  />} />
          <Route path='/cart' render={() => <Cart />} />
        </div>
      </div>
    </div>
  );
}


export default App

// const mapStateToProps = (state)=>{
//   // console.log("mapState", state)
//   return {    
//     items:state.pizzas.items   
//   }
// }
// const mapDispatchToProps = (dispatch)=>{
//   return {    
//     setPizzas : (items)=> dispatch(pizzaAction(items))   
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);





// class App extends React.Component{
//   componentDidMount(){
//     axios.get('http://localhost:3000/pizzas')
//     .then(res=>{
//      console.log(res.data);


//     //  console.log(setPizzas(res.data));
//      this.props.setPizzas(res.data)
//     //  console.log('store', store);


//     })
//   }
//   render(){
//     return (
//       <div>
//         <div className="wrapper">
//           <Header />
//           <div className="content">
//             <Route exact path='/' render={()=> <Home pizzas={this.props.items} />} />
//             <Route path='/cart' render={()=> <Cart/>} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state)=>{
//   // console.log("mapState", state)
//   return {    
//     items:state.pizzas.items   
//   }
// }
// const mapDispatchToProps = (dispatch)=>{
//   return {    
//     setPizzas : (items)=> dispatch(pizzaAction(items))   
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);


