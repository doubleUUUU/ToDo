import './App.css';
 function Modal({ visible, onClose, content }) {
    

    if (!visible) return null
     return (
        <div className='modal-window' onClick={onClose}>
        <div className='modal-dialog' onClick={e => e.stopPropagation()}>
          <div className='modal-header'>
            <h3 className='modal-title'>Oops!</h3>
            
              
            
          </div>
          <div className='modal-body'>
            <div className='modal-content'>{content}</div>
          </div>
          
        </div>
      </div>
     )
 }


 export default Modal