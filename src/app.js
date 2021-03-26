import { Home, Signin, Signup, Browse } from './pages'
import * as ROUTES from './constants/routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


export default function App() {
  return (
    <Router>
      <Switch>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      </Switch>
    </Router>
  );
}

