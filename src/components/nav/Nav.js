import React,{useState,useEffect} from 'react'
import classes from './Nav.module.css'
import {NavLink} from 'react-router-dom'

export default function Nav(props) {
    const [cart,setCart]= useState(props.cart)
    const [openCart,setOpenCart] =useState(false)

    const openCartHandler=()=>{
        setOpenCart(!openCart)
        console.log(cart)

    }

    useEffect(() => {
       setCart(props.cart)
    }, [props.cart])

    return (
        <header className={classes.header}>
             <ul >
           <li>
               <NavLink className={classes.active} to='/home'  >Home</NavLink>
           </li>
           <li>
               <NavLink className={classes.active} to='/admin' >admin</NavLink>
           </li>
           <li>
               <NavLink className={classes.active} to='/dash' >Dash</NavLink>
           </li>
           <li onClick={openCartHandler}>Cart</li>
       </ul>

        {
            openCart?<div className={classes.cart}>
            <h1>cart :</h1>
           
            {cart.map(item=>
                    {
                        return( 
                                    <h4>
                                    {item.title} , {item.price}$
                                    </h4>

                        )
                    }
                )}
               
          
            
        
    </div>:null
        }
            
            
            
            
        </header>
    )
}
