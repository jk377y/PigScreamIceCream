import Modal from './Modal.jsx'

//TODO shows the full info for whichever product the Menu page has selected
const ItemDetails = ({ item, onClose }) => {
    return (
        <Modal onClose={onClose} labelledBy="item-details-title" className="item-details">
            <div className="item-details-image">
                {item.image ? (
                    <img src={item.image} alt={item.name} />
                ) : (
                    <span className="item-card-image-fallback" aria-hidden="true">🍨</span>
                )}
            </div>

            <div className="item-details-info">
                <span className="item-details-category">{item.category}</span>
                <h2 id="item-details-title" className="item-details-name">{item.name}</h2>
                <p className="item-details-description">{item.description}</p>

                <dl className="item-details-facts">
                    <div>
                        <dt>Serving Size</dt>
                        <dd>{item.servingSize}</dd>
                    </div>
                    <div>
                        <dt>Calories</dt>
                        <dd>{item.calories}</dd>
                    </div>
                    <div className="item-details-allergens">
                        <dt>Allergens</dt>
                        <dd>
                            {item.allergens.length > 0
                                ? item.allergens.map((allergen) => (
                                      <span key={allergen} className="allergen-chip">{allergen}</span>
                                  ))
                                : 'None listed'}
                        </dd>
                    </div>
                </dl>

                <p className="placeholder-note">
                    Placeholder information for development only — not verified nutritional or allergen data.
                </p>
            </div>
        </Modal>
    )
}

export default ItemDetails
