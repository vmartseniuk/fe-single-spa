import { BrowserRouter as Router, Route, Routes, Link } from 'react-router'

function App() {
  return (
    <>
      <h4>VITE APP - Child #1</h4>
      <button onClick={() => alert('Child #1 clicked')}>Click me1</button>

      <Router basename='/mifea'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page1">page 1</Link></li>
            <li><Link to="/page2">page 2</Link></li>
          </ul>
     
          <Routes >
            <Route path="/" element={<div>Home content</div>} />
            <Route path="/page1" element={<div >Page1 content</div>} />
            <Route path="/page2" element={<div >Page2 content</div>} />


         
          </Routes>
        </Router>
    </>
  )
}

export default App


