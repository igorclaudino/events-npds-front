import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Login from './pages/Login'

const Routes = () => (
  <Router>
    <Route path="/login">
      <Login/>
    </Route>
    <Redirect to="/login"/>
  </Router>
)

export default Routes;