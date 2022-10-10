import "../styles/Modal.css";
import PropTypes from 'prop-types';

//rename the modalBody to ModalBody 
const Modal = ({closeModal, modalBody: ModalBody}) => { 
    console.log(ModalBody);
    return (
        <div onClick={() => closeModal(false)} className="modal-background">
            <div className="modal-container">
                <div className="modal-header">
                    <h4 className="modal-title">{ModalBody.name}</h4>
                    <button className="modal-close-button" onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="modal-body">
                    <ModalBody />
                </div>
                <div className="modal-footer">
                    <button>Submit</button>
                    <button onClick={() => closeModal(false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    ModalBody: PropTypes.element
}

export default Modal