import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main';
import { WithAuthentication, PrivateRoute } from './Auth';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  return (
    <BrowserRouter>
      <WithAuthentication>
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
      </WithAuthentication>
    </BrowserRouter>
  );
}

export default App;
