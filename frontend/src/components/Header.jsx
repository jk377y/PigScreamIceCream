import logo from '../assets/logo.png'
import Cart from './Cart.jsx'
import Navigation from './Navigation.jsx'

// positions of the decorative ice cream drips under the header (in SVG units, 1440 wide)
const DRIPS = [
    { x: 60, width: 44, height: 96 },
    { x: 170, width: 30, height: 60 },
    { x: 330, width: 40, height: 78 },
    { x: 520, width: 28, height: 52 },
    { x: 1000, width: 30, height: 56 },
    { x: 1150, width: 42, height: 90 },
    { x: 1290, width: 32, height: 64 },
    { x: 1385, width: 38, height: 84 },
]

const Header = ({ currentPage, isCartOpen, onCartToggle, onCartClose }) => {
    return (
        <header className="site-header">
            <div className="header-bar">
                <a href="#/home" className="brand">
                    <img src={logo} alt="Pig Scream Ice Cream logo" className="brand-logo" />
                    <span className="brand-text">
                        <span className="brand-name">Pig Scream</span>
                        <span className="brand-tagline">Ice Cream Company</span>
                    </span>
                </a>
                <span className="header-divider" aria-hidden="true" />
                <Navigation
                    currentPage={currentPage}
                    isCartOpen={isCartOpen}
                    onCartToggle={onCartToggle}
                />
            </div>

            <svg className="header-drip" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
                <path
                    d="M0 0H1440V36C1320 46 1200 28 1080 38C900 50 720 30 540 40C360 50 180 30 0 40Z"
                    fill="var(--color-cloud-blue)"
                />
                {DRIPS.map((drip) => (
                    <g key={drip.x}>
                        <rect
                            x={drip.x}
                            y="0"
                            width={drip.width}
                            height={drip.height}
                            rx={drip.width / 2}
                            fill="var(--color-cloud-blue)"
                        />
                        <rect
                            x={drip.x + drip.width * 0.22}
                            y={drip.height - 30}
                            width="6"
                            height="16"
                            rx="3"
                            fill="var(--color-horizon-blue)"
                        />
                    </g>
                ))}
                <path
                    d="M0 0H1440V12C1260 24 1080 4 900 14C720 24 540 4 360 14C200 22 90 8 0 14Z"
                    fill="var(--color-midnight-navy)"
                />
            </svg>

            {isCartOpen && <Cart onClose={onCartClose} />}
        </header>
    )
}

export default Header
