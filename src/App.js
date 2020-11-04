
import React from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import {connect } from 'react-redux'
import { Header } from './components'
import Home from './pages/Home';
import Cart from './pages/Cart';
import axios from 'axios'
import store from './redux/store'
import {setPizzas as pizzaAction} from './redux/actions/pizzas'







class App extends React.Component{
  componentDidMount(){
    axios.get('http://localhost:3000/pizzas')
    .then(res=>{
     console.log(res.data);


    //  console.log(setPizzas(res.data));
     this.props.setPizzas(res.data)
    //  console.log('store', store);
     
     
    })
  }
  render(){
    return (
      <div>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Route exact path='/' render={()=> <Home pizzas={this.props.items} />} />
            <Route path='/cart' render={()=> <Cart/>} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  // console.log("mapState", state)
  return {    
    items:state.pizzas.items   
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {    
    setPizzas : (items)=> dispatch(pizzaAction(items))   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);






// function App() {


//   const [pizzas, setPizzas] = React.useState([])
//   React.useEffect(() => {

    // axios.get('http://localhost:3000/pizzas')
    //      .then(res=>{
    //       setPizzas(res.data)
    //      })
    
//   }, [])

// // console.log(pizzas)
//   // return (
//   //   <div>
//   //     <div className="wrapper">
//   //       <Header />
//   //       <div className="content">
//   //         <Route exact path='/' render={()=> <Home pizzas={pizzas} />} />
//   //         <Route path='/cart' render={()=> <Cart/>} />
//   //       </div>
//   //     </div>
//   //   </div>
//   // );
// }