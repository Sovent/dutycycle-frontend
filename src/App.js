import SignUp from './SignUp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main';
import { WithAuthentication, PrivateRoute } from './Auth';
import SignIn from './SignIn';

function App() {
  return (
    <WithAuthentication>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/">
            <Main />
          </PrivateRoute>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </BrowserRouter>
    </WithAuthentication>
  );
}

export default App;
