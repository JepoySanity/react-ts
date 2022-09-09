import * as Router from 'react-router-dom'
import LoginForm from './Components/LoginForm'

function App() {
  return (
    <div className="App">
      <Router.BrowserRouter>
        <Router.Routes>
          <Router.Route path="/" element={ <LoginForm/> } />
        </Router.Routes>
      </Router.BrowserRouter>
    </div>
  );
}

export default App;
