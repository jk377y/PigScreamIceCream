const NAV_LINKS = [
    { page: 'home', label: 'Home' },
    { page: 'menu', label: 'Menu' },
    { page: 'about', label: 'About' },
]

const Navigation = ({ currentPage, isCartOpen, onCartToggle }) => {
    return (
        // create nav buttons based on the NAV_LINKS array
        // if more links are needed, we can add them above and it will auto build them on the header
        <nav className="main-nav" aria-label="Main navigation">
            <ul className="nav-list">
                {NAV_LINKS.map((link) => (
                    <li key={link.page}>
                        <a
                            href={`#/${link.page}`}
                            className={`nav-link ${currentPage === link.page ? 'active' : ''}`}
                            aria-current={currentPage === link.page ? 'page' : undefined}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
                <li>
                    <button
                        type="button"
                        className={`nav-link cart-toggle ${isCartOpen ? 'active' : ''}`}
                        onClick={onCartToggle}
                        aria-expanded={isCartOpen}
                        aria-controls="cart-panel"
                    >
                        <span aria-hidden="true">🛒</span> Cart
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
