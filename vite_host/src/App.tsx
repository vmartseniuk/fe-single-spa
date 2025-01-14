/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Suspense, useEffect } from 'react'

// import { registerApplication } from 'single-spa'
import { runSingleSpa, unregisterAllApps } from './micro-fe';
// import { MicroApp } from './MicroApp';
import { registerApplication, start } from 'single-spa';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router'
import { MicroApp } from './MicroApp'
import { getAppNames } from 'single-spa';




const mifeAModule = '@learnSspa/mifeA';
const mifeBModule = '@learnSspa/mifeB';


registerApplication({
  name: 'mifeA',
  app: () => import(/* @vite-ignore */ mifeAModule),
  activeWhen: '/mifea',
   
});

registerApplication({
  name: 'mifeB',
  app: () => import(/* @vite-ignore */ mifeBModule),
  activeWhen: '/mifeb',
    
});

start();

function App() {

  useEffect(() => {
    console.log('MicroApp ~ useEffect', getAppNames());

    return () => {
      console.log('App  ~ unregisterAllApps');
      // unregisterAllApps()
    }
  }, [])

  return (
    <div>
      <h1>Vite + React CONTAINER</h1>
      <Suspense fallback={<div>Loading MicroFE...</div>}>
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mifea">MicroFE A</Link></li>
            <li><Link to="/mifeb">MicroFE B</Link></li>
          </ul>
     
          <Routes>
            <Route path="/" element={<div>Some HOST content</div>} />
            <Route path="/" element={<div id="micro-app" >Some child content</div>} />

            {/* <Route path="/mifea" element={<MicroApp config={{
              name: 'mifeA',
              activeWhen: '/mifea',
              module: mifeAModule
            }} />} />
            <Route path="/mifeb" element={<MicroApp config={{
              name: 'mifeB',
              activeWhen: '/mifeb',
              module: mifeBModule
            }} />} /> */}
          </Routes>
        </Router>
      </Suspense>
    </div>

  )
}

export default App
