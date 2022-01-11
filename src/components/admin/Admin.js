import React,{useState} from 'react'
import Item from '../card/Item'
import './Admin.css'

import AdminNewItem from './AdminNewItem'


export default function Admin(props) {


    const [newItemModal,setNewItemModal]=useState(false)

    const showAdminItems=()=>{
        return(
            <div>
                  
                {props.items.map(item=>
                    {return(
                        <Item key={item.id} item={item}  />
                    )}
                )}
            </div>
        )
    }
   

    return (
        <div>
            

            <div>
            <div className='row-info'> 
                <h1>
                    title
                </h1>
                <h2>
                    price
                </h2>
                <h1>
                    options
                </h1>
            </div>
            </div>

            <div>
                   <button className='add-item' onClick={()=> setNewItemModal(true)}>Add Item</button>
            </div>
            
            
            <div className='item-row-info'>
                {showAdminItems()}
              
            </div>
            
                <AdminNewItem close={()=>(setNewItemModal(false))} isOpen={newItemModal} />
            
          
            
        </div>
    )
}
