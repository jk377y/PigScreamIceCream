//TODO This will need to be adjusted to support the categories that are in the database.
//TODO it should filter the results based on the tab button selected
const CategoryNav = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <nav className="category-nav" aria-label="Flavor categories">
            {categories.map((category) => (
                <button
                    key={category.name}
                    type="button"
                    className={`category-btn ${selectedCategory === category.name ? 'active' : ''}`}
                    onClick={() => onSelectCategory(category.name)}
                    aria-pressed={selectedCategory === category.name}
                >
                    <span className="category-icon" aria-hidden="true">{category.icon}</span>
                    {category.name}
                </button>
            ))}
        </nav>
    )
}

export default CategoryNav
