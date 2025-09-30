import React from 'react'

export const MyModal = ({image, price, modal, info}) => {
  return (
    <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} className='text-capitalize'>{selTitle}</ModalHeader>
                <ModalBody>
                    <img src={selImg} alt="kép" className='img-fluid' style={{objectFit:"cover"}}/>
                </ModalBody>
            </Modal>
        </div>
  )
}


