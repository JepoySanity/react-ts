import * as Router from 'react-router-dom'
import Login from './Pages/Login'
import Users from './Pages/Users'

function App() {
  return (
    <div className="App">
      <Router.BrowserRouter>
        <Router.Routes>
          <Router.Route path="/" element={ <Login/> } />
          <Router.Route path="/users" element={ <Users/> } />
        </Router.Routes>
      </Router.BrowserRouter>
    </div>
  );
}

export default App;
