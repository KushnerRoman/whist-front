import React,{useState} from 'react'
import Modal from 'react-modal'
import Services from '../../service/Services'
import AdminAction from '../admin/AdminAction'
import './Item.css'


Modal.setAppElement('#root')
export default function Item(props) {

    const itemId=props.item.id
    const [editClicked,setEditClicked]=useState(false)
    const [item,setItem]=useState(props.item)

    const editItem=()=>{
        setEditClicked(true)
        console.log(itemId)
    }

    const handlerCloseModal=()=>{
        setEditClicked(false)
    }
    const handlerEditItem=(item)=>{
        
    }
    const deleteItem=()=>{
        Services.deleteItem(itemId).then(
            alert(`item ${itemId} was deleted`) 
        )
    }

    return (

        <div>

          
                <div className='row-item-admin'>
             
             <p > {props.item.title}</p>
             <h5> {props.item.price}$</h5> 
             <div>
             <button onClick={()=>editItem()} >
                 edit
             </button>
             <button onClick={()=>deleteItem()}>
                 delete
             </button>
             </div>
            

         
        </div>
        {
                editClicked?<AdminAction isOpen={editClicked} closeModal={handlerCloseModal} editItem={handlerEditItem} item={item}/>:null
        }
     </div>
 )
        
        
}
