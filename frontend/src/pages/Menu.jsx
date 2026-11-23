import { useCallback, useState } from 'react'
import AuthUser from '../components/AuthUser.jsx'
import CategoryNav from '../components/CategoryNav.jsx'
import ItemCard from '../components/ItemCard.jsx'
import ItemDetails from '../components/ItemDetails.jsx'

//! TEMPORARY DATA: local placeholder data until the FastAPI backend is available
import { ALL_CATEGORIES, categories, menuItems } from '../data/menuItems.js'

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES)
    const [selectedItem, setSelectedItem] = useState(null)
    const [isAuthOpen, setIsAuthOpen] = useState(false)

    //! TEMPORARY: filtering happens locally for now; later this will be a backend query
    const visibleItems =
        selectedCategory === ALL_CATEGORIES
            ? menuItems
            : menuItems.filter((item) => item.category === selectedCategory)

    //TODO nobody can be logged in yet, so Add to Cart always asks the user to log in / sign up.
    //TODO Nothing is actually added to the cart.
    function handleAddToCart() {
        setIsAuthOpen(true)
    }

    // useCallback keeps these stable so the modal's Escape listener isn't re-attached every render
    const closeDetails = useCallback(() => setSelectedItem(null), [])
    const closeAuth = useCallback(() => setIsAuthOpen(false), [])

    return (
        <section className="menu-page">
            <div className="page-heading">
                <h1 className="page-title">Our Menu</h1>
                <p className="page-subtitle">Hand-scooped flavors to brighten your day!</p>
            </div>

            <CategoryNav
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <div className="item-grid">
                {visibleItems.map((item) => (
                    <ItemCard key={item.id} item={item} onSelect={setSelectedItem} onAddToCart={handleAddToCart} />
                ))}
            </div>

            {visibleItems.length === 0 && <p className="empty-message">No flavors in this category yet.</p>}

            {selectedItem && <ItemDetails item={selectedItem} onClose={closeDetails} />}
            {isAuthOpen && <AuthUser onClose={closeAuth} />}
        </section>
    )
}

export default Menu
