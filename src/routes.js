import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Login from './pages/Login'
import Events from './pages/Events'
import EventsForm from './pages/Events/Form'

const Routes = () => (
  <Router>
    <Route exact path="/login">
      <Login/>
    </Route>
    <Route exact path="/home">
      <Events/>
    </Route>
    <Route exact path="/events/new">
      <EventsForm/>
    </Route>
  </Router>
)

export default Routes;