//TODO Floating cart panel. Real cart contents will be added once the backend is ready.
const Cart = ({ onClose }) => {
    return (
        <aside id="cart-panel" className="cart-panel" aria-label="Shopping cart">
            <div className="cart-header">
                <h2 className="cart-title">Your Cart</h2>
                <button type="button" className="close-btn" onClick={onClose} aria-label="Close cart">
                    ✕
                </button>
            </div>
            <div className="cart-empty">
                <span className="cart-empty-icon" aria-hidden="true">🍨</span>
                <p>Your cart is empty.</p>
                <p className="cart-empty-hint">Pick out some flavors from our menu!</p>
            </div>
        </aside>
    )
}

export default Cart
