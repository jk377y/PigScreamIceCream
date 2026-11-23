import { useEffect } from 'react'

//! shared modal shell used by ItemDetails and AuthUser
//! handles the backdrop, the X button, and closing with Escape
const Modal = ({ onClose, labelledBy, className = '', children }) => {
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKeyDown)
        // stops the page behind the modal from scrolling while the modal is open
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [onClose])

    function handleBackdropClick(event) {
        // only close when the backdrop itself is clicked, not the modal content
        if (event.target === event.currentTarget) onClose()
    }

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className={`modal ${className}`} role="dialog" aria-modal="true" aria-labelledby={labelledBy}>
                <button type="button" className="close-btn modal-close" onClick={onClose} aria-label="Close" autoFocus>
                    ✕
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal
