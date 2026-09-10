import './App.css'

function App() {

  return (
    <>
      <header>
        <h1 className='text'>Emoji Finder</h1>
        <p className='header text'>Find emoji by keywords</p>
      </header>
      <input type='search' value={'Placeholder'} />
      <div className="cartBox">
        <div className="cart">
          <p className="text1">💯</p>
          <p className="text2">100</p>
          <p className="text3">Hundred, points, symbol, wow, win, perfect, parties</p>
        </div>
        <div className="cart">
          <p className="text1">🔢</p>
          <p className="text2">1234</p>
          <p className="text3">input symbol for numbers symbol</p>
        </div>
        <div className="cart">
          <p className="text1">🔢</p>
          <p className="text2">1234</p>
          <p className="text3">input symbol for numbers symbol</p>
        </div>
      </div>
    </>
  )
}

export default App
