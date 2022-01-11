import {Route, BrowserRouter as Router, Routes  } from 'react-router-dom'
import './App.css';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Admin from './components/admin/Admin'
import Dash from './components/dash/Dash'
import React,{useState,useEffect} from 'react';
import Services from './service/Services';

function App() {

  const [items,setItems]=useState([])
  const [itemsBuy,setItemsBuy]=useState([])

const addItemsCart=(item)=>{
  setItemsBuy([...itemsBuy,item])
  console.log(itemsBuy)

}
  async function getItems(){
    let response= await Services.getAllItems()
            setItems(response.data)
            console.log(items)
  }



  useEffect(() => {
         
          getItems()
  
       }, [itemsBuy])



  return (
    <Router>
      <Nav cart={itemsBuy} />
        <main>
        <Routes>
          <Route path='/home' element={<Home items={items} buy={(item)=>addItemsCart(item)} />} />
          <Route path='/admin' element={<Admin items={items}  />}  />
          <Route path='/dash'  element={<Dash />}  />
        </Routes>
        </main>
 



    </Router>
  );
}

export default App;
