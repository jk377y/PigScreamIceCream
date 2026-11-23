import logo from '../assets/logo.png'

//! social media icons are visuals only and intentionally don't link anywhere
const SOCIAL_ICONS = [
    {
        name: 'Discord',
        svg: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M6.5 6.8c3.5-1.6 7.5-1.6 11 0 1.6 2.6 2.4 5.5 2.2 8.7-1.5 1.2-3 1.9-4.5 2.3l-1-1.6c-1.9.5-4.5.5-6.4 0l-1 1.6c-1.5-.4-3-1.1-4.5-2.3-.2-3.2.6-6.1 2.2-8.7z"
                />
                <circle cx="9.3" cy="12.5" r="1.4" fill="var(--color-cloud-white)" />
                <circle cx="14.7" cy="12.5" r="1.4" fill="var(--color-cloud-white)" />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        svg: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
            </svg>
        ),
    },
    {
        name: 'Facebook',
        svg: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M13.5 21v-7.5h2.6l.4-3h-3V8.7c0-.9.3-1.5 1.5-1.5h1.6V4.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.2H8v3h2.5V21z"
                />
            </svg>
        ),
    },
    {
        name: 'YouTube',
        svg: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="currentColor" />
                <path d="M10 9v6l5-3z" fill="var(--color-cloud-white)" />
            </svg>
        ),
    },
]

const Footer = () => {
    return (
        <footer className="site-footer">
            <svg className="footer-wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
                <path
                    d="M0 22C240 2 480 40 720 22C960 4 1200 38 1440 18V60H0Z"
                    fill="var(--color-cloud-violet)"
                />
                <path
                    d="M0 38C240 20 480 54 720 38C960 22 1200 52 1440 34V60H0Z"
                    fill="var(--color-midnight-navy)"
                />
            </svg>

            <div className="footer-bar">
                <div className="brand footer-brand">
                    <img src={logo} alt="Pig Scream Ice Cream logo" className="brand-logo" />
                    <span className="brand-text">
                        <span className="brand-name">Pig Scream</span>
                        <span className="brand-tagline">Ice Cream Company</span>
                    </span>
                </div>

                <span className="footer-divider" aria-hidden="true" />

                <p className="footer-slogan">Scoop Happiness, One Cone at a Time!</p>

                <span className="footer-divider" aria-hidden="true" />

                <ul className="social-list" aria-label="Social media">
                    {SOCIAL_ICONS.map((icon) => (
                        <li key={icon.name} className="social-icon" title={icon.name} aria-label={icon.name}>
                            {icon.svg}
                        </li>
                    ))}
                </ul>
            </div>

            <p className="footer-copyright">© {new Date().getFullYear()} Pig Scream Ice Cream Company</p>
        </footer>
    )
}

export default Footer
