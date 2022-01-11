import React,{useState,useEffect} from 'react'
import Modal from 'react-modal'
import { Field, Formik, Form } from 'formik'
import Services from '../../service/Services'



const modalStyle ={
    overlay: {
        position: 'absolute',
        marginRight: 'auto'
    },
    content: {
        position: 'absolute',
    }
}

Modal.setAppElement('#root')
export default function AdminAction(props) {


    const [modalIsOpen,setModalIsOpen] =useState(props.isOpen)
    const [item,setItem]=useState(props.item)



    const handleSubmit=(values)=>{
        
        let itemToEdit={
            id:item.id,
            title:values.title,
            description:values.description,
            image:values.image,
            price:values.price
        }
       Services.editItem(itemToEdit).then(
           response=> {
               alert("updated !");
           setModalIsOpen(false);
        },error=>{
          alert(error)  
        }
       )
    }


    useEffect(() => {
        console.log(item)
    }, [])
    return (
        <div>

        
             <Modal style={modalStyle} isOpen={modalIsOpen} shouldCloseOnEsc={false} shouldCloseOnOverlayClick={false} onRequestClose={()=>setModalIsOpen(false)}>
                  <div>
                  <Formik 
                 initialValues={{ title: item.tile, description: item.description, price:item.price , image:item.image }}
                 onSubmit={(values, { setFieldValue }) => handleSubmit(values, { setFieldValue })}
            >
                  

            {({ values,dirty }) => (
                    <div>
                        <h2 >Edit item</h2><br />
                        <Form >
                       
                            <div >
                            
                        
                                <label> Title</label>
                                <Field className="col-sm-6"
                                    type="text"
                                    name="title"
                                    placeholder={item.title}
                                    required={true}
                                
                                />


                            </div>
                            <div >
                            
                        
                            <label> Description</label>
                            <Field className="col-sm-6"
                                type="text"
                                name="description"
                                placeholder={item.description}
                                required={true}
                            
                            />


                        </div>

                            <div >

                                <label>price</label>
                                <Field
                                    type="number"
                                    name="price"
                                    placeholder={item.price}
                                    required={true}
                                    
                                />
                                   <label>Image</label>
                                <Field
                                    type="url"
                                    name="image"
                                    placeholder={item.image}
                                    required={true}
                                    
                                />

                            </div>
                            <div >
                                
                                 <div ></div>
                                   <button type="submit" className="btn btn-primary my-1" title="Update" disabled={!dirty}>
                                        edit
                                  </button>

                            </div>
                            <div className="UpdateCompany-seperator"></div>
                        </Form>
                    </div>
               
            )}
            </Formik>
                  </div>
                  <button onClick={props.closeModal}>
                      Close
                  </button>
        
                   
                </Modal>
                </div>
        
    )
}

