import '../styles/main.css'

function Modal({children, title}) {
    
    return (
        <>
            <div className="modal-container">    
                <div className="modal">
                    <div className="modal-header">
                       <p>{title}</p>
                    </div>

                    <div className="modal-content">
                        {children}
                    </div>

                </div>
            </div>
        </>
    )
    
}


export default Modal;