import { useState } from 'react'

const ItemCard = ({ item, onSelect, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1)

    // let keyboard users open the details with Enter/Space when the card itself is focused
    function handleCardKeyDown(event) {
        if (event.target !== event.currentTarget) return
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            onSelect(item)
        }
    }

    // clicks/keys inside the controls area should never open the details modal
    function stopCardClick(event) {
        event.stopPropagation()
    }

    return (
        <article
            className="item-card"
            onClick={() => onSelect(item)}
            onKeyDown={handleCardKeyDown}
            tabIndex={0}
            aria-label={`${item.name} - view details`}
        >
            <div className="item-card-image">
                {item.image ? (
                    <img src={item.image} alt={item.name} />
                ) : (
                    <span className="item-card-image-fallback" aria-hidden="true">🍨</span>
                )}
                <span className="item-card-hint">Details</span>
            </div>

            <h3 className="item-card-banner">{item.name}</h3>

            <div className="item-card-controls" onClick={stopCardClick} onKeyDown={stopCardClick}>
                <div className="quantity-selector">
                    <button
                        type="button"
                        className="quantity-btn"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        disabled={quantity <= 1}
                        aria-label={`Decrease ${item.name} quantity`}
                    >
                        −
                    </button>
                    <span className="quantity-value" aria-live="polite">{quantity}</span>
                    <button
                        type="button"
                        className="quantity-btn"
                        onClick={() => setQuantity((q) => q + 1)}
                        aria-label={`Increase ${item.name} quantity`}
                    >
                        +
                    </button>
                </div>
                <button type="button" className="add-to-cart-btn" onClick={() => onAddToCart(item, quantity)}>
                    Add to Cart
                </button>
            </div>
        </article>
    )
}

export default ItemCard
