import logo from '../assets/logo.png'

//TODO placeholder homepage - the real design comes in a later phase
const Home = () => {
    return (
        <section className="home-hero">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to Pig Scream!</h1>
                <p className="hero-text">
                    Small-batch ice cream so good, pigs will fly. Browse our flavors and find your new favorite scoop.
                </p>
                <a href="#/menu" className="primary-btn hero-btn">
                    View Our Menu
                </a>
            </div>
            <img src={logo} alt="Pig Scream mascot holding an ice cream cone" className="hero-logo" />
        </section>
    )
}

export default Home
