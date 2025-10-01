import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
export const MyModal = ({image, price, setOpen,open, info}) => {

  console.log("modal");

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  

  return (
    
       
<div className=''>
     
      <Modal open={open} onClose={onCloseModal} center>
        <img src={image} alt="" className='p-5'/>
        <p className='mt-5'>{info}</p>
        <p className='mt-5'>
          Price: {price}€
        </p>
      </Modal>
    </div>
        
  )
}


