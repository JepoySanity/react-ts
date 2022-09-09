import * as Router from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
      <Router.BrowserRouter>
        <Router.Routes>
          <Router.Route path="/" element={ <Login/> } />
          <Router.Route path="/users" element={ <Home/> } />
        </Router.Routes>
      </Router.BrowserRouter>
    </div>
  );
}

export default App;
