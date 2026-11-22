import './App.css'
import logo from './assets/chris-p-bacon-logo.png'
import flyingPig from './assets/chris-p-bacon-flying.gif'

function App() {
  return (
    <main>
        <h1>Pig Scream Ice Cream</h1>
        <img src={logo} alt="Pig Scream Ice Cream logo" />
        <img src={flyingPig} alt="Flying Pig" />
    </main>
  )
}

export default App
