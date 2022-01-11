import React from 'react'
import { Image } from 'react-bootstrap'
import '../card/Item.css'


export default function Home(props) {

const buyHandler=(item)=>{
    props.buy(item)

}


    const showItem=()=>{
        return(
            <div className='item-items'>
        
                        {props.items.map(item=>{
                            return(                               
                                <div key={item.id} className='item'>
                                <Image className="item-image" src={item.image}/>
                                 <p className="title"> {item.title}</p>
                                 <h5 className="description"> {item.description}</h5>
                                 <h5 className="price"> {item.price}$</h5> 
                                 <button onClick={()=>buyHandler(item)}>
                                     Buy
                                 </button>
                 
                             
                         </div>
                            )
                        })}
                         
            </div>
        )

    }


    return (
        <div>
            
            {showItem()}


        </div>
    )
}
