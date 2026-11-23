import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'

// Hash-based routing (e.g. #/menu) so the app works as static files on S3/CloudFront
const PAGE_NAMES = ['home', 'menu', 'about']

function getPageFromHash() {
    const page = window.location.hash.replace(/^#\/?/, '').toLowerCase()
    return PAGE_NAMES.includes(page) ? page : 'home'
}

function App() {
    const [currentPage, setCurrentPage] = useState(getPageFromHash)
    const [isCartOpen, setIsCartOpen] = useState(false)

    useEffect(() => {
        function handleHashChange() {
            setCurrentPage(getPageFromHash())
            window.scrollTo(0, 0)
        }
        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])

    return (
        <div className="app">
            <Header
                currentPage={currentPage}
                isCartOpen={isCartOpen}
                onCartToggle={() => setIsCartOpen((open) => !open)}
                onCartClose={() => setIsCartOpen(false)}
            />
            <main className="page">
                {currentPage === 'home' && <Home />}
                {currentPage === 'menu' && <Menu />}
                {currentPage === 'about' && <About />}
            </main>
            <Footer />
        </div>
    )
}

export default App
