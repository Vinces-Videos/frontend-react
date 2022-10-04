import "../styles/Modal.css";

const Modal = ({closeModal}) => {
    return (
        <div onClick={() => closeModal(false)} className="modal-background">
            <div className="modal-container">
                <div className="modal-header">
                    <h4 className="modal-title">Login</h4>
                    <button className="modal-close-button" onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="modal-body">
                    <p>This is a modal</p>
                </div>
                <div className="modal-footer">
                    <button>Submit</button>
                    <button onClick={() => closeModal(false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default Modal