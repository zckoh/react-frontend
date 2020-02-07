import React from "react";
import {
    MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader
} from "mdbreact";

const DishViewModal = (props) => {
    return (
        <MDBModal isOpen={props.modal} toggle={props.toggle}>
            <MDBModalHeader 
                toggle={props.toggle}
                className='text-center'
                titleClass='w-100 font-weight-bold'
            >
                { props.activeItem.name }
            </MDBModalHeader>
            <MDBModalBody>
                Date Added: { props.activeItem.date_added }<br/>
                Additional Details:<br/>
                { props.activeItem.additional_details }
            </MDBModalBody>
            <MDBModalFooter>
            <MDBBtn color='secondary' onClick={props.toggle}>
                Close
            </MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    );
}


export default DishViewModal;