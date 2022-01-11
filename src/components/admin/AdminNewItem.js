import React,{useState} from 'react'
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
export default function AdminNewItem(props) {

    const [modalIsOpen,setModalIsOpen] =useState(props.isOpen)

    const handleSubmit=(values)=>{

        let newItem={
            price:values.price,
            title:values.title,
            description:values.description,
            image:values.image
        }

        Services.addItem(newItem).then(
            alert("item added!")
        )
        console.log(newItem)
         props.close()

    }
    return (
        <div>

        
        <Modal style={modalStyle} isOpen={props.isOpen} shouldCloseOnEsc={false} shouldCloseOnOverlayClick={false} onRequestClose={()=>setModalIsOpen(false)}>
             <div>
             <Formik 
            initialValues={{ title: "", description: "", image:"" }}
            onSubmit={(values, { setFieldValue }) => handleSubmit(values, { setFieldValue })}
       >
             

       {({ values,dirty }) => (
               <div>
                   <h2 >Create item</h2><br />
                   <Form >
                  
                       <div >
                       
                   
                           <label> Title</label>
                           <Field className="col-sm-6"
                               type="text"
                               name="title"                      
                               required={true}
                           
                           />


                       </div>
                       <div >
                       
                   
                       <label> Description</label>
                       <Field className="col-sm-6"
                           type="text"
                           name="description"                         
                           required={true}
                       
                       />
                           <label>Image</label>
                                <Field
                                    type="url"
                                    name="image"
                                    required={true}
                                    
                             />


                   </div>

                       <div >

                           <label>price</label>
                           <Field
                               type="number"
                               name="price"
                               required={true}
                               
                           />

                       </div>
                       <div >
                           
                            <div ></div>
                              <button type="submit" className="btn btn-primary my-1" title="Update" disabled={!dirty}>
                                   Create
                             </button>

                       </div>
                       <div className="UpdateCompany-seperator"></div>
                   </Form>
               </div>
          
       )}
       </Formik>
             </div>
             <button onClick={props.close}>
                 Close
             </button>
   
              
           </Modal>
           </div>
    )
}
