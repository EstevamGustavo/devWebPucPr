import './Modal.css'

function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Sucesso</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  )
}

export default Modal
